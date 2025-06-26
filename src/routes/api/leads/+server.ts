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
	formType?: string;
	utmSource?: string;
	utmMedium?: string;
	utmCampaign?: string;
	adGroup?: string;
	keyword?: string;
	// Bastion Build Wizard fields
	idea?: string;
	problem?: string;
	urgency?: string;
	budget?: string;
	techLevel?: string;
	specificStack?: string;
	success?: string;
	wantsCall?: boolean;
	wantsQuoteFirst?: boolean;
	deck?: any;
	tags?: string[];
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
	tags: string[];
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
function extractUrlParams(url: string): ExtractedUrParam {
	const urlObj = new URL(url);
	return {
		utmSource: urlObj.searchParams.get('utm_source') || undefined,
		utmMedium: urlObj.searchParams.get('utm_medium') || undefined,
		utmCampaign: urlObj.searchParams.get('utm_campaign') || undefined,
		adGroup: urlObj.searchParams.get('utm_term') || undefined,
		keyword: urlObj.searchParams.get('utm_content') || undefined
	};
}

// Determine lead tags based on form data and source
function determineLeadTags(leadData: LeadFormData): string[] {
	const tags: string[] = [];
	
	// Base site tag
	tags.push(`site:${SITE_CONFIG.api.whiteLabelId}`);
	
	// Form type tags
	if (leadData.formType === 'bastion-build-wizard') {
		tags.push('form:build-wizard');
		tags.push('interest:mvp-build');
	} else if (leadData.formType === 'partnership') {
		tags.push('form:solo-biz-helper');
		tags.push('interest:partnership');
	} else if (leadData.formName?.toLowerCase().includes('lead capture')) {
		tags.push('form:lead-capture');
		tags.push('interest:marketing-services');
	}
	
	// Service interest tags
	if (leadData.serviceInterest) {
		tags.push(`service:${leadData.serviceInterest.toLowerCase().replace(/\s+/g, '-')}`);
	}
	
	// Budget tier tags
	if (leadData.budget) {
		// Bastion Build Wizard budget format
		const budget = leadData.budget.toLowerCase();
		if (budget.includes('15k+')) {
			tags.push('budget:enterprise');
		} else if (budget.includes('7.5-15k')) {
			tags.push('budget:premium');
		} else if (budget.includes('5-7.5k')) {
			tags.push('budget:growth');
		} else if (budget.includes('<5k')) {
			tags.push('budget:starter');
		}
	} else if (leadData.monthlyBudget) {
		// Legacy format
		const budget = leadData.monthlyBudget.toLowerCase();
		if (budget.includes('10,000') || budget.includes('10000')) {
			tags.push('budget:enterprise');
		} else if (budget.includes('5,000') || budget.includes('5000')) {
			tags.push('budget:premium');
		} else if (budget.includes('2,500') || budget.includes('2500')) {
			tags.push('budget:growth');
		} else {
			tags.push('budget:starter');
		}
	}
	
	// UTM source tags
	if (leadData.utmSource) {
		tags.push(`source:${leadData.utmSource}`);
	}
	if (leadData.utmMedium) {
		tags.push(`medium:${leadData.utmMedium}`);
	}
	if (leadData.utmCampaign) {
		tags.push(`campaign:${leadData.utmCampaign}`);
	}
	
	// Timeline urgency tags
	if (leadData.urgency) {
		// Bastion Build Wizard urgency format
		const urgency = leadData.urgency.toLowerCase();
		if (urgency === 'asap') {
			tags.push('urgency:high');
		} else if (urgency === '2-4weeks' || urgency === '1-2months') {
			tags.push('urgency:medium');
		} else {
			tags.push('urgency:low');
		}
	} else if (leadData.timeframe) {
		// Legacy format
		const timeframe = leadData.timeframe.toLowerCase();
		if (timeframe.includes('immediate') || timeframe.includes('asap')) {
			tags.push('urgency:high');
		} else if (timeframe.includes('1-3 months')) {
			tags.push('urgency:medium');
		} else {
			tags.push('urgency:low');
		}
	}
	
	// Tech stack tags for Bastion
	if (leadData.techLevel) {
		tags.push(`tech-level:${leadData.techLevel}`);
		if (leadData.specificStack) {
			tags.push(`tech-stack:${leadData.specificStack.toLowerCase().replace(/\s+/g, '-')}`);
		}
	}
	
	// Merge any pre-computed tags
	if (leadData.tags && Array.isArray(leadData.tags)) {
		tags.push(...leadData.tags);
	}
	
	return tags;
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
		
		// Determine lead tags based on form type and source
		const leadTags = determineLeadTags(leadData);
		
		// Prepare payload for TrueForm
		const trueFormPayload: TrueFormPayload = {
			...leadData,
			leadSource: whiteLabelConfig.leadSource,
			whiteLabelId: whiteLabelConfig.siteId,
			siteName: whiteLabelConfig.siteName,
			campaign: leadData.utmCampaign || urlParams.utmCampaign || 'organic',
			submittedAt: new Date().toISOString(),
			tags: leadTags,
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
		message: 'Bastion Lead Capture API',
		endpoints: {
			POST: '/api/leads - Submit a new lead',
		},
		required_fields: ['firstName', 'lastName', 'email'],
		optional_fields: [
			'companyName', 'phone', 'idea', 'problem', 'urgency', 
			'budget', 'techLevel', 'success', 'wantsCall', 'wantsQuoteFirst'
		]
	});
};