import { C as push, P as fallback, I as attr, K as escape_html, J as attr_class, Q as bind_props, E as pop, U as attr_style, O as slot, M as stringify } from "./index.js";
/* empty css                                           */
function LuxuryInput($$payload, $$props) {
  push();
  let inputId, hasValue;
  let type = fallback($$props["type"], "text");
  let value = fallback($$props["value"], "");
  let label = fallback($$props["label"], "");
  let placeholder = fallback($$props["placeholder"], "");
  let required = fallback($$props["required"], false);
  let disabled = fallback($$props["disabled"], false);
  let error = fallback($$props["error"], "");
  let hint = fallback($$props["hint"], "");
  let id = fallback($$props["id"], "");
  let focused = false;
  let touched = false;
  inputId = id || `luxury-input-${Math.random().toString(36).substr(2, 9)}`;
  hasValue = value !== "" && value !== null && value !== void 0;
  $$payload.out += `<div class="luxury-input-container svelte-1tuuza">`;
  if (label) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<label${attr("for", inputId)} class="luxury-label svelte-1tuuza">${escape_html(label)} `;
    if (required) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<span class="required svelte-1tuuza">*</span>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></label>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <div${attr_class("luxury-input-wrapper svelte-1tuuza", void 0, {
    "focused": focused,
    "error": error && touched,
    "hasValue": hasValue
  })}><input${attr("type", type)}${attr("value", value)}${attr("placeholder", placeholder)}${attr("required", required, true)}${attr("disabled", disabled, true)}${attr("id", inputId)} class="luxury-input svelte-1tuuza"/> <div class="luxury-border svelte-1tuuza"></div></div> `;
  if (hint) {
    $$payload.out += "<!--[1-->";
    $$payload.out += `<div class="luxury-hint svelte-1tuuza">${escape_html(hint)}</div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div>`;
  bind_props($$props, {
    type,
    value,
    label,
    placeholder,
    required,
    disabled,
    error,
    hint,
    id
  });
  pop();
}
function WizardContainer($$payload, $$props) {
  push();
  let progress;
  let currentStep = fallback($$props["currentStep"], 0);
  let totalSteps = $$props["totalSteps"];
  let title = fallback($$props["title"], "");
  let subtitle = fallback($$props["subtitle"], "");
  let canGoBack = fallback($$props["canGoBack"], true);
  let canGoNext = fallback($$props["canGoNext"], false);
  let isLastStep = fallback($$props["isLastStep"], false);
  let loading = fallback($$props["loading"], false);
  progress = (currentStep + 1) / totalSteps * 100;
  $$payload.out += `<div class="wizard-container svelte-158sb68"><div class="wizard-progress svelte-158sb68"><div class="progress-track svelte-158sb68"><div class="progress-fill svelte-158sb68"${attr_style(`width: ${stringify(progress)}%`)}></div></div> <div class="progress-text svelte-158sb68">Step ${escape_html(currentStep + 1)} of ${escape_html(totalSteps)}</div></div> <div class="wizard-header svelte-158sb68">`;
  if (title) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<h1 class="wizard-title svelte-158sb68">${escape_html(title)}</h1>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  if (subtitle) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<p class="wizard-subtitle svelte-158sb68">${escape_html(subtitle)}</p>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div> <div class="wizard-content svelte-158sb68"><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></div> <div class="wizard-navigation svelte-158sb68"><button type="button"${attr_class("wizard-btn wizard-btn-secondary svelte-158sb68", void 0, { "disabled": !canGoBack || currentStep === 0 })}${attr("disabled", !canGoBack || currentStep === 0, true)}><svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg> Back</button> `;
  if (isLastStep) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<button type="submit"${attr_class("wizard-btn wizard-btn-primary svelte-158sb68", void 0, { "loading": loading })}${attr("disabled", !canGoNext || loading, true)}>`;
    if (loading) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<svg class="animate-spin w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Submitting...`;
    } else {
      $$payload.out += "<!--[!-->";
      $$payload.out += `Submit Application <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l7-7m0 0l-7-7m7 7H5"></path></svg>`;
    }
    $$payload.out += `<!--]--></button>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<button type="button"${attr_class("wizard-btn wizard-btn-primary svelte-158sb68", void 0, { "disabled": !canGoNext })}${attr("disabled", !canGoNext, true)}>Continue <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></button>`;
  }
  $$payload.out += `<!--]--></div></div>`;
  bind_props($$props, {
    currentStep,
    totalSteps,
    title,
    subtitle,
    canGoBack,
    canGoNext,
    isLastStep,
    loading
  });
  pop();
}
export {
  LuxuryInput as L,
  WizardContainer as W
};
