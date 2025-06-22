import { O as fallback, G as attr_class, F as attr, I as escape_html, M as slot, P as bind_props, E as ensure_array_like, C as pop, z as push, Q as head, R as spread_props, J as stringify } from "../../../chunks/index.js";
import { B as BaseCard } from "../../../chunks/TimelineItem.svelte_svelte_type_style_lang.js";
import { L as LeadCaptureWizard } from "../../../chunks/LeadCaptureWizard.js";
function FeatureCard($$payload, $$props) {
  let icon = fallback($$props["icon"], "");
  let title = fallback($$props["title"], "");
  let description = fallback($$props["description"], "");
  let highlight = fallback($$props["highlight"], false);
  $$payload.out += `<div${attr_class("feature-card svelte-r7as59", void 0, { "highlight": highlight })}>`;
  if (icon) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="icon-wrapper svelte-r7as59"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"${attr("d", icon)}></path></svg></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <h3 class="feature-title svelte-r7as59">${escape_html(title)}</h3> `;
  if (description) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<p class="feature-description svelte-r7as59">${escape_html(description)}</p>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></div>`;
  bind_props($$props, { icon, title, description, highlight });
}
function ChecklistItem($$payload, $$props) {
  let text = fallback($$props["text"], "");
  let included = fallback($$props["included"], true);
  $$payload.out += `<li${attr_class("checklist-item svelte-w9vzty", void 0, { "excluded": !included })}><svg class="checklist-icon svelte-w9vzty" fill="none" stroke="currentColor" viewBox="0 0 24 24">`;
  if (included) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>`;
  }
  $$payload.out += `<!--]--></svg> <span class="checklist-text svelte-w9vzty">${escape_html(text)}</span></li>`;
  bind_props($$props, { text, included });
}
function ValueProp($$payload, $$props) {
  let number = fallback($$props["number"], "");
  let label = fallback($$props["label"], "");
  let description = fallback($$props["description"], "");
  $$payload.out += `<div class="value-prop svelte-2n0f30"><div class="value-number svelte-2n0f30">${escape_html(number)}</div> <div class="value-content svelte-2n0f30"><div class="value-label svelte-2n0f30">${escape_html(label)}</div> `;
  if (description) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="value-description svelte-2n0f30">${escape_html(description)}</div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div></div>`;
  bind_props($$props, { number, label, description });
}
function TimelineItem($$payload, $$props) {
  push();
  let week = fallback($$props["week"], "");
  let title = fallback($$props["title"], "");
  let tasks = fallback($$props["tasks"], () => [], true);
  $$payload.out += `<div class="timeline-item svelte-zj5mde"><div class="timeline-marker svelte-zj5mde"><div class="timeline-week svelte-zj5mde">${escape_html(week)}</div></div> <div class="timeline-content svelte-zj5mde"><h4 class="timeline-title svelte-zj5mde">${escape_html(title)}</h4> `;
  if (tasks.length > 0) {
    $$payload.out += "<!--[-->";
    const each_array = ensure_array_like(tasks);
    $$payload.out += `<ul class="timeline-tasks svelte-zj5mde"><!--[-->`;
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let task = each_array[$$index];
      $$payload.out += `<li class="svelte-zj5mde">${escape_html(task)}</li>`;
    }
    $$payload.out += `<!--]--></ul>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div></div>`;
  bind_props($$props, { week, title, tasks });
  pop();
}
function _page($$payload) {
  const valueProps = [
    {
      number: "30",
      label: "Days to Launch",
      description: "From kickoff to go-live"
    },
    {
      number: "7",
      label: "Page Maximum",
      description: "Strategic, focused content"
    },
    {
      number: "1",
      label: "Fair Price",
      description: "No surprises, no add-ons"
    },
    {
      number: "∞",
      label: "Peace of Mind",
      description: "Professional quality guaranteed"
    }
  ];
  const coreFeatures = [
    {
      icon: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z",
      title: "Complete Website Package",
      description: "Up to 7 pages of professionally designed, mobile-responsive content"
    },
    {
      icon: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
      title: "Professional Copywriting",
      description: "Compelling content that speaks to Colorado audiences"
    },
    {
      icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
      title: "SEO Foundation",
      description: "Local SEO optimization to help customers find you"
    },
    {
      icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
      title: "Mobile-First Design",
      description: "Looks perfect on every device, guaranteed"
    }
  ];
  const included = [
    "Custom design aligned with your brand",
    "Up to 7 professionally written pages",
    "Mobile-responsive development",
    "Contact forms with email integration",
    "Google Analytics setup",
    "Basic SEO optimization",
    "Social media integration",
    "SSL security certificate",
    "Website hosting setup guidance",
    "Content management training",
    "30 days of post-launch support",
    "Bug fixes and minor adjustments"
  ];
  const notIncluded = [
    "Domain registration (we'll guide you)",
    "Hosting fees (typically $10-20/month)",
    "Stock photos (we'll help source)",
    "E-commerce functionality",
    "Custom web applications",
    "Ongoing maintenance (available separately)"
  ];
  const timeline = [
    {
      week: "W1",
      title: "Discovery & Strategy",
      tasks: [
        "Brand questionnaire & discovery call",
        "Competitive analysis",
        "Site architecture planning",
        "Content outline creation"
      ]
    },
    {
      week: "W2",
      title: "Design & Content",
      tasks: [
        "Homepage design concepts",
        "Professional copywriting",
        "Design refinement",
        "Mobile layouts"
      ]
    },
    {
      week: "W3",
      title: "Development",
      tasks: [
        "Full site build-out",
        "Contact form integration",
        "SEO implementation",
        "Mobile optimization"
      ]
    },
    {
      week: "W4",
      title: "Launch & Training",
      tasks: [
        "Final review & testing",
        "Launch preparation",
        "CMS training session",
        "Post-launch support begins"
      ]
    }
  ];
  const processSteps = [
    {
      step: "1",
      title: "Discovery Call",
      description: "Understand your business and goals"
    },
    {
      step: "2",
      title: "Strategic Planning",
      description: "Map out your site structure and content"
    },
    {
      step: "3",
      title: "Design & Writing",
      description: "Create your unique brand presence"
    },
    {
      step: "4",
      title: "Build & Optimize",
      description: "Develop and optimize for performance"
    },
    {
      step: "5",
      title: "Launch & Support",
      description: "Go live with confidence and support"
    }
  ];
  const faqs = [
    {
      question: "Why exactly $5,280?",
      answer: "It's Colorado's elevation in feet—a price that reflects our commitment to local businesses and our mile-high standards."
    },
    {
      question: "What if I need more than 7 pages?",
      answer: "Additional pages are $420 each. Most small businesses find 7 pages more than sufficient for their needs."
    },
    {
      question: "Can I make changes after launch?",
      answer: "You get 30 days of bug fixes and minor adjustments. After that, we offer maintenance plans or can train you to make updates yourself."
    },
    {
      question: "Do you work with businesses outside Colorado?",
      answer: "We focus on Colorado businesses but occasionally make exceptions. The $5,280 price is exclusive to Colorado companies."
    },
    {
      question: "What platform do you build on?",
      answer: "We use modern, fast, secure platforms like SvelteKit or Next.js, deployed on reliable hosting. No WordPress unless specifically requested."
    },
    {
      question: "How do I know this is right for me?",
      answer: "If you need a professional website quickly, have a clear budget, and want a partner who understands Colorado business, this is for you."
    }
  ];
  const each_array = ensure_array_like(valueProps);
  const each_array_1 = ensure_array_like(coreFeatures);
  const each_array_4 = ensure_array_like(timeline);
  const each_array_5 = ensure_array_like(processSteps);
  const each_array_6 = ensure_array_like(faqs);
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>$5,280 Complete Website Package | weKnowCO</title>`;
    $$payload2.out += `<meta name="description" content="Get a complete, professional website for your Colorado business in 30 days. $5,280 flat rate, no surprises. Mobile-responsive, SEO-optimized, and built for results." class="svelte-1rnw7ek"/>`;
  });
  $$payload.out += `<section class="relative overflow-hidden bg-gradient-to-br from-skyline-blue-600 via-skyline-blue-700 to-granite-gray-800 text-white min-h-screen flex items-center svelte-1rnw7ek"><div class="absolute inset-0 z-0 svelte-1rnw7ek"><img src="/images/5280-hero-bg.png" alt="Colorado Mountain Silhouette" class="w-full h-full object-cover opacity-80 svelte-1rnw7ek"/> <div class="absolute inset-0 bg-gradient-to-br from-skyline-blue-600/70 via-skyline-blue-700/60 to-granite-gray-800/80 svelte-1rnw7ek"></div> <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 svelte-1rnw7ek"></div></div> <div class="absolute inset-0 z-10 overflow-hidden pointer-events-none svelte-1rnw7ek"><div class="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-aspen-gold-400/10 blur-3xl animate-pulse svelte-1rnw7ek"></div> <div class="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-skyline-blue-300/10 blur-3xl animate-pulse delay-1000 svelte-1rnw7ek"></div> <div class="absolute top-10 right-20 w-64 h-64 rounded-full bg-red-rocks-rust/10 blur-2xl animate-float svelte-1rnw7ek"></div></div> <div class="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center svelte-1rnw7ek"><div class="inline-flex items-center bg-aspen-gold-400/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 fade-in svelte-1rnw7ek"><span class="text-aspen-gold-400 font-mono text-sm font-semibold tracking-wider svelte-1rnw7ek">COLORADO SPECIAL</span></div> <h1 class="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 fade-in drop-shadow-2xl svelte-1rnw7ek">$5,280 Website</h1> <p class="text-xl md:text-2xl lg:text-3xl mb-8 max-w-3xl mx-auto text-white/95 slide-up drop-shadow-lg font-medium svelte-1rnw7ek">A complete, professional website for your Colorado business. <br class="hidden md:block svelte-1rnw7ek"/> 30 days. Up to 7 pages. One fair price.</p> <div class="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-5xl mx-auto mb-12 slide-up svelte-1rnw7ek"><!--[-->`;
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    let prop = each_array[i];
    $$payload.out += `<div${attr_class(`stagger-${stringify(i)}`, "svelte-1rnw7ek")}>`;
    ValueProp($$payload, spread_props([prop]));
    $$payload.out += `<!----></div>`;
  }
  $$payload.out += `<!--]--></div> <div class="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center slide-up px-4 svelte-1rnw7ek"><a href="#get-started" class="group bg-aspen-gold-400 text-granite-gray-800 px-8 sm:px-10 py-4 sm:py-5 rounded-xl font-bold text-base sm:text-lg hover:bg-aspen-gold-500 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-2xl hover:shadow-aspen-gold-400/50 flex items-center w-full sm:w-auto justify-center svelte-1rnw7ek">Start Your $5,280 Site <svg class="w-5 h-5 sm:w-6 sm:h-6 ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform svelte-1rnw7ek" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" class="svelte-1rnw7ek"></path></svg></a> <a href="#timeline" class="group border-2 sm:border-3 border-white text-white px-8 sm:px-10 py-4 sm:py-5 rounded-xl font-bold text-base sm:text-lg hover:bg-white hover:text-skyline-blue-700 transition-all duration-300 backdrop-blur-sm bg-white/10 flex items-center w-full sm:w-auto justify-center svelte-1rnw7ek">See 30-Day Timeline <svg class="w-5 h-5 sm:w-6 sm:h-6 ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform svelte-1rnw7ek" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" class="svelte-1rnw7ek"></path></svg></a></div> <div class="mt-16 inline-flex items-center text-white/80 text-sm font-mono animate-float backdrop-blur-sm bg-white/10 px-6 py-3 rounded-full border border-white/20 svelte-1rnw7ek"><span class="w-3 h-3 bg-aspen-gold-400 rounded-full mr-3 animate-pulse shadow-lg shadow-aspen-gold-400/50 svelte-1rnw7ek"></span> Elevation: 5,280ft</div></div></section> <section class="py-20 bg-snowfield-white svelte-1rnw7ek"><div class="max-w-7xl mx-auto px-6 svelte-1rnw7ek"><div class="text-center mb-12 fade-in svelte-1rnw7ek"><h2 class="font-display text-3xl md:text-4xl font-bold text-skyline-blue-600 mb-4 svelte-1rnw7ek">Everything You Need to Succeed Online</h2> <p class="text-xl text-granite-gray-600 max-w-2xl mx-auto svelte-1rnw7ek">A complete website package designed for Colorado small businesses</p></div> <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 svelte-1rnw7ek"><!--[-->`;
  for (let i = 0, $$length = each_array_1.length; i < $$length; i++) {
    let feature = each_array_1[i];
    $$payload.out += `<div${attr_class(`fade-in-up stagger-${stringify(i)}`, "svelte-1rnw7ek")}>`;
    FeatureCard($$payload, spread_props([feature]));
    $$payload.out += `<!----></div>`;
  }
  $$payload.out += `<!--]--></div></div></section> <section class="py-20 bg-gradient-to-br from-granite-gray-50 to-snowfield-white relative overflow-hidden svelte-1rnw7ek"><div class="absolute top-20 right-20 w-32 h-32 bg-skyline-blue-100 rounded-full blur-2xl opacity-40 svelte-1rnw7ek"></div> <div class="absolute bottom-20 left-20 w-40 h-40 bg-aspen-gold-100 rounded-full blur-3xl opacity-30 svelte-1rnw7ek"></div> <div class="max-w-7xl mx-auto px-6 svelte-1rnw7ek"><div class="grid lg:grid-cols-2 gap-12 svelte-1rnw7ek"><div class="fade-in-up stagger-0 svelte-1rnw7ek">`;
  BaseCard($$payload, {
    class: "h-full p-8 shadow-glow",
    children: ($$payload2) => {
      const each_array_2 = ensure_array_like(included);
      $$payload2.out += `<h3 class="font-display text-2xl font-bold text-skyline-blue-600 mb-6 flex items-center svelte-1rnw7ek"><svg class="w-8 h-8 mr-3 text-green-500 svelte-1rnw7ek" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" class="svelte-1rnw7ek"></path></svg> What\\'s Included</h3> <ul class="space-y-3 svelte-1rnw7ek"><!--[-->`;
      for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
        let item = each_array_2[$$index_2];
        ChecklistItem($$payload2, { text: item, included: true });
      }
      $$payload2.out += `<!--]--></ul>`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div> <div class="fade-in-up stagger-1 svelte-1rnw7ek">`;
  BaseCard($$payload, {
    class: "h-full p-8 shadow-glow",
    children: ($$payload2) => {
      const each_array_3 = ensure_array_like(notIncluded);
      $$payload2.out += `<h3 class="font-display text-2xl font-bold text-granite-gray-600 mb-6 flex items-center svelte-1rnw7ek"><svg class="w-8 h-8 mr-3 text-granite-gray-400 svelte-1rnw7ek" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" class="svelte-1rnw7ek"></path></svg> What\\'s Not Included</h3> <ul class="space-y-3 svelte-1rnw7ek"><!--[-->`;
      for (let $$index_3 = 0, $$length = each_array_3.length; $$index_3 < $$length; $$index_3++) {
        let item = each_array_3[$$index_3];
        ChecklistItem($$payload2, { text: item, included: false });
      }
      $$payload2.out += `<!--]--></ul> <div class="mt-6 p-4 bg-skyline-blue-50 rounded-lg svelte-1rnw7ek"><p class="text-sm text-skyline-blue-700 svelte-1rnw7ek"><strong class="svelte-1rnw7ek">Need more?</strong> Check out our monthly retainer plans for ongoing support, marketing, and growth.</p></div>`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div></div></div></section> <section id="timeline" class="py-20 bg-snowfield-white svelte-1rnw7ek"><div class="max-w-5xl mx-auto px-6 svelte-1rnw7ek"><div class="text-center mb-12 svelte-1rnw7ek"><h2 class="font-display text-3xl md:text-4xl font-bold text-skyline-blue-600 mb-4 svelte-1rnw7ek">Your 30-Day Journey</h2> <p class="text-xl text-granite-gray-600 svelte-1rnw7ek">From concept to launch in four focused weeks</p></div> <div class="space-y-8 svelte-1rnw7ek"><!--[-->`;
  for (let $$index_4 = 0, $$length = each_array_4.length; $$index_4 < $$length; $$index_4++) {
    let item = each_array_4[$$index_4];
    TimelineItem($$payload, spread_props([item]));
  }
  $$payload.out += `<!--]--></div></div></section> <section class="py-20 bg-gradient-to-r from-skyline-blue-600 to-skyline-blue-700 text-white svelte-1rnw7ek"><div class="max-w-7xl mx-auto px-6 svelte-1rnw7ek"><div class="text-center mb-12 svelte-1rnw7ek"><h2 class="font-display text-3xl md:text-4xl font-bold mb-4 svelte-1rnw7ek">Simple, Transparent Process</h2> <p class="text-xl text-white/90 svelte-1rnw7ek">No surprises, no confusion—just clear steps to your new website</p></div> <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 md:gap-8 svelte-1rnw7ek"><!--[-->`;
  for (let $$index_5 = 0, $$length = each_array_5.length; $$index_5 < $$length; $$index_5++) {
    let process = each_array_5[$$index_5];
    $$payload.out += `<div class="text-center svelte-1rnw7ek"><div class="w-14 h-14 sm:w-16 sm:h-16 bg-aspen-gold-400 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 text-skyline-blue-700 font-bold text-lg sm:text-xl svelte-1rnw7ek">${escape_html(process.step)}</div> <h4 class="font-semibold mb-2 text-sm sm:text-base svelte-1rnw7ek">${escape_html(process.title)}</h4> <p class="text-xs sm:text-sm text-white/80 svelte-1rnw7ek">${escape_html(process.description)}</p></div>`;
  }
  $$payload.out += `<!--]--></div></div></section> <section class="py-20 bg-granite-gray-50 svelte-1rnw7ek"><div class="max-w-4xl mx-auto px-6 svelte-1rnw7ek"><div class="text-center mb-12 svelte-1rnw7ek"><h2 class="font-display text-3xl md:text-4xl font-bold text-skyline-blue-600 mb-4 svelte-1rnw7ek">Frequently Asked Questions</h2></div> <div class="space-y-6 svelte-1rnw7ek"><!--[-->`;
  for (let $$index_6 = 0, $$length = each_array_6.length; $$index_6 < $$length; $$index_6++) {
    let faq = each_array_6[$$index_6];
    BaseCard($$payload, {
      class: "p-6",
      children: ($$payload2) => {
        $$payload2.out += `<h3 class="font-semibold text-lg text-skyline-blue-600 mb-3 svelte-1rnw7ek">${escape_html(faq.question)}</h3> <p class="text-granite-gray-600 leading-relaxed svelte-1rnw7ek">${escape_html(faq.answer)}</p>`;
      },
      $$slots: { default: true }
    });
  }
  $$payload.out += `<!--]--></div></div></section> <section id="get-started" class="py-20 bg-gradient-to-br from-skyline-blue-600 to-red-rocks-rust text-white svelte-1rnw7ek"><div class="max-w-4xl mx-auto px-6 svelte-1rnw7ek"><div class="text-center mb-12 svelte-1rnw7ek"><h2 class="font-display text-3xl md:text-4xl font-bold mb-4 svelte-1rnw7ek">Ready for Your $5,280 Website?</h2> <p class="text-xl text-white/90 svelte-1rnw7ek">Let's build something amazing for your Colorado business</p></div> `;
  LeadCaptureWizard($$payload, {
    serviceInterest: "5280-site",
    formName: "$5,280 Site Interest"
  });
  $$payload.out += `<!----> <div class="text-center mt-8 svelte-1rnw7ek"><p class="text-white/80 mb-4 svelte-1rnw7ek">Have questions? Want to see examples?</p> <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 svelte-1rnw7ek"><a href="/case-stories" class="inline-flex items-center justify-center px-5 sm:px-6 py-3 border-2 border-white/50 text-white rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold text-sm sm:text-base w-full sm:w-auto svelte-1rnw7ek">View Case Studies <svg class="w-4 h-4 ml-2 svelte-1rnw7ek" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" class="svelte-1rnw7ek"></path></svg></a> <a href="mailto:hello@weknowco.com?subject=$5,280 Website Inquiry" class="inline-flex items-center justify-center px-5 sm:px-6 py-3 border-2 border-white/50 text-white rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold text-sm sm:text-base w-full sm:w-auto svelte-1rnw7ek">Email Us Directly <svg class="w-4 h-4 ml-2 svelte-1rnw7ek" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" class="svelte-1rnw7ek"></path></svg></a></div></div></div></section>`;
}
export {
  _page as default
};
