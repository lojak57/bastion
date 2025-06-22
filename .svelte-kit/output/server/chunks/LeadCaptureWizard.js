import { O as fallback, U as copy_payload, V as assign_payload, P as bind_props, C as pop, z as push } from "./index.js";
import { W as WizardContainer, a as WizardStep, L as LuxuryInput } from "./WizardStep.js";
function LeadCaptureWizard($$payload, $$props) {
  push();
  let canGoNext, canGoBack, isLastStep, stepConfig;
  let serviceInterest = fallback($$props["serviceInterest"], "");
  let formName = fallback($$props["formName"], "Lead Capture");
  let currentStep = 0;
  const totalSteps = 4;
  let loading = false;
  let formData = {
    // Step 1: Basic Info
    firstName: "",
    lastName: "",
    email: "",
    // Step 2: Business Info
    companyName: "",
    goals: ""
  };
  let errors = {};
  function validateStep(step) {
    errors = {};
    switch (step) {
      case 0:
        if (!formData.firstName.trim()) errors.firstName = "First name is required";
        if (!formData.lastName.trim()) errors.lastName = "Last name is required";
        if (!formData.email.trim()) errors.email = "Email is required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          errors.email = "Please enter a valid email address";
        }
        break;
      case 1:
        if (!formData.companyName.trim()) errors.companyName = "Company name is required";
        break;
      case 2:
        errors.monthlyBudget = "Please select a budget range";
        errors.timeframe = "Please select a timeframe";
        break;
      case 3:
        if (!formData.goals.trim()) errors.goals = "Please tell us about your goals";
        break;
    }
    return Object.keys(errors).length === 0;
  }
  canGoNext = validateStep(0);
  canGoBack = currentStep > 0;
  isLastStep = currentStep === totalSteps - 1;
  stepConfig = [
    {
      title: "Let's get started",
      subtitle: "First, tell us a bit about yourself"
    },
    {
      title: "About your business",
      subtitle: "Help us understand your company"
    },
    {
      title: "Project details",
      subtitle: "What type of help are you looking for?"
    },
    {
      title: "Your goals",
      subtitle: "Finally, tell us about your vision"
    }
  ];
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    WizardContainer($$payload2, {
      currentStep,
      totalSteps,
      title: stepConfig[currentStep].title,
      subtitle: stepConfig[currentStep].subtitle,
      canGoBack,
      canGoNext,
      isLastStep,
      loading,
      children: ($$payload3) => {
        {
          $$payload3.out += "<!--[-->";
          WizardStep($$payload3, {
            title: "Nice to meet you!",
            description: "Let's start with the basics so we can personalize your experience.",
            icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
            children: ($$payload4) => {
              $$payload4.out += `<div class="form-grid svelte-3v6dfg">`;
              LuxuryInput($$payload4, {
                type: "text",
                label: "First Name",
                placeholder: "John",
                required: true,
                error: errors.firstName,
                get value() {
                  return formData.firstName;
                },
                set value($$value) {
                  formData.firstName = $$value;
                  $$settled = false;
                }
              });
              $$payload4.out += `<!----> `;
              LuxuryInput($$payload4, {
                type: "text",
                label: "Last Name",
                placeholder: "Smith",
                required: true,
                error: errors.lastName,
                get value() {
                  return formData.lastName;
                },
                set value($$value) {
                  formData.lastName = $$value;
                  $$settled = false;
                }
              });
              $$payload4.out += `<!----></div> `;
              LuxuryInput($$payload4, {
                type: "email",
                label: "Email Address",
                placeholder: "john@company.com",
                required: true,
                error: errors.email,
                hint: "We'll use this to send you updates and schedule your discovery call",
                get value() {
                  return formData.email;
                },
                set value($$value) {
                  formData.email = $$value;
                  $$settled = false;
                }
              });
              $$payload4.out += `<!---->`;
            },
            $$slots: { default: true }
          });
        }
        $$payload3.out += `<!--]-->`;
      },
      $$slots: { default: true }
    });
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  bind_props($$props, { serviceInterest, formName });
  pop();
}
export {
  LeadCaptureWizard as L
};
