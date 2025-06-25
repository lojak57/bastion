import { n as noop, P as fallback, I as attr, K as escape_html, O as slot, Q as bind_props, C as push, V as copy_payload, W as assign_payload, E as pop, G as ensure_array_like, J as attr_class, M as stringify } from "./index.js";
import "clsx";
import { L as LuxuryInput, W as WizardContainer } from "./WizardContainer.js";
/* empty css                                           */
function createEventDispatcher() {
  return noop;
}
function WizardStep($$payload, $$props) {
  let title = fallback($$props["title"], "");
  let description = fallback($$props["description"], "");
  let icon = fallback($$props["icon"], "");
  $$payload.out += `<div class="wizard-step svelte-1pjapul">`;
  if (icon) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="step-icon svelte-1pjapul"><svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"${attr("d", icon)}></path></svg></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  if (title) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<h2 class="step-title svelte-1pjapul">${escape_html(title)}</h2>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  if (description) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<p class="step-description svelte-1pjapul">${escape_html(description)}</p>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <div class="step-content svelte-1pjapul"><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></div></div>`;
  bind_props($$props, { title, description, icon });
}
function BasicInfoStep($$payload, $$props) {
  push();
  let formData = $$props["formData"];
  let errors = fallback($$props["errors"], () => ({}), true);
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<div class="step-content svelte-173dvg4"><div class="step-header svelte-173dvg4"><h3 class="step-title svelte-173dvg4">Let's get to know you</h3> <p class="step-description svelte-173dvg4">Start with your basic contact information</p></div> <div class="form-grid svelte-173dvg4"><div class="form-row svelte-173dvg4">`;
    LuxuryInput($$payload2, {
      label: "First Name",
      error: errors.firstName,
      placeholder: "Your first name",
      required: true,
      get value() {
        return formData.firstName;
      },
      set value($$value) {
        formData.firstName = $$value;
        $$settled = false;
      }
    });
    $$payload2.out += `<!----> `;
    LuxuryInput($$payload2, {
      label: "Last Name",
      error: errors.lastName,
      placeholder: "Your last name",
      required: true,
      get value() {
        return formData.lastName;
      },
      set value($$value) {
        formData.lastName = $$value;
        $$settled = false;
      }
    });
    $$payload2.out += `<!----></div> `;
    LuxuryInput($$payload2, {
      type: "email",
      label: "Email Address",
      error: errors.email,
      placeholder: "your@email.com",
      required: true,
      get value() {
        return formData.email;
      },
      set value($$value) {
        formData.email = $$value;
        $$settled = false;
      }
    });
    $$payload2.out += `<!----></div></div>`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  bind_props($$props, { formData, errors });
  pop();
}
function BusinessInfoStep($$payload, $$props) {
  push();
  let formData = $$props["formData"];
  let errors = fallback($$props["errors"], () => ({}), true);
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<div class="step-content svelte-1cyhk5t"><div class="step-header svelte-1cyhk5t"><h3 class="step-title svelte-1cyhk5t">Tell us about your business</h3> <p class="step-description svelte-1cyhk5t">Help us understand your company and how to reach you</p></div> <div class="form-grid svelte-1cyhk5t">`;
    LuxuryInput($$payload2, {
      label: "Company Name",
      error: errors.companyName,
      placeholder: "Your company name",
      required: true,
      get value() {
        return formData.companyName;
      },
      set value($$value) {
        formData.companyName = $$value;
        $$settled = false;
      }
    });
    $$payload2.out += `<!----> `;
    LuxuryInput($$payload2, {
      type: "tel",
      label: "Phone Number",
      error: errors.phone,
      placeholder: "(555) 123-4567",
      get value() {
        return formData.phone;
      },
      set value($$value) {
        formData.phone = $$value;
        $$settled = false;
      }
    });
    $$payload2.out += `<!----> `;
    LuxuryInput($$payload2, {
      type: "url",
      label: "Website (optional)",
      placeholder: "https://yourwebsite.com",
      get value() {
        return formData.companyWebsite;
      },
      set value($$value) {
        formData.companyWebsite = $$value;
        $$settled = false;
      }
    });
    $$payload2.out += `<!----></div></div>`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  bind_props($$props, { formData, errors });
  pop();
}
function ProjectDetailsStep($$payload, $$props) {
  push();
  let formData = $$props["formData"];
  let errors = fallback($$props["errors"], () => ({}), true);
  const budgetOptions = [
    {
      value: "under-1k",
      label: "Under $1,000/month"
    },
    {
      value: "1k-5k",
      label: "$1,000 - $5,000/month"
    },
    {
      value: "5k-10k",
      label: "$5,000 - $10,000/month"
    },
    {
      value: "10k-25k",
      label: "$10,000 - $25,000/month"
    },
    {
      value: "over-25k",
      label: "Over $25,000/month"
    }
  ];
  const timeframeOptions = [
    {
      value: "asap",
      label: "Ready to start immediately"
    },
    { value: "30-days", label: "Within 30 days" },
    { value: "90-days", label: "Within 90 days" },
    {
      value: "exploring",
      label: "Just exploring options"
    }
  ];
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    const each_array = ensure_array_like(budgetOptions);
    const each_array_1 = ensure_array_like(timeframeOptions);
    $$payload2.out += `<div class="step-content svelte-f1qf2n"><div class="step-header svelte-f1qf2n"><h3 class="step-title svelte-f1qf2n">Project details</h3> <p class="step-description svelte-f1qf2n">Let's understand your budget and timeline</p></div> <div class="form-grid svelte-f1qf2n">`;
    LuxuryInput($$payload2, {
      label: "Service Interest",
      placeholder: "What service are you interested in?",
      get value() {
        return formData.serviceInterest;
      },
      set value($$value) {
        formData.serviceInterest = $$value;
        $$settled = false;
      }
    });
    $$payload2.out += `<!----> <div class="select-group svelte-f1qf2n"><label class="select-label svelte-f1qf2n">Monthly Budget Range *</label> <div class="radio-group svelte-f1qf2n"><!--[-->`;
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let option = each_array[$$index];
      $$payload2.out += `<label class="radio-option svelte-f1qf2n"><input type="radio"${attr("checked", formData.monthlyBudget === option.value, true)}${attr("value", option.value)} class="svelte-f1qf2n"/> <span class="radio-label svelte-f1qf2n">${escape_html(option.label)}</span></label>`;
    }
    $$payload2.out += `<!--]--></div> `;
    if (errors.monthlyBudget) {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `<div class="error-text svelte-f1qf2n">${escape_html(errors.monthlyBudget)}</div>`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--></div> <div class="select-group svelte-f1qf2n"><label class="select-label svelte-f1qf2n">Timeframe *</label> <div class="radio-group svelte-f1qf2n"><!--[-->`;
    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
      let option = each_array_1[$$index_1];
      $$payload2.out += `<label class="radio-option svelte-f1qf2n"><input type="radio"${attr("checked", formData.timeframe === option.value, true)}${attr("value", option.value)} class="svelte-f1qf2n"/> <span class="radio-label svelte-f1qf2n">${escape_html(option.label)}</span></label>`;
    }
    $$payload2.out += `<!--]--></div> `;
    if (errors.timeframe) {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `<div class="error-text svelte-f1qf2n">${escape_html(errors.timeframe)}</div>`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--></div></div></div>`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  bind_props($$props, { formData, errors });
  pop();
}
function GoalsStep($$payload, $$props) {
  push();
  let formData = $$props["formData"];
  let errors = fallback($$props["errors"], () => ({}), true);
  $$payload.out += `<div class="step-content svelte-1focc0"><div class="step-header svelte-1focc0"><h3 class="step-title svelte-1focc0">Your goals &amp; context</h3> <p class="step-description svelte-1focc0">Help us understand how we can best serve your needs</p></div> <div class="form-grid svelte-1focc0"><div class="textarea-group svelte-1focc0"><label for="current-marketing" class="textarea-label svelte-1focc0">Current Marketing Efforts</label> <textarea id="current-marketing" placeholder="Tell us about your current marketing efforts and what's working or not working..." rows="3" class="luxury-textarea svelte-1focc0">`;
  const $$body = escape_html(formData.currentMarketing);
  if ($$body) {
    $$payload.out += `${$$body}`;
  }
  $$payload.out += `</textarea></div> <div class="textarea-group svelte-1focc0"><label for="pain-points" class="textarea-label svelte-1focc0">Main Challenges</label> <textarea id="pain-points" placeholder="What are your biggest marketing challenges or pain points?" rows="3" class="luxury-textarea svelte-1focc0">`;
  const $$body_1 = escape_html(formData.painPoints);
  if ($$body_1) {
    $$payload.out += `${$$body_1}`;
  }
  $$payload.out += `</textarea></div> <div class="textarea-group svelte-1focc0"><label for="goals" class="textarea-label svelte-1focc0">Goals &amp; Objectives *</label> <textarea id="goals" placeholder="What are you hoping to achieve? What does success look like for your business?" rows="4"${attr_class("luxury-textarea svelte-1focc0", void 0, { "error": errors.goals })}>`;
  const $$body_2 = escape_html(formData.goals);
  if ($$body_2) {
    $$payload.out += `${$$body_2}`;
  }
  $$payload.out += `</textarea> `;
  if (errors.goals) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="error-text svelte-1focc0">${escape_html(errors.goals)}</div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div> <div class="checkbox-group svelte-1focc0"><label class="checkbox-option svelte-1focc0"><input type="checkbox"${attr("checked", formData.decisionMaker, true)} class="svelte-1focc0"/> <span class="checkbox-label svelte-1focc0">I am the primary decision maker for this project</span></label></div></div></div>`;
  bind_props($$props, { formData, errors });
  pop();
}
function LeadCaptureWizard($$payload, $$props) {
  push();
  const dispatch = createEventDispatcher();
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
    phone: "",
    companyWebsite: "",
    // Step 3: Project Details
    serviceInterest,
    monthlyBudget: "",
    timeframe: "",
    // Step 4: Goals & Context
    currentMarketing: "",
    painPoints: "",
    goals: "",
    decisionMaker: false
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
        if (formData.phone && !/^[\+]?[\d\s\-\(\)]+$/.test(formData.phone)) {
          errors.phone = "Please enter a valid phone number";
        }
        break;
      case 2:
        if (!formData.monthlyBudget) errors.monthlyBudget = "Please select a budget range";
        if (!formData.timeframe) errors.timeframe = "Please select a timeframe";
        break;
      case 3:
        if (!formData.goals.trim()) errors.goals = "Please tell us about your goals";
        break;
    }
    return Object.keys(errors).length === 0;
  }
  function handleNext() {
    if (validateStep(currentStep)) {
      currentStep++;
    }
  }
  function handleBack() {
    if (currentStep > 0) {
      currentStep--;
    }
  }
  async function handleSubmit() {
    if (!validateStep(currentStep)) return;
    loading = true;
    try {
      const submissionData = {
        ...formData,
        pageUrl: window.location.href,
        formName,
        submittedAt: (/* @__PURE__ */ new Date()).toISOString()
      };
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submissionData)
      });
      const result = await response.json();
      if (result.success) {
        dispatch("success", { leadId: result.leadId });
        setTimeout(
          () => {
            window.location.href = "/thank-you";
          },
          1500
        );
      } else {
        throw new Error(result.message || "Something went wrong");
      }
    } catch (err) {
      console.error("Form submission error:", err);
      errors.submit = "Network error. Please check your connection and try again.";
    } finally {
      loading = false;
    }
  }
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    WizardContainer($$payload2, {
      children: ($$payload3) => {
        WizardStep($$payload3, {
          title: `${stringify(currentStep + 1)} of ${stringify(totalSteps)}`,
          current: currentStep,
          total: totalSteps,
          onNext: handleNext,
          onBack: handleBack,
          onSubmit: handleSubmit,
          loading,
          nextDisabled: false,
          backDisabled: currentStep === 0,
          submitDisabled: false,
          isLastStep: currentStep === totalSteps - 1,
          children: ($$payload4) => {
            if (currentStep === 0) {
              $$payload4.out += "<!--[-->";
              BasicInfoStep($$payload4, {
                errors,
                get formData() {
                  return formData;
                },
                set formData($$value) {
                  formData = $$value;
                  $$settled = false;
                }
              });
            } else if (currentStep === 1) {
              $$payload4.out += "<!--[1-->";
              BusinessInfoStep($$payload4, {
                errors,
                get formData() {
                  return formData;
                },
                set formData($$value) {
                  formData = $$value;
                  $$settled = false;
                }
              });
            } else if (currentStep === 2) {
              $$payload4.out += "<!--[2-->";
              ProjectDetailsStep($$payload4, {
                errors,
                get formData() {
                  return formData;
                },
                set formData($$value) {
                  formData = $$value;
                  $$settled = false;
                }
              });
            } else if (currentStep === 3) {
              $$payload4.out += "<!--[3-->";
              GoalsStep($$payload4, {
                errors,
                get formData() {
                  return formData;
                },
                set formData($$value) {
                  formData = $$value;
                  $$settled = false;
                }
              });
            } else {
              $$payload4.out += "<!--[!-->";
            }
            $$payload4.out += `<!--]-->`;
          },
          $$slots: { default: true }
        });
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
