import { C as push, P as fallback, V as copy_payload, W as assign_payload, Q as bind_props, E as pop, K as escape_html, G as ensure_array_like, S as head, M as stringify, I as attr } from "../../../../chunks/index.js";
/* empty css                                                            */
import { B as BaseCard } from "../../../../chunks/BaseCard.js";
import "clsx";
import { L as LuxuryInput, W as WizardContainer } from "../../../../chunks/WizardContainer.js";
function FounderInfoStep($$payload, $$props) {
  push();
  let formData = $$props["formData"];
  let errors = fallback($$props["errors"], () => ({}), true);
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<div class="space-y-6"><div class="text-center mb-8"><h2 class="text-2xl font-bold text-skyline-blue-600 mb-2">Tell Us About Yourself</h2> <p class="text-granite-gray-600">Let's start with the basics about you as a founder</p></div> <div class="grid grid-cols-1 md:grid-cols-2 gap-6">`;
    LuxuryInput($$payload2, {
      type: "text",
      placeholder: "First Name",
      error: errors.firstName,
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
      type: "text",
      placeholder: "Last Name",
      error: errors.lastName,
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
      placeholder: "Email Address",
      error: errors.email,
      required: true,
      get value() {
        return formData.email;
      },
      set value($$value) {
        formData.email = $$value;
        $$settled = false;
      }
    });
    $$payload2.out += `<!----> `;
    LuxuryInput($$payload2, {
      type: "tel",
      placeholder: "Phone Number",
      error: errors.phone,
      required: true,
      get value() {
        return formData.phone;
      },
      set value($$value) {
        formData.phone = $$value;
        $$settled = false;
      }
    });
    $$payload2.out += `<!----></div>`;
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
function PartnershipWizard($$payload, $$props) {
  push();
  let canGoNext, isLastStep, currentConfig;
  let currentStep = 0;
  const totalSteps = 5;
  let loading = false;
  let formData = {
    // Step 1: Founder Info
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    // Step 2: Business Basics
    companyName: "",
    companyWebsite: "",
    industry: "",
    foundedYear: "",
    // Step 3: Business Details
    currentRevenue: "",
    revenueProjection: "",
    teamSize: "",
    fundingStatus: "",
    // Step 4: Partnership Preferences
    partnershipType: "",
    marketingBudget: "",
    timeframe: "",
    // Step 5: Vision & Details
    businessDescription: "",
    uniqueValue: "",
    goals: "",
    whyPartnership: ""
  };
  let errors = {};
  function validateStep(step) {
    errors = {};
    switch (step) {
      case 0:
        if (!formData.firstName.trim()) errors.firstName = "First name is required";
        if (!formData.lastName.trim()) errors.lastName = "Last name is required";
        if (!formData.email.trim()) errors.email = "Email is required";
        if (!formData.phone.trim()) errors.phone = "Phone is required";
        break;
      case 1:
        if (!formData.companyName.trim()) errors.companyName = "Company name is required";
        if (!formData.industry) errors.industry = "Industry is required";
        if (!formData.foundedYear) errors.foundedYear = "Founded year is required";
        break;
      case 2:
        if (!formData.currentRevenue) errors.currentRevenue = "Current revenue is required";
        if (!formData.teamSize) errors.teamSize = "Team size is required";
        if (!formData.fundingStatus) errors.fundingStatus = "Funding status is required";
        break;
      case 3:
        if (!formData.partnershipType) errors.partnershipType = "Partnership type is required";
        if (!formData.marketingBudget) errors.marketingBudget = "Budget range is required";
        if (!formData.timeframe) errors.timeframe = "Timeframe is required";
        break;
      case 4:
        if (!formData.businessDescription.trim()) errors.businessDescription = "Business description is required";
        if (!formData.uniqueValue.trim()) errors.uniqueValue = "Unique value proposition is required";
        if (!formData.goals.trim()) errors.goals = "Growth goals are required";
        if (!formData.whyPartnership.trim()) errors.whyPartnership = "Please explain why you want a partnership";
        break;
    }
    return Object.keys(errors).length === 0;
  }
  const stepConfigs = [
    {
      title: "Founder Information",
      subtitle: "Let's start with the basics about you"
    },
    {
      title: "Business Overview",
      subtitle: "Tell us about your company"
    },
    {
      title: "Business Performance",
      subtitle: "Share your current traction and growth"
    },
    {
      title: "Partnership Preferences",
      subtitle: "How would you like to work together?"
    },
    {
      title: "Vision & Goals",
      subtitle: "Help us understand your bigger picture"
    }
  ];
  canGoNext = validateStep(currentStep);
  isLastStep = currentStep === totalSteps - 1;
  currentConfig = stepConfigs[currentStep];
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    WizardContainer($$payload2, {
      currentStep,
      totalSteps,
      title: currentConfig.title,
      subtitle: currentConfig.subtitle,
      canGoBack: currentStep > 0,
      canGoNext,
      isLastStep,
      loading,
      children: ($$payload3) => {
        {
          $$payload3.out += "<!--[-->";
          FounderInfoStep($$payload3, {
            errors,
            get formData() {
              return formData;
            },
            set formData($$value) {
              formData = $$value;
              $$settled = false;
            }
          });
        }
        $$payload3.out += `<!--]--> `;
        if (errors.submit) {
          $$payload3.out += "<!--[-->";
          $$payload3.out += `<div class="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg"><p class="text-red-600 text-sm">${escape_html(errors.submit)}</p></div>`;
        } else {
          $$payload3.out += "<!--[!-->";
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
  pop();
}
function _page($$payload) {
  const engagementModels = [
    {
      title: "Revenue Share",
      percentage: "8-15%",
      description: "We take a percentage of monthly revenue in exchange for full marketing operations.",
      benefits: [
        "No upfront costs",
        "Aligned incentives",
        "Scale with your growth",
        "Performance-based partnership"
      ],
      ideal: "Businesses with consistent revenue streams"
    },
    {
      title: "Micro Retainer",
      amount: "$250-500",
      description: "Small monthly fee plus revenue share for businesses just starting to generate income.",
      benefits: [
        "Low barrier to entry",
        "Hybrid model flexibility",
        "Reduced revenue share rate",
        "Immediate marketing support"
      ],
      ideal: "Early-stage businesses with some revenue"
    },
    {
      title: "Equity Slice",
      percentage: "Equity Offer Program",
      description: "Equity ownership in exchange for comprehensive brand building and marketing strategy.",
      benefits: [
        "Long-term partnership",
        "Full strategic involvement",
        "No ongoing fees",
        "Shared success model"
      ],
      ideal: "High-growth potential startups"
    }
  ];
  const eligibilityCriteria = [
    {
      title: "Full-Time Commitment",
      description: "Founder working full-time on the business",
      icon: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
    },
    {
      title: "Clear Revenue Path",
      description: "Demonstrable path to revenue within 9 months",
      icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
    },
    {
      title: "Transparent Operations",
      description: "Open access to analytics, financials, and business metrics",
      icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
    },
    {
      title: "Marketing Investment",
      description: "Minimum $1k marketing budget (can be deferred)",
      icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
    }
  ];
  const each_array = ensure_array_like(engagementModels);
  const each_array_2 = ensure_array_like(eligibilityCriteria);
  const each_array_3 = ensure_array_like([
    "Application",
    "Discovery",
    "Due Diligence",
    "Partnership"
  ]);
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Solo Biz Helper | weKnowCO Partner Program</title>`;
    $$payload2.out += `<meta name="description" content="Revenue-share, equity, and micro-retainer partnerships for Colorado entrepreneurs. We invest in your climb with skin in the game."/> <meta property="og:title" content="Solo Biz Helper | weKnowCO Partner Program"/> <meta property="og:description" content="Revenue-share, equity, and micro-retainer partnerships for Colorado entrepreneurs."/>`;
  });
  $$payload.out += `<section class="relative min-h-screen flex items-center justify-center overflow-hidden"><div class="absolute inset-0 z-0"><img src="/images/hero-mountains.png" alt="Colorado Mountains" class="w-full h-full object-cover object-center"/> <div class="absolute inset-0 bg-gradient-to-b from-red-rocks-rust/80 via-skyline-blue-800/80 to-granite-gray-700/90"></div> <div class="absolute inset-0 bg-black/30"></div></div> <div class="absolute inset-0 z-10 overflow-hidden pointer-events-none"><div class="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-aspen-gold-400/20 blur-3xl animate-pulse"></div> <div class="absolute bottom-1/3 left-1/3 w-80 h-80 rounded-full bg-red-rocks-rust/20 blur-3xl animate-pulse delay-1000"></div></div> <div class="relative z-20 max-w-6xl mx-auto px-6 text-center"><div class="inline-flex items-center bg-red-rocks-rust/20 backdrop-blur-sm border border-red-rocks-rust/30 rounded-full px-6 py-3 mb-6"><span class="text-aspen-gold-400 font-mono text-sm font-semibold tracking-wider">PARTNER PROGRAM</span></div> <h1 class="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 fade-in drop-shadow-2xl svelte-1dbt5in">Solo Biz Helper</h1> <p class="text-xl md:text-2xl lg:text-3xl text-white/95 mb-8 max-w-4xl mx-auto slide-up drop-shadow-lg font-medium svelte-1dbt5in">We partner with founders to build sustainable brands. <br class="hidden md:block"/> Flexible partnership structures aligned with your business goals.</p> <div class="flex flex-col sm:flex-row gap-6 justify-center items-center slide-up svelte-1dbt5in"><a href="#apply" class="group bg-red-rocks-rust text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-red-rocks-rust/90 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-2xl hover:shadow-red-rocks-rust/50 flex items-center">Apply for Partnership <svg class="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg></a> <a href="#models" class="group border-3 border-white text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-white hover:text-skyline-blue-700 transition-all duration-300 backdrop-blur-sm bg-white/10 flex items-center">See Partnership Models <svg class="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></a></div> <div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"><div class="backdrop-blur-sm bg-white/10 rounded-xl p-4 border border-white/20"><div class="text-2xl font-bold text-aspen-gold-400">Selective</div> <div class="text-white/80 text-sm">Partnership approach</div></div> <div class="backdrop-blur-sm bg-white/10 rounded-xl p-4 border border-white/20"><div class="text-2xl font-bold text-aspen-gold-400">Strategic</div> <div class="text-white/80 text-sm">Investment decisions</div></div> <div class="backdrop-blur-sm bg-white/10 rounded-xl p-4 border border-white/20"><div class="text-2xl font-bold text-aspen-gold-400">Sustainable</div> <div class="text-white/80 text-sm">Revenue-focused growth</div></div></div></div></section> <section id="models" class="py-20 bg-white"><div class="max-w-7xl mx-auto px-6"><div class="text-center mb-16"><h2 class="font-display text-3xl md:text-4xl font-bold text-skyline-blue-600 mb-4">Choose Your Partnership Model</h2> <p class="text-xl text-granite-gray-600 max-w-3xl mx-auto">We offer three flexible partnership structures designed to align our success with yours.
				No one-size-fits-all approach—just the right model for your business stage.</p></div> <div class="grid md:grid-cols-3 gap-8"><!--[-->`;
  for (let index = 0, $$length = each_array.length; index < $$length; index++) {
    let model = each_array[index];
    BaseCard($$payload, {
      class: `h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${stringify(index === 1 ? "ring-2 ring-red-rocks-rust shadow-lg scale-105" : "")}`,
      children: ($$payload2) => {
        const each_array_1 = ensure_array_like(model.benefits);
        $$payload2.out += `<div class="p-8"><div class="text-center mb-6">`;
        if (index === 1) {
          $$payload2.out += "<!--[-->";
          $$payload2.out += `<div class="inline-block bg-red-rocks-rust text-white px-3 py-1 rounded-full text-sm font-semibold mb-4">Most Popular</div>`;
        } else {
          $$payload2.out += "<!--[!-->";
        }
        $$payload2.out += `<!--]--> <h3 class="font-display text-2xl font-bold text-skyline-blue-600 mb-2">${escape_html(model.title)}</h3> <div class="text-3xl font-bold text-red-rocks-rust mb-2">${escape_html(model.percentage || model.amount)}</div> <p class="text-granite-gray-600">${escape_html(model.description)}</p></div> <div class="mb-6"><h4 class="font-semibold text-granite-gray-700 mb-3">Benefits:</h4> <ul class="space-y-2"><!--[-->`;
        for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
          let benefit = each_array_1[$$index];
          $$payload2.out += `<li class="flex items-start"><svg class="w-5 h-5 text-aspen-gold-400 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg> <span class="text-granite-gray-600 text-sm">${escape_html(benefit)}</span></li>`;
        }
        $$payload2.out += `<!--]--></ul></div> <div class="bg-gray-50 rounded-lg p-4"><h4 class="font-semibold text-granite-gray-700 mb-2">Ideal for:</h4> <p class="text-granite-gray-600 text-sm">${escape_html(model.ideal)}</p></div></div>`;
      },
      $$slots: { default: true }
    });
  }
  $$payload.out += `<!--]--></div></div></section> <section class="py-20 bg-gray-50"><div class="max-w-7xl mx-auto px-6"><div class="text-center mb-16"><h2 class="font-display text-3xl md:text-4xl font-bold text-skyline-blue-600 mb-4">Partnership Eligibility</h2> <p class="text-xl text-granite-gray-600 max-w-3xl mx-auto">We're selective about our partnerships. Here's what we look for in potential Solo Biz Helper clients.</p></div> <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8"><!--[-->`;
  for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
    let criteria = each_array_2[$$index_2];
    BaseCard($$payload, {
      class: "text-center p-6 hover:shadow-lg transition-all duration-300 group hover:-translate-y-2",
      children: ($$payload2) => {
        $$payload2.out += `<div class="w-16 h-16 bg-red-rocks-rust/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform"><svg class="w-8 h-8 text-red-rocks-rust" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"${attr("d", criteria.icon)}></path></svg></div> <h3 class="font-display text-lg font-semibold text-skyline-blue-600 mb-2">${escape_html(criteria.title)}</h3> <p class="text-granite-gray-600 text-sm">${escape_html(criteria.description)}</p>`;
      },
      $$slots: { default: true }
    });
  }
  $$payload.out += `<!--]--></div> <div class="mt-16 bg-white rounded-2xl p-8 shadow-lg"><h3 class="font-display text-2xl font-bold text-skyline-blue-600 mb-6 text-center">Additional Requirements</h3> <div class="grid md:grid-cols-2 gap-8"><div><h4 class="font-semibold text-granite-gray-700 mb-3">Business Criteria:</h4> <ul class="space-y-2 text-granite-gray-600"><li class="flex items-start"><span class="text-aspen-gold-400 mr-2">•</span> Colorado-based or Colorado-focused business</li> <li class="flex items-start"><span class="text-aspen-gold-400 mr-2">•</span> Demonstrable market traction or validation</li> <li class="flex items-start"><span class="text-aspen-gold-400 mr-2">•</span> Clear competitive advantage or unique value proposition</li> <li class="flex items-start"><span class="text-aspen-gold-400 mr-2">•</span> Scalable business model</li></ul></div> <div><h4 class="font-semibold text-granite-gray-700 mb-3">Partnership Expectations:</h4> <ul class="space-y-2 text-granite-gray-600"><li class="flex items-start"><span class="text-aspen-gold-400 mr-2">•</span> Monthly strategy calls and progress reviews</li> <li class="flex items-start"><span class="text-aspen-gold-400 mr-2">•</span> Transparent reporting and data sharing</li> <li class="flex items-start"><span class="text-aspen-gold-400 mr-2">•</span> Collaborative approach to brand development</li> <li class="flex items-start"><span class="text-aspen-gold-400 mr-2">•</span> Minimum 12-month partnership commitment</li></ul></div></div></div></div></section> <section class="py-20 bg-white"><div class="max-w-7xl mx-auto px-6"><div class="text-center mb-16"><h2 class="font-display text-3xl md:text-4xl font-bold text-skyline-blue-600 mb-4">Partnership Process</h2> <p class="text-xl text-granite-gray-600 max-w-3xl mx-auto">From application to partnership—here's how we evaluate and onboard Solo Biz Helper clients.</p></div> <div class="grid md:grid-cols-4 gap-8"><!--[-->`;
  for (let index = 0, $$length = each_array_3.length; index < $$length; index++) {
    let step = each_array_3[index];
    $$payload.out += `<div class="text-center"><div class="w-16 h-16 bg-gradient-to-br from-skyline-blue-600 to-red-rocks-rust text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">${escape_html(index + 1)}</div> <h3 class="font-display text-lg font-semibold text-skyline-blue-600 mb-2">${escape_html(step)}</h3> <p class="text-granite-gray-600 text-sm">`;
    if (index === 0) {
      $$payload.out += "<!--[-->";
      $$payload.out += `Submit detailed business information and partnership interest`;
    } else if (index === 1) {
      $$payload.out += "<!--[1-->";
      $$payload.out += `90-minute deep-dive call to understand your vision and goals`;
    } else if (index === 2) {
      $$payload.out += "<!--[2-->";
      $$payload.out += `Financial review, market analysis, and partnership structure design`;
    } else {
      $$payload.out += "<!--[!-->";
      $$payload.out += `Finalize agreements and begin your mile-high journey together`;
    }
    $$payload.out += `<!--]--></p></div> `;
    if (index < 3) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<div class="hidden md:flex items-center justify-center"><svg class="w-8 h-8 text-granite-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></div>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]--></div></div></section> <section id="apply" class="py-20 bg-gradient-to-br from-skyline-blue-600 to-red-rocks-rust text-white"><div class="max-w-4xl mx-auto px-6"><div class="text-center mb-12"><h2 class="font-display text-3xl md:text-4xl font-bold mb-4">Ready to Partner with weKnowCO?</h2> <p class="text-xl text-white/90">Tell us about your business and let's explore how we can invest in your success.</p></div> `;
  PartnershipWizard($$payload);
  $$payload.out += `<!----> <div class="text-center mt-8"><p class="text-white/80 mb-4">Prefer to discuss your partnership opportunity directly?</p> <a href="mailto:partnerships@weknowco.com" class="inline-flex items-center text-aspen-gold-400 hover:text-aspen-gold-300 font-medium">partnerships@weknowco.com <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg></a></div></div></section>`;
}
export {
  _page as default
};
