# TrueForm CRM Integration Guide

## Overview
This document outlines how weKnowCO marketing sites integrate with TrueForm CRM for lead management. All leads are automatically tagged and routed to the appropriate TrueForm instance based on the source marketing site and form type.

## Lead Submission Endpoint

### API Endpoint
```
POST https://api.trueform.app/api/{whiteLabelId}-leads
```

### Authentication
```http
Authorization: Bearer {TRUEFORM_API_KEY}
Content-Type: application/json
```

## Lead Data Structure

### Core Lead Fields
```typescript
interface LeadData {
  // Required Fields
  firstName: string;
  lastName: string;
  email: string;
  
  // Contact Info
  phone?: string;
  companyName?: string;
  companyWebsite?: string;
  
  // Business Details
  industry?: string;
  companySize?: string;
  monthlyBudget?: string;
  currentRevenue?: string;
  revenueProjection?: string;
  teamSize?: string;
  fundingStatus?: string;
  
  // Project/Service Details
  serviceInterest?: string;
  timeframe?: string;
  goals?: string;
  painPoints?: string;
  currentMarketing?: string;
  decisionMaker?: boolean;
  
  // Partnership Specific (Solo Biz Helper)
  partnershipType?: string;
  marketingBudget?: string;
  businessDescription?: string;
  uniqueValue?: string;
  whyPartnership?: string;
  foundedYear?: string;
  
  // Meta Data
  formName?: string;
  formType?: string;
  pageUrl?: string;
  submittedAt: string;
  
  // UTM Tracking
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  adGroup?: string;
  keyword?: string;
}
```

## Automatic Lead Tagging System

### Site Identification Tags
- `site:weknowco` - Identifies the source marketing site
- `site:{whiteLabelId}` - For future white-label sites

### Form Type Tags
- `form:lead-capture` - Standard lead capture wizard
- `form:solo-biz-helper` - Partnership application form

### Interest Classification Tags
- `interest:marketing-services` - General marketing inquiries
- `interest:partnership` - Partnership/collaboration inquiries
- `service:{service-name}` - Specific service interest (SEO, PPC, etc.)

### Budget Tier Tags
- `budget:enterprise` - $10,000+ monthly budget
- `budget:premium` - $5,000+ monthly budget  
- `budget:growth` - $2,500+ monthly budget
- `budget:starter` - Under $2,500 monthly budget

### Urgency Level Tags
- `urgency:high` - Immediate/ASAP timeline
- `urgency:medium` - 1-3 months timeline
- `urgency:low` - 3+ months timeline

### Marketing Attribution Tags
- `source:{utm_source}` - Traffic source (google, facebook, etc.)
- `medium:{utm_medium}` - Marketing medium (cpc, organic, email, etc.)
- `campaign:{utm_campaign}` - Specific campaign name

## Lead Processing Flow

1. **Form Submission** → Marketing site form (Lead Capture or Solo Biz Helper)
2. **Validation** → Server-side validation of required fields
3. **Tag Generation** → Automatic tag assignment based on form data
4. **API Submission** → POST to TrueForm API with full lead data + tags
5. **Response Handling** → Success/error handling and user feedback
6. **Lead Routing** → TrueForm processes lead based on tags and assigns to appropriate team

## Expected TrueForm Response Format

### Success Response
```json
{
  "success": true,
  "project": {
    "id": "lead_abc123",
    "status": "new",
    "assignedTo": null
  },
  "message": "Lead created successfully"
}
```

### Error Response
```json
{
  "success": false,
  "error": "validation_failed",
  "message": "Missing required fields",
  "details": ["firstName is required", "email is required"]
}
```

## White Label Configuration

Each marketing site has its own configuration in `src/lib/config/site.config.ts`:

```typescript
export const SITE_CONFIG = {
  name: "weKnowCO",
  api: {
    whiteLabelId: "weknowco"  // Used in API endpoint
  }
  // ... other config
};
```

## Rate Limiting

Lead submissions are rate-limited to prevent abuse:
- **5 submissions per minute** per IP address
- **50 submissions per hour** per IP address

## Environment Variables Required

```env
VITE_TRUEFORM_API_URL=https://api.trueform.app
VITE_TRUEFORM_API_KEY=your_api_key_here
```

## Lead Quality Scoring (Recommended)

Based on the tags, TrueForm should implement lead scoring:

### High Priority Leads (Score: 90-100)
- `budget:enterprise` + `urgency:high`
- `form:solo-biz-helper` (partnership inquiries)
- `interest:partnership` with revenue data

### Medium Priority Leads (Score: 60-89)
- `budget:premium` or `budget:growth`
- `urgency:medium` with clear service interest
- Complete contact info + company details

### Low Priority Leads (Score: 0-59)
- `budget:starter` or no budget specified
- `urgency:low` or no timeline
- Minimal form completion

## Integration Testing

### Test Lead Payload
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "companyName": "Test Company",
  "phone": "(555) 123-4567",
  "serviceInterest": "SEO",
  "monthlyBudget": "$5,000 - $10,000",
  "timeframe": "1-3 months",
  "goals": "Increase organic traffic",
  "formType": "lead-capture",
  "formName": "Lead Capture",
  "pageUrl": "https://weknowco.com/start-your-climb",
  "submittedAt": "2024-01-15T10:30:00Z",
  "utmSource": "google",
  "utmMedium": "cpc",
  "utmCampaign": "seo-services",
  "leadSource": "weKnowCO Marketing Site",
  "whiteLabelId": "weknowco",
  "siteName": "weKnowCO",
  "campaign": "seo-services",
  "tags": [
    "site:weknowco",
    "form:lead-capture",
    "interest:marketing-services",
    "service:seo",
    "budget:premium",
    "urgency:medium",
    "source:google",
    "medium:cpc",
    "campaign:seo-services"
  ]
}
```

## Future Considerations

1. **Lead Deduplication** - TrueForm should check for duplicate emails
2. **Lead Nurturing** - Automatic email sequences based on tags
3. **Analytics Integration** - Track conversion rates by tag combinations
4. **A/B Testing** - Different form versions with unique tags
5. **Lead Scoring Updates** - Machine learning to improve scoring based on conversion data

---

*This integration ensures all leads from weKnowCO marketing sites are properly categorized, tracked, and routed within TrueForm CRM for optimal follow-up and conversion.*