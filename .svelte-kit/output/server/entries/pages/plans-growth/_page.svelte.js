import { G as ensure_array_like, K as escape_html, I as attr, M as stringify, S as head } from "../../../chunks/index.js";
/* empty css                                                         */
import { B as BaseCard } from "../../../chunks/BaseCard.js";
/* empty css                                                 */
import "clsx";
import { L as LeadCaptureWizard } from "../../../chunks/LeadCaptureWizard.js";
function PlansHeroSection($$payload) {
  const impactMetrics = [
    {
      metric: "3x",
      label: "Lead Generation",
      description: "Average increase in qualified leads within 6 months"
    },
    {
      metric: "40%",
      label: "Conversion Rate",
      description: "Improvement in website visitor-to-customer conversion"
    },
    {
      metric: "60%",
      label: "Time Savings",
      description: "Less time spent on marketing tasks through automation"
    },
    {
      metric: "85%",
      label: "Client Retention",
      description: "Of clients continue growing with us after year one"
    }
  ];
  const each_array = ensure_array_like(impactMetrics);
  $$payload.out += `<section class="relative overflow-hidden bg-gradient-to-br from-skyline-blue-600 via-skyline-blue-700 to-granite-gray-800 text-white min-h-screen flex items-center"><div class="absolute inset-0 z-10 overflow-hidden pointer-events-none"><div class="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-aspen-gold-400/10 blur-3xl animate-pulse"></div> <div class="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-skyline-blue-300/10 blur-3xl animate-pulse delay-1000"></div></div> <div class="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24"><div class="grid lg:grid-cols-2 gap-12 items-center"><div><div class="inline-flex items-center bg-aspen-gold-400/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 fade-in svelte-1dbt5in"><span class="text-aspen-gold-400 font-mono text-sm font-semibold tracking-wider">GROWTH JOURNEY</span></div> <h1 class="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 fade-in drop-shadow-2xl svelte-1dbt5in">From Invisible to <span class="text-aspen-gold-400">Inevitable</span></h1> <p class="text-xl md:text-2xl mb-8 text-white/95 slide-up drop-shadow-lg font-medium svelte-1dbt5in">See how our plans transform Colorado businesses from struggling for attention to leading their markets.</p> <div class="flex flex-col sm:flex-row gap-4 slide-up svelte-1dbt5in"><a href="#journey" class="group bg-aspen-gold-400 text-granite-gray-800 px-8 py-4 rounded-xl font-bold text-lg hover:bg-aspen-gold-500 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-2xl hover:shadow-aspen-gold-400/50 flex items-center justify-center">See Your Journey <svg class="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg></a> <a href="#choose-plans" class="group border-3 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-skyline-blue-700 transition-all duration-300 backdrop-blur-sm bg-white/10 flex items-center justify-center">View Plans <svg class="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></a></div></div> <div class="grid grid-cols-2 gap-6"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let metric = each_array[$$index];
    BaseCard($$payload, {
      class: "p-6 text-center backdrop-blur-sm bg-white/10 border-white/20 hover:bg-white/15 transition-all duration-300",
      children: ($$payload2) => {
        $$payload2.out += `<div class="text-3xl md:text-4xl font-bold text-aspen-gold-400 mb-2">${escape_html(metric.metric)}</div> <div class="text-white font-semibold mb-1">${escape_html(metric.label)}</div> <div class="text-sm text-white/80">${escape_html(metric.description)}</div>`;
      },
      $$slots: { default: true }
    });
  }
  $$payload.out += `<!--]--></div></div></div></section>`;
}
function JourneyStagesSection($$payload) {
  const journeyStages = [
    {
      stage: "1",
      title: "Foundation",
      subtitle: "Month 1-3",
      description: "Your digital presence takes shape",
      outcomes: [
        "Professional website attracting qualified leads",
        "Local search visibility increases by 200%+",
        "Brand recognition in your Colorado market",
        "Clear messaging that converts visitors"
      ],
      tools: [
        "Website Development",
        "Local SEO",
        "Brand Positioning",
        "Content Strategy"
      ]
    },
    {
      stage: "2",
      title: "Growth",
      subtitle: "Month 4-9",
      description: "Your audience grows and engages",
      outcomes: [
        "Consistent lead flow from multiple channels",
        "Email list growing 50+ qualified contacts monthly",
        "Social media following that drives business",
        "Customer retention through strategic content"
      ],
      tools: [
        "Paid Advertising",
        "Email Marketing",
        "Video Content",
        "Social Strategy"
      ]
    },
    {
      stage: "3",
      title: "Scale",
      subtitle: "Month 10+",
      description: "Your business operates at peak efficiency",
      outcomes: [
        "Predictable revenue from digital channels",
        "Market leadership in your Colorado niche",
        "Automated systems handling routine growth",
        "Premium pricing supported by brand strength"
      ],
      tools: [
        "Automation Systems",
        "Advanced Analytics",
        "A/B Testing",
        "Conversion Optimization"
      ]
    }
  ];
  const each_array = ensure_array_like(journeyStages);
  $$payload.out += `<section id="journey" class="py-20 bg-gradient-to-br from-snowfield-white via-skyline-blue-25 to-aspen-gold-25 relative overflow-hidden"><div class="absolute inset-0 overflow-hidden"><div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-granite-gray-100/30 to-transparent"></div> <div class="absolute top-20 right-20 w-64 h-64 bg-skyline-blue-100/30 rounded-full blur-3xl animate-pulse"></div> <div class="absolute bottom-20 left-20 w-48 h-48 bg-aspen-gold-100/30 rounded-full blur-3xl animate-pulse delay-1000"></div> <div class="absolute top-1/4 left-1/6 animate-float"><svg class="w-8 h-8 text-skyline-blue-200" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg></div> <div class="absolute top-1/2 right-1/6 animate-float delay-1000"><svg class="w-6 h-6 text-aspen-gold-200" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path></svg></div> <div class="absolute bottom-1/4 left-1/3 animate-float delay-2000"><svg class="w-10 h-10 text-green-200" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></svg></div></div> <div class="max-w-7xl mx-auto px-6 relative z-10"><div class="text-center mb-16"><h2 class="font-display text-3xl md:text-4xl font-bold text-skyline-blue-600 mb-4">Your Growth Journey</h2> <p class="text-xl text-granite-gray-600 max-w-3xl mx-auto">Every successful Colorado business follows the same path. Here's how we guide you through each stage.</p></div> <div class="space-y-16"><!--[-->`;
  for (let index = 0, $$length = each_array.length; index < $$length; index++) {
    let stage = each_array[index];
    const each_array_1 = ensure_array_like(stage.tools);
    $$payload.out += `<div class="relative"><div class="flex items-center mb-8"><div class="w-16 h-16 bg-gradient-to-br from-skyline-blue-600 to-aspen-gold-400 rounded-full flex items-center justify-center text-white font-bold text-2xl mr-6">${escape_html(stage.stage)}</div> <div><h3 class="font-display text-2xl md:text-3xl font-bold text-skyline-blue-600">${escape_html(stage.title)}</h3> <p class="text-granite-gray-500 font-semibold">${escape_html(stage.subtitle)}</p></div></div> <div class="grid lg:grid-cols-2 gap-12 items-start"><div><p class="text-lg text-granite-gray-600 mb-6">${escape_html(stage.description)}</p> <h4 class="font-semibold text-skyline-blue-600 mb-4">What We Focus On:</h4> <div class="grid grid-cols-2 gap-3"><!--[-->`;
    for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
      let tool = each_array_1[$$index];
      $$payload.out += `<div class="bg-skyline-blue-50 px-4 py-2 rounded-lg text-sm font-medium text-skyline-blue-700">${escape_html(tool)}</div>`;
    }
    $$payload.out += `<!--]--></div></div> `;
    BaseCard($$payload, {
      class: "p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-white/90 backdrop-blur-sm border border-white/50 hover:border-aspen-gold-400/30",
      children: ($$payload2) => {
        const each_array_2 = ensure_array_like(stage.outcomes);
        $$payload2.out += `<h4 class="font-semibold text-skyline-blue-600 mb-6 flex items-center"><svg class="w-6 h-6 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> What You'll Achieve</h4> <ul class="space-y-4"><!--[-->`;
        for (let $$index_1 = 0, $$length2 = each_array_2.length; $$index_1 < $$length2; $$index_1++) {
          let outcome = each_array_2[$$index_1];
          $$payload2.out += `<li class="flex items-start"><svg class="w-5 h-5 mr-3 text-aspen-gold-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> <span class="text-granite-gray-700">${escape_html(outcome)}</span></li>`;
        }
        $$payload2.out += `<!--]--></ul>`;
      },
      $$slots: { default: true }
    });
    $$payload.out += `<!----></div> `;
    if (index < journeyStages.length - 1) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<div class="flex justify-center my-12"><div class="w-px h-16 bg-gradient-to-b from-skyline-blue-300 to-aspen-gold-300 animate-pulse"></div></div>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></div>`;
  }
  $$payload.out += `<!--]--></div></div></section>`;
}
function SuccessStoriesSection($$payload) {
  const successOutcomes = [
    {
      business: "Local Service Provider",
      challenge: "Invisible online, competing on price alone",
      outcome: "Premium positioning, booked solid 3 months out",
      journey: "Started with Trailhead, scaled to Summit in 6 months"
    },
    {
      business: "Colorado Retail Chain",
      challenge: "Foot traffic declining, no online presence",
      outcome: "Omnichannel experience, online sales thriving",
      journey: "Peak Season from day one, custom solutions added"
    },
    {
      business: "Professional Services",
      challenge: "Referral-dependent, feast or famine cycles",
      outcome: "Predictable pipeline, authority in their field",
      journey: "Summit plan with quarterly strategy pivots"
    }
  ];
  const each_array = ensure_array_like(successOutcomes);
  $$payload.out += `<section class="py-20 bg-gradient-to-br from-skyline-blue-600 via-skyline-blue-700 to-granite-gray-800 relative overflow-hidden"><div class="absolute inset-0 overflow-hidden"><div class="absolute top-20 left-10 w-96 h-96 bg-aspen-gold-400/10 rounded-full blur-3xl animate-pulse"></div> <div class="absolute bottom-20 right-10 w-80 h-80 bg-red-rocks-rust/10 rounded-full blur-3xl animate-pulse delay-1000"></div> <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-snowfield-white/5 rounded-full blur-3xl animate-pulse delay-2000"></div> <div class="absolute top-1/4 right-1/4 animate-bounce delay-500"><svg class="w-12 h-12 text-aspen-gold-400/20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg></div> <div class="absolute bottom-1/4 left-1/4 animate-bounce delay-1000"><svg class="w-10 h-10 text-green-400/20" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path></svg></div> <div class="absolute top-1/3 left-1/6 animate-bounce delay-1500"><svg class="w-8 h-8 text-aspen-gold-400/20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></svg></div></div> <div class="max-w-7xl mx-auto px-6 relative z-10"><div class="text-center mb-16"><h2 class="font-display text-3xl md:text-4xl font-bold text-snowfield-white mb-4">Real Colorado Transformations</h2> <p class="text-xl text-snowfield-white/80">See how businesses like yours went from struggling to thriving</p></div> <div class="grid md:grid-cols-3 gap-8"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let story = each_array[$$index];
    BaseCard($$payload, {
      class: "p-8 hover:shadow-2xl transition-all duration-500 group hover:-translate-y-4 hover:scale-105 backdrop-blur-sm bg-white/95 hover:bg-white border border-white/20 hover:border-aspen-gold-400/50",
      children: ($$payload2) => {
        $$payload2.out += `<h3 class="font-semibold text-skyline-blue-600 mb-4 group-hover:text-skyline-blue-700">${escape_html(story.business)}</h3> <div class="space-y-4"><div><h4 class="text-sm font-semibold text-red-rocks-rust mb-2">The Challenge</h4> <p class="text-granite-gray-600 text-sm">${escape_html(story.challenge)}</p></div> <div><h4 class="text-sm font-semibold text-green-600 mb-2">The Outcome</h4> <p class="text-granite-gray-700 text-sm font-medium">${escape_html(story.outcome)}</p></div> <div class="pt-4 border-t border-granite-gray-200"><p class="text-xs text-granite-gray-500 font-medium">${escape_html(story.journey)}</p></div></div>`;
      },
      $$slots: { default: true }
    });
  }
  $$payload.out += `<!--]--></div></div></section>`;
}
function GrowthBenefitsSection($$payload) {
  const growthBenefits = [
    {
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
      title: "Predictable Revenue",
      description: "Move from feast-or-famine to steady, growing income streams that you can count on."
    },
    {
      icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1",
      title: "Premium Positioning",
      description: "Stop competing on price. Become the obvious choice for quality-conscious customers."
    },
    {
      icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
      title: "Time Freedom",
      description: "Automated systems handle routine tasks while you focus on what you do best."
    },
    {
      icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
      title: "Market Authority",
      description: "Become the recognized expert in your field with content and positioning that proves it."
    }
  ];
  const each_array = ensure_array_like(growthBenefits);
  $$payload.out += `<section class="py-20 bg-gradient-to-br from-skyline-blue-600 via-skyline-blue-700 to-red-rocks-rust text-white relative overflow-hidden"><div class="absolute inset-0 overflow-hidden"><div class="absolute top-10 left-10 w-72 h-72 bg-aspen-gold-400/10 rounded-full blur-3xl animate-pulse"></div> <div class="absolute bottom-10 right-10 w-64 h-64 bg-snowfield-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div> <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-rocks-rust/10 rounded-full blur-3xl animate-pulse delay-2000"></div> <div class="absolute top-1/4 right-1/3 animate-float"><svg class="w-10 h-10 text-aspen-gold-400/20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg></div> <div class="absolute bottom-1/4 left-1/4 animate-float delay-1000"><svg class="w-8 h-8 text-snowfield-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg></div> <div class="absolute top-1/3 left-1/5 animate-float delay-1500"><svg class="w-6 h-6 text-aspen-gold-400/20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div></div> <div class="max-w-7xl mx-auto px-6 relative z-10"><div class="text-center mb-16"><h2 class="font-display text-3xl md:text-4xl font-bold mb-4">What Happens When You Grow</h2> <p class="text-xl text-white/90">The compound effects of consistent, strategic marketing</p></div> <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let benefit = each_array[$$index];
    $$payload.out += `<div class="text-center group transform hover:-translate-y-2 transition-all duration-500"><div class="w-16 h-16 bg-gradient-to-br from-aspen-gold-400/30 to-aspen-gold-400/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-aspen-gold-400/30"><svg class="w-8 h-8 text-aspen-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"${attr("d", benefit.icon)}></path></svg></div> <h3 class="font-semibold text-lg mb-3 group-hover:text-aspen-gold-100 transition-colors">${escape_html(benefit.title)}</h3> <p class="text-white/80 text-sm group-hover:text-white/90 transition-colors">${escape_html(benefit.description)}</p></div>`;
  }
  $$payload.out += `<!--]--></div></div></section>`;
}
function PlansSection($$payload) {
  const plans = [
    {
      title: "Trailhead",
      price: "$750",
      subtitle: "Foundation Builder",
      description: "Perfect for establishing your digital foundation and getting consistent results.",
      features: [
        "4 geo-researched blog posts",
        "Quarterly strategy call",
        "Search tune-ups",
        "Schema markup optimization",
        "Basic analytics reporting"
      ],
      outcomes: [
        "Professional online presence",
        "Local search visibility",
        "Consistent content flow",
        "Clear growth metrics"
      ],
      ctaText: "Start the Trail",
      ctaHref: "/contact?plan=trailhead"
    },
    {
      title: "Summit",
      price: "$1,800",
      subtitle: "Growth Accelerator",
      description: "Comprehensive marketing that scales your business and builds lasting relationships.",
      features: [
        "Everything in Trailhead",
        "Google/Meta ads management",
        "Monthly brand video",
        "Email drip campaigns",
        "Answer engine optimization",
        "Monthly performance review"
      ],
      outcomes: [
        "Multi-channel lead generation",
        "Engaged email audience",
        "Brand video library",
        "Optimized ad performance"
      ],
      popular: true,
      ctaText: "Reach the Summit",
      ctaHref: "/contact?plan=summit"
    },
    {
      title: "Peak Season",
      price: "$3,500",
      subtitle: "Market Leader",
      description: "Full-scale marketing operation that positions you as the authority in your space.",
      features: [
        "Everything in Summit",
        "Bi-weekly landing page tests",
        "Influencer micro-campaigns",
        "Quarterly brand films",
        "Advanced prompt libraries",
        "Priority support"
      ],
      outcomes: [
        "Market leadership position",
        "Premium pricing power",
        "Automated growth systems",
        "Competitive moat"
      ],
      ctaText: "Claim the Peak",
      ctaHref: "/contact?plan=peak"
    }
  ];
  const each_array = ensure_array_like(plans);
  $$payload.out += `<section id="choose-plans" class="py-20 bg-gradient-to-br from-skyline-blue-50 via-snowfield-white to-aspen-gold-50 relative overflow-hidden"><div class="absolute inset-0 overflow-hidden"><div class="absolute -top-40 -right-40 w-80 h-80 bg-skyline-blue-600/5 rounded-full blur-3xl animate-pulse"></div> <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-aspen-gold-400/5 rounded-full blur-3xl animate-pulse delay-1000"></div> <div class="absolute top-1/2 left-1/4 w-60 h-60 bg-red-rocks-rust/5 rounded-full blur-3xl animate-pulse delay-2000"></div></div> <div class="max-w-7xl mx-auto px-6 relative z-10"><div class="text-center mb-16"><h2 class="font-display text-3xl md:text-4xl font-bold text-skyline-blue-600 mb-4">Choose Your Altitude</h2> <p class="text-xl text-granite-gray-600 max-w-3xl mx-auto">Each plan is designed for a specific stage of your growth journey. Start where you are, scale when you're ready.</p></div> <div class="grid md:grid-cols-3 gap-8 mb-12"><!--[-->`;
  for (let $$index_2 = 0, $$length = each_array.length; $$index_2 < $$length; $$index_2++) {
    let plan = each_array[$$index_2];
    BaseCard($$payload, {
      class: `p-8 hover:shadow-2xl transition-all duration-500 group hover:-translate-y-3 hover:scale-105 relative ${stringify(plan.popular ? "border-2 border-aspen-gold-400 shadow-aspen-gold-400/20" : "")} backdrop-blur-sm bg-white/90 hover:bg-white`,
      children: ($$payload2) => {
        const each_array_1 = ensure_array_like(plan.features);
        const each_array_2 = ensure_array_like(plan.outcomes);
        if (plan.popular) {
          $$payload2.out += "<!--[-->";
          $$payload2.out += `<div class="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-aspen-gold-400 text-granite-gray-800 px-6 py-2 rounded-full text-sm font-bold">Most Popular</div>`;
        } else {
          $$payload2.out += "<!--[!-->";
        }
        $$payload2.out += `<!--]--> <div class="text-center mb-6"><h3 class="font-display text-2xl font-bold text-skyline-blue-600 mb-2">${escape_html(plan.title)}</h3> <p class="text-granite-gray-600 font-semibold mb-1">${escape_html(plan.subtitle)}</p> <div class="text-4xl font-bold text-skyline-blue-700 mb-2">${escape_html(plan.price)}</div> <p class="text-granite-gray-600 text-sm">${escape_html(plan.description)}</p></div> <div class="space-y-6"><div><h4 class="font-semibold text-skyline-blue-600 mb-3">What's Included:</h4> <ul class="space-y-2 text-sm"><!--[-->`;
        for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
          let feature = each_array_1[$$index];
          $$payload2.out += `<li class="flex items-start"><svg class="w-4 h-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> ${escape_html(feature)}</li>`;
        }
        $$payload2.out += `<!--]--></ul></div> <div><h4 class="font-semibold text-skyline-blue-600 mb-3">Your Outcomes:</h4> <ul class="space-y-2 text-sm"><!--[-->`;
        for (let $$index_1 = 0, $$length2 = each_array_2.length; $$index_1 < $$length2; $$index_1++) {
          let outcome = each_array_2[$$index_1];
          $$payload2.out += `<li class="flex items-start"><svg class="w-4 h-4 mr-2 text-aspen-gold-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg> ${escape_html(outcome)}</li>`;
        }
        $$payload2.out += `<!--]--></ul></div></div> <div class="mt-8"><a${attr("href", plan.ctaHref)} class="w-full bg-gradient-to-r from-skyline-blue-600 to-skyline-blue-700 text-white py-3 px-6 rounded-lg font-semibold hover:from-skyline-blue-700 hover:to-skyline-blue-800 transition-all duration-300 inline-block text-center transform hover:scale-105 shadow-lg hover:shadow-xl">${escape_html(plan.ctaText)}</a></div>`;
      },
      $$slots: { default: true }
    });
  }
  $$payload.out += `<!--]--></div> <div class="text-center"><p class="text-granite-gray-600 mb-6">Not sure which plan fits your business stage? Let's talk about your growth goals.</p> <a href="/contact" class="inline-flex items-center text-skyline-blue-600 hover:text-skyline-blue-700 font-medium group">Schedule a Strategy Call <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></a></div></div></section>`;
}
function DashboardSection($$payload) {
  const dashboardFeatures = [
    {
      category: "Revenue Attribution",
      insight: "Which channels actually drive paying customers",
      example: "$47K revenue traced to 3 specific blog posts",
      metric: "ROI: 1,247%",
      boring: "Traffic sources",
      real: "Revenue sources"
    },
    {
      category: "Customer Journey Mapping",
      insight: "Exact touchpoints before conversion",
      example: "87% of $5K+ clients read these 2 pages first",
      metric: "Conversion: 23%",
      boring: "Page views",
      real: "Buying signals"
    },
    {
      category: "Predictive Lead Scoring",
      insight: "Which leads become customers (before they buy)",
      example: "LinkedIn + demo request = 67% close rate",
      metric: "Accuracy: 91%",
      boring: "Lead count",
      real: "Revenue probability"
    },
    {
      category: "Competitive Intelligence",
      insight: "What your competitors are doing (and missing)",
      example: "Competitor X lost 40% traffic after site redesign",
      metric: "Opportunity: $120K",
      boring: "Market share",
      real: "Market gaps"
    }
  ];
  const realMetrics = [
    {
      label: "Revenue Per Visitor",
      value: "$47.32",
      trend: "+234%",
      context: "Not just traffic"
    },
    {
      label: "Customer Acquisition Cost",
      value: "$127",
      trend: "-67%",
      context: "Getting cheaper"
    },
    {
      label: "Lifetime Value",
      value: "$8,940",
      trend: "+89%",
      context: "Getting better"
    },
    {
      label: "Time to Revenue",
      value: "14 days",
      trend: "-56%",
      context: "Getting faster"
    }
  ];
  const each_array = ensure_array_like(realMetrics);
  const each_array_1 = ensure_array_like(dashboardFeatures);
  $$payload.out += `<section class="py-20 bg-gradient-to-br from-granite-gray-50 to-snowfield-white relative overflow-hidden"><div class="absolute inset-0 overflow-hidden"><div class="absolute top-20 right-20 w-64 h-64 bg-skyline-blue-100/30 rounded-full blur-3xl animate-pulse"></div> <div class="absolute bottom-20 left-20 w-48 h-48 bg-aspen-gold-100/30 rounded-full blur-3xl animate-pulse delay-1000"></div> <div class="absolute top-1/4 left-1/6 animate-float"><svg class="w-8 h-8 text-skyline-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg></div> <div class="absolute bottom-1/3 right-1/4 animate-float delay-1000"><svg class="w-6 h-6 text-aspen-gold-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg></div></div> <div class="max-w-7xl mx-auto px-6 relative z-10"><div class="text-center mb-16"><div class="mb-6"><p class="text-granite-gray-500 text-lg italic mb-2">*sigh*</p> <h2 class="font-display text-3xl md:text-4xl font-bold text-skyline-blue-600 mb-4">Yes...we do the fancy dashboard thing too</h2></div> <p class="text-xl text-granite-gray-600 max-w-3xl mx-auto mb-8">Look, everyone wants "analytics" and "dashboards." Fine. But while they're showing you pretty charts about page views, we're tracking what actually matters.</p> <div class="bg-aspen-gold-50 border-l-4 border-aspen-gold-400 p-4 rounded-r-lg max-w-2xl mx-auto"><p class="text-aspen-gold-700 font-medium text-sm">Spoiler: It's not how many people visited your blog. It's how many became customers.</p></div></div> <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let metric = each_array[$$index];
    BaseCard($$payload, {
      class: "p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border border-skyline-blue-200/50",
      children: ($$payload2) => {
        $$payload2.out += `<div class="space-y-3"><div class="text-2xl font-bold text-skyline-blue-600">${escape_html(metric.value)}</div> <div class="text-sm font-semibold text-granite-gray-700">${escape_html(metric.label)}</div> <div class="flex items-center justify-center space-x-2"><span class="text-green-600 font-medium text-sm">${escape_html(metric.trend)}</span> <svg class="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg></div> <p class="text-xs text-granite-gray-500">${escape_html(metric.context)}</p></div>`;
      },
      $$slots: { default: true }
    });
  }
  $$payload.out += `<!--]--></div> <div class="space-y-12"><div class="text-center mb-12"><h3 class="font-display text-2xl md:text-3xl font-bold text-skyline-blue-600 mb-4">What we track (while others count clicks)</h3> <p class="text-granite-gray-600 max-w-2xl mx-auto">These aren't vanity metrics. Every data point connects directly to your bank account.</p></div> <div class="grid lg:grid-cols-2 gap-8"><!--[-->`;
  for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
    let feature = each_array_1[$$index_1];
    BaseCard($$payload, {
      class: "p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-skyline-blue-200/50 group",
      children: ($$payload2) => {
        $$payload2.out += `<div class="space-y-6"><div class="flex items-center justify-between"><h4 class="font-bold text-xl text-skyline-blue-600 group-hover:text-skyline-blue-700">${escape_html(feature.category)}</h4> <div class="text-right"><div class="text-sm text-granite-gray-500 line-through">${escape_html(feature.boring)}</div> <div class="text-sm font-semibold text-aspen-gold-600">${escape_html(feature.real)}</div></div></div> <div><p class="text-granite-gray-700 font-medium mb-2">${escape_html(feature.insight)}</p> <div class="bg-skyline-blue-50 border-l-4 border-skyline-blue-400 p-3 rounded-r-lg"><p class="text-skyline-blue-700 text-sm font-medium">"${escape_html(feature.example)}"</p></div></div> <div class="flex items-center justify-between pt-4 border-t border-granite-gray-200"><span class="text-granite-gray-600 text-sm">Key Metric:</span> <span class="text-green-600 font-bold">${escape_html(feature.metric)}</span></div></div>`;
      },
      $$slots: { default: true }
    });
  }
  $$payload.out += `<!--]--></div></div> <div class="mt-20"><div class="text-center mb-12"><h3 class="font-display text-2xl md:text-3xl font-bold text-skyline-blue-600 mb-4">Fine. Here's what the actual dashboard looks like.</h3> <p class="text-granite-gray-600">(It's not as pretty as those other agencies', but it actually works)</p></div> `;
  BaseCard($$payload, {
    class: "p-8 bg-granite-gray-900 border-2 border-skyline-blue-200/50 relative overflow-hidden",
    children: ($$payload2) => {
      $$payload2.out += `<div class="flex items-center space-x-2 mb-6 pb-4 border-b border-granite-gray-700"><div class="w-3 h-3 bg-red-500 rounded-full"></div> <div class="w-3 h-3 bg-yellow-500 rounded-full"></div> <div class="w-3 h-3 bg-green-500 rounded-full"></div> <span class="text-granite-gray-400 text-sm ml-4 font-mono">weknowco-analytics.dashboard</span></div> <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-white"><div class="space-y-4"><h4 class="text-aspen-gold-400 font-semibold">Revenue Attribution</h4> <div class="space-y-2 text-sm font-mono"><div class="flex justify-between"><span class="text-granite-gray-300">Blog Post #47:</span> <span class="text-green-400">$23,400</span></div> <div class="flex justify-between"><span class="text-granite-gray-300">LinkedIn Campaign:</span> <span class="text-green-400">$18,900</span></div> <div class="flex justify-between"><span class="text-granite-gray-300">Email Sequence #3:</span> <span class="text-green-400">$14,200</span></div> <div class="pt-2 border-t border-granite-gray-700"><div class="flex justify-between"><span class="text-white font-semibold">Total This Month:</span> <span class="text-aspen-gold-400 font-bold">$56,500</span></div></div></div></div> <div class="space-y-4"><h4 class="text-aspen-gold-400 font-semibold">Customer Journey</h4> <div class="space-y-2 text-sm"><div class="bg-granite-gray-800 p-3 rounded"><div class="text-white font-medium">High-Value Path:</div> <div class="text-granite-gray-300 text-xs">Homepage → About → Plans → Contact</div> <div class="text-green-400 text-xs">Conversion: 34%</div></div> <div class="bg-granite-gray-800 p-3 rounded"><div class="text-white font-medium">Quick Convert:</div> <div class="text-granite-gray-300 text-xs">5280-Site → Contact</div> <div class="text-green-400 text-xs">Conversion: 67%</div></div></div></div> <div class="space-y-4"><h4 class="text-aspen-gold-400 font-semibold">This Week's Predictions</h4> <div class="space-y-2 text-sm"><div class="flex items-center space-x-2"><div class="w-2 h-2 bg-green-500 rounded-full"></div> <span class="text-granite-gray-300">3 hot leads likely to close</span></div> <div class="flex items-center space-x-2"><div class="w-2 h-2 bg-yellow-500 rounded-full"></div> <span class="text-granite-gray-300">Blog traffic spike expected Thu</span></div> <div class="flex items-center space-x-2"><div class="w-2 h-2 bg-blue-500 rounded-full"></div> <span class="text-granite-gray-300">Email campaign ready to send</span></div> <div class="pt-2 border-t border-granite-gray-700"><div class="text-aspen-gold-400 font-semibold">Projected Revenue: $28K</div></div></div></div></div> <div class="mt-6 pt-4 border-t border-granite-gray-700"><span class="text-granite-gray-400 font-mono text-sm">$</span> <span class="text-white font-mono text-sm">generating_real_results.exe</span> <span class="text-aspen-gold-400 animate-pulse">|</span></div>`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div> <div class="text-center mt-16"><div class="bg-gradient-to-r from-skyline-blue-50 to-aspen-gold-50 p-8 rounded-2xl border border-skyline-blue-200/50"><h3 class="font-display text-2xl font-bold text-skyline-blue-600 mb-4">Ready to see what your business actually looks like?</h3> <p class="text-granite-gray-600 mb-6 max-w-2xl mx-auto">Stop guessing what's working. Get dashboards that show you exactly where your money comes from and where to invest next.</p> <a href="/contact" class="inline-flex items-center bg-skyline-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-skyline-blue-700 transition-colors group">Show Me The Real Numbers <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg></a></div></div></div></section>`;
}
function PlansCTASection($$payload) {
  $$payload.out += `<section class="py-20 bg-gradient-to-br from-skyline-blue-600 to-red-rocks-rust text-white"><div class="max-w-4xl mx-auto px-6"><div class="text-center mb-12"><h2 class="font-display text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Growth Journey?</h2> <p class="text-xl text-white/90">Let's map out your path from where you are to where you want to be</p></div> `;
  LeadCaptureWizard($$payload, {
    serviceInterest: "growth-plans",
    formName: "Growth Journey Interest"
  });
  $$payload.out += `<!----></div></section>`;
}
function _page($$payload) {
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Plans &amp; Growth | Your Business Journey | weKnowCO</title>`;
    $$payload2.out += `<meta name="description" content="See how weKnowCO's marketing plans transform Colorado businesses from invisible to market leaders. Real outcomes, proven journey, sustainable growth."/>`;
  });
  PlansHeroSection($$payload);
  $$payload.out += `<!----> `;
  JourneyStagesSection($$payload);
  $$payload.out += `<!----> `;
  SuccessStoriesSection($$payload);
  $$payload.out += `<!----> `;
  GrowthBenefitsSection($$payload);
  $$payload.out += `<!----> `;
  PlansSection($$payload);
  $$payload.out += `<!----> `;
  DashboardSection($$payload);
  $$payload.out += `<!----> `;
  PlansCTASection($$payload);
  $$payload.out += `<!---->`;
}
export {
  _page as default
};
