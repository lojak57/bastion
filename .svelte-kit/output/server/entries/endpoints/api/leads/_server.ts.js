import { j as json } from "../../../../chunks/index2.js";
import { d as private_env } from "../../../../chunks/shared-server.js";
const TRUEFORM_API_URL = private_env.TRUEFORM_API_URL || "https://your-trueform-domain.com";
const TRUEFORM_API_KEY = private_env.TRUEFORM_API_KEY || "";
function validateLeadData(data) {
  const errors = [];
  if (!data.firstName?.trim()) errors.push("First name is required");
  if (!data.lastName?.trim()) errors.push("Last name is required");
  if (!data.email?.trim()) errors.push("Email is required");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (data.email && !emailRegex.test(data.email)) {
    errors.push("Invalid email format");
  }
  return {
    success: errors.length === 0,
    errors: errors.length > 0 ? errors : void 0
  };
}
async function submitToTrueForm(leadData) {
  try {
    const response = await fetch(`${TRUEFORM_API_URL}/api/weknowco-leads`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${TRUEFORM_API_KEY}`
      },
      body: JSON.stringify(leadData)
    });
    if (!response.ok) {
      throw new Error(`TrueForm API error: ${response.status}`);
    }
    return await response.json();
  } catch (err) {
    console.error("TrueForm submission error:", err);
    throw err;
  }
}
function extractUrlParams(url) {
  const urlObj = new URL(url);
  return {
    utmSource: urlObj.searchParams.get("utm_source") || void 0,
    utmMedium: urlObj.searchParams.get("utm_medium") || void 0,
    utmCampaign: urlObj.searchParams.get("utm_campaign") || void 0,
    adGroup: urlObj.searchParams.get("utm_term") || void 0,
    keyword: urlObj.searchParams.get("utm_content") || void 0
  };
}
const POST = async ({ request }) => {
  try {
    const leadData = await request.json();
    const validation = validateLeadData(leadData);
    if (!validation.success) {
      return json(
        {
          success: false,
          error: "Validation failed",
          details: validation.errors
        },
        { status: 400 }
      );
    }
    const urlParams = leadData.pageUrl ? extractUrlParams(leadData.pageUrl) : {};
    const trueFormPayload = {
      ...leadData,
      leadSource: "weknowco",
      campaign: leadData.utmCampaign || urlParams.utmCampaign || "organic",
      submittedAt: (/* @__PURE__ */ new Date()).toISOString(),
      // Merge URL params
      utmSource: leadData.utmSource || urlParams.utmSource || "direct",
      utmMedium: leadData.utmMedium || urlParams.utmMedium || "website",
      utmCampaign: leadData.utmCampaign || urlParams.utmCampaign || "organic",
      adGroup: leadData.adGroup || urlParams.adGroup,
      keyword: leadData.keyword || urlParams.keyword
    };
    const trueFormResponse = await submitToTrueForm(trueFormPayload);
    console.log("Lead successfully submitted to TrueForm:", {
      leadId: trueFormResponse.project?.id,
      email: leadData.email,
      company: leadData.companyName
    });
    return json({
      success: true,
      leadId: trueFormResponse.project?.id,
      message: "Lead submitted successfully"
    });
  } catch (err) {
    console.error("Lead submission error:", err);
    return json(
      {
        success: false,
        error: "Failed to submit lead",
        message: "We encountered an issue processing your request. Please try again or contact us directly."
      },
      { status: 500 }
    );
  }
};
const GET = async () => {
  return json({
    message: "weKnowCO Lead Capture API",
    endpoints: {
      POST: "/api/leads - Submit a new lead"
    },
    required_fields: ["firstName", "lastName", "email"],
    optional_fields: [
      "companyName",
      "phone",
      "serviceInterest",
      "monthlyBudget",
      "timeframe",
      "currentMarketing",
      "painPoints",
      "goals"
    ]
  });
};
export {
  GET,
  POST
};
