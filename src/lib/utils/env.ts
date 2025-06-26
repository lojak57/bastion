import { dev } from '$app/environment';

export const ENV = {
	TRUEFORM_API_URL: import.meta.env.VITE_TRUEFORM_API_URL || 'https://api.trueform.app',
	TRUEFORM_API_KEY: import.meta.env.VITE_TRUEFORM_API_KEY || '',
	ENABLE_ANALYTICS: false,
	ENABLE_RATE_LIMITING: !dev
};

export function getWhiteLabelConfig() {
	return {
		siteId: 'bastion',
		siteName: 'Bastion',
		leadSource: 'Bastion Marketing Site',
		brandName: 'Bastion',
		domain: 'bastion.build',
		primaryColor: '#000000',
		secondaryColor: '#0284c7'
	};
}