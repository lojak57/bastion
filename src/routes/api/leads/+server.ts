import { json, error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { rateLimiters, createRateLimitResponse } from '$lib/utils/rateLimit';
import { ENV, getWhiteLabelConfig } from '$lib/utils/env';
import { SITE_CONFIG } from '$lib/config/site.config';

// Types for lead data
interface LeadFormData {
	firstName: string;
	lastName: string;
	email: string;
	companyName?: string;
	phone?: string;
	companyWebsite?: string;
	industry?: string;
	companySize?: string;
	serviceInterest?: string;
	monthlyBudget?: string;
	timeframe?: string;
	currentMarketing?: string;
	painPoints?: string;
	goals?: string;
	decisionMaker?: boolean;
	timeline?: string;
	pageUrl?: string;
	formName?: string;
	utmSource?: string;
	utmMedium?: string;
	utmCampaign?: string;
	adGroup?: string;
	keyword?: string;
}

interface ExtractedUrlParams {
	utmSource?: string;
	utmMedium?: string;
	utmCampaign?: string;
	adGroup?: string;
	keyword?: string;
}

interface TrueFormPayload extends LeadFormData {
	leadSource: string;
	whiteLabelId: string;
	siteName: string;
	campaign: string;
	submittedAt: string;
}

// Get environment variables from centralized config
const TRUEFORM_API_URL = ENV.TRUEFORM_API_URL;
const TRUEFORM_API_KEY = ENV.TRUEFORM_API_KEY;

// Validation function
function validateLeadData(data: any): { success: boolean; errors?: string[] } {
	const errors: string[] = [];
	
	if (!data.firstName?.trim()) errors.push('First name is required');
	if (!data.lastName?.trim()) errors.push('Last name is required');
	if (!data.email?.trim()) errors.push('Email is required');
	
	// Email format validation
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (data.email && !emailRegex.test(data.email)) {
		errors.push('Invalid email format');
	}
	
	return {
		success: errors.length === 0,
		errors: errors.length > 0 ? errors : undefined
	};
}

// Submit to TrueForm CRM
async function submitToTrueForm(leadData: TrueFormPayload) {
	try {
		const response = await fetch(`${TRUEFORM_API_URL}/api/${SITE_CONFIG.api.whiteLabelId}-leads`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${TRUEFORM_API_KEY}`
			},
			body: JSON.stringify(leadData)
		});
		
		if (!response.ok) {
			throw new Error(`TrueForm API error: ${response.status}`);
		}
		
		return await response.json();
	} catch (err) {
		console.error('TrueForm submission error:', err);
		throw err;
	}
}

// Extract URL parameters helper
function extractUrlParams(url: string): ExtractedUrlParams {
	const urlObj = new URL(url);
	return {
		utmSource: urlObj.searchParams.get('utm_source') || undefined,
		utmMedium: urlObj.searchParams.get('utm_medium') || undefined,
		utmCampaign: urlObj.searchParams.get('utm_campaign') || undefined,
		adGroup: urlObj.searchParams.get('utm_term') || undefined,
		keyword: urlObj.searchParams.get('utm_content') || undefined
	};
}

export const POST: RequestHandler = async ({ request, getClientAddress }) => {
	// Apply rate limiting
	if (ENV.ENABLE_RATE_LIMITING) {
		const clientIp = getClientAddress();
		const rateLimitResult = rateLimiters.forms.check(clientIp);
		
		if (!rateLimitResult.allowed) {
			return createRateLimitResponse(rateLimitResult.resetTime);
		}
	}
	try {
		const leadData: LeadFormData = await request.json();
		
		// Validate incoming data
		const validation = validateLeadData(leadData);
		if (!validation.success) {
			return json(
				{ 
					success: false, 
					error: 'Validation failed', 
					details: validation.errors 
				},
				{ status: 400 }
			);
		}
		
		// Extract URL parameters if pageUrl is provided
		const urlParams = leadData.pageUrl ? extractUrlParams(leadData.pageUrl) : {};
		
		// Get white label configuration
		const whiteLabelConfig = getWhiteLabelConfig();
		
		// Prepare payload for TrueForm
		const trueFormPayload: TrueFormPayload = {
			...leadData,
			leadSource: whiteLabelConfig.leadSource,
			whiteLabelId: whiteLabelConfig.siteId,
			siteName: whiteLabelConfig.siteName,
			campaign: leadData.utmCampaign || urlParams.utmCampaign || 'organic',
			submittedAt: new Date().toISOString(),
			// Merge URL params
			utmSource: leadData.utmSource || urlParams.utmSource || 'direct',
			utmMedium: leadData.utmMedium || urlParams.utmMedium || 'website',
			utmCampaign: leadData.utmCampaign || urlParams.utmCampaign || 'organic',
			adGroup: leadData.adGroup || urlParams.adGroup,
			keyword: leadData.keyword || urlParams.keyword
		};
		
		// Submit to TrueForm CRM
		const trueFormResponse = await submitToTrueForm(trueFormPayload);
		
		// Log successful submission only in development
		if (import.meta.env.DEV) {
			console.log('Lead successfully submitted to TrueForm:', {
				leadId: trueFormResponse.project?.id,
				email: leadData.email,
				company: leadData.companyName
			});
		}
		
		return json({
			success: true,
			leadId: trueFormResponse.project?.id,
			message: 'Lead submitted successfully'
		});
		
	} catch (err) {
		// Log errors only in development
		if (import.meta.env.DEV) {
			console.error('Lead submission error:', err);
		}
		
		// Return generic error to client
		return json(
			{
				success: false,
				error: 'Failed to submit lead',
				message: 'We encountered an issue processing your request. Please try again or contact us directly.'
			},
			{ status: 500 }
		);
	}
};

// Optional: GET endpoint for testing
export const GET: RequestHandler = async () => {
	return json({
		message: 'weKnowCO Lead Capture API',
		endpoints: {
			POST: '/api/leads - Submit a new lead',
		},
		required_fields: ['firstName', 'lastName', 'email'],
		optional_fields: [
			'companyName', 'phone', 'serviceInterest', 'monthlyBudget',
			'timeframe', 'currentMarketing', 'painPoints', 'goals'
		]
	});
};