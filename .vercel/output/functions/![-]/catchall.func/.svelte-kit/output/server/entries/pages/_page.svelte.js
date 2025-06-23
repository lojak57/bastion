import { P as fallback, Q as bind_props, E as pop, C as push, K as escape_html, G as ensure_array_like, R as spread_props, S as head } from "../../chunks/index.js";
import "clsx";
/* empty css                                                      */
import { B as BaseCard } from "../../chunks/BaseCard.js";
/* empty css                                              */
import { B as BaseButton } from "../../chunks/BaseButton.js";
function HeroSection($$payload) {
  $$payload.out += `<section class="relative min-h-screen flex items-center justify-center overflow-hidden svelte-1ftiu7g"><div class="absolute inset-0 z-0 svelte-1ftiu7g"><img src="/images/hero-mountains.png" alt="Colorado Mountains" class="w-full h-full object-cover object-center svelte-1ftiu7g"/> <div class="absolute inset-0 bg-gradient-to-b from-skyline-blue-900/80 via-skyline-blue-800/70 to-skyline-blue-700/60 svelte-1ftiu7g"></div> <div class="absolute inset-0 bg-black/20 svelte-1ftiu7g"></div></div> <div class="absolute inset-0 z-10 overflow-hidden pointer-events-none svelte-1ftiu7g"><div class="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-aspen-gold-400/10 blur-3xl animate-pulse svelte-1ftiu7g"></div> <div class="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-skyline-blue-300/10 blur-3xl animate-pulse delay-1000 svelte-1ftiu7g"></div> <img src="/images/logo/weknowco-icon.svg" alt="" class="absolute top-20 right-20 w-24 h-24 opacity-20 animate-float-slow svelte-1ftiu7g"/> <img src="/images/logo/weknowco-icon.svg" alt="" class="absolute bottom-32 left-32 w-16 h-16 opacity-15 animate-float-delayed svelte-1ftiu7g"/> <img src="/favicon.svg" alt="" class="absolute top-1/3 right-1/4 w-20 h-20 opacity-10 animate-float-reverse svelte-1ftiu7g"/></div> <div class="relative z-20 max-w-6xl mx-auto px-6 text-center svelte-1ftiu7g"><div class="inline-flex items-center bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-8 fade-in border border-white/20 svelte-1ftiu7g"><img src="/images/logo/weknowco-icon.svg" alt="" class="w-8 h-8 mr-3 svelte-1ftiu7g"/> <span class="text-white font-semibold tracking-wide svelte-1ftiu7g">COLORADO'S DIGITAL MARKETING PARTNER</span></div> <h1 class="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 fade-in drop-shadow-2xl svelte-1ftiu7g">Turn Colorado Dreams Into <span class="text-aspen-gold-400 svelte-1ftiu7g">Mile-High</span> Brands</h1> <p class="text-xl md:text-2xl lg:text-3xl text-white/95 mb-8 max-w-4xl mx-auto slide-up drop-shadow-lg font-medium svelte-1ftiu7g">$5,280 gets you a complete website that works. <br class="hidden md:block svelte-1ftiu7g"/> 30 days. 7 pages. Zero fluff.</p> <div class="flex flex-col sm:flex-row gap-6 justify-center items-center slide-up svelte-1ftiu7g"><a href="/contact" class="group bg-aspen-gold-400 text-granite-gray-800 px-10 py-5 rounded-xl font-bold text-lg hover:bg-aspen-gold-500 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-2xl hover:shadow-aspen-gold-400/50 flex items-center svelte-1ftiu7g">Start Your Climb <svg class="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform svelte-1ftiu7g" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" class="svelte-1ftiu7g"></path></svg></a> <a href="/5280-site" class="group border-3 border-white text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-white hover:text-skyline-blue-700 transition-all duration-300 backdrop-blur-sm bg-white/10 flex items-center svelte-1ftiu7g">See What's Included <svg class="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform svelte-1ftiu7g" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" class="svelte-1ftiu7g"></path></svg></a></div> <div class="mt-12 max-w-2xl mx-auto text-center slide-up px-4 svelte-1ftiu7g"><div class="bg-red-rocks-rust/20 backdrop-blur-sm border border-red-rocks-rust/30 rounded-2xl p-4 sm:p-6 svelte-1ftiu7g"><div class="flex items-center justify-center mb-3 svelte-1ftiu7g"><img src="/favicon.svg" alt="" class="w-6 h-6 mr-2 opacity-80 svelte-1ftiu7g"/> <span class="bg-red-rocks-rust text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider svelte-1ftiu7g">Partnership Program</span></div> <h3 class="text-white font-bold text-xl mb-3 svelte-1ftiu7g">Looking for a Marketing Partner?</h3> <p class="text-white/80 text-sm mb-4 svelte-1ftiu7g">Revenue-share, equity, and micro-retainer partnerships for qualified Colorado founders.</p> <a href="/solo-biz-helper" class="inline-flex items-center text-aspen-gold-400 hover:text-aspen-gold-300 font-semibold text-sm transition-colors svelte-1ftiu7g">Learn About Solo Biz Helper <svg class="w-4 h-4 ml-2 svelte-1ftiu7g" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" class="svelte-1ftiu7g"></path></svg></a></div></div> <div class="mt-16 inline-flex items-center text-white/80 text-sm font-mono animate-float backdrop-blur-sm bg-white/10 px-6 py-3 rounded-full border border-white/20 svelte-1ftiu7g"><span class="w-3 h-3 bg-aspen-gold-400 rounded-full mr-3 animate-pulse shadow-lg shadow-aspen-gold-400/50 svelte-1ftiu7g"></span> Elevation: 5,280 ft • Inspiration: Unlimited</div></div> <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce z-20 svelte-1ftiu7g"><svg class="w-8 h-8 svelte-1ftiu7g" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" class="svelte-1ftiu7g"></path></svg></div></section>`;
}
function Why5280Section($$payload) {
  $$payload.out += `<section class="py-20 bg-white"><div class="max-w-7xl mx-auto px-6"><div class="text-center mb-16"><h2 class="font-display text-3xl md:text-4xl font-bold text-skyline-blue-600 mb-4">Why $5,280? Because That's Our Altitude.</h2> <p class="text-xl text-granite-gray-600 max-w-3xl mx-auto">No hidden fees. No scope creep. No Silicon Valley pricing. 
				Just honest work at Colorado's elevation—where the air is thin but the results are thick.</p></div> <div class="grid md:grid-cols-3 gap-8">`;
  BaseCard($$payload, {
    class: "text-center p-8 hover:shadow-lg transition-all duration-300 group hover:-translate-y-2",
    children: ($$payload2) => {
      $$payload2.out += `<div class="w-16 h-16 bg-aspen-gold-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform"><svg class="w-8 h-8 text-aspen-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path></svg></div> <h3 class="font-display text-xl font-semibold text-skyline-blue-600 mb-2">Transparent Pricing</h3> <p class="text-granite-gray-600">One price. One timeline. One guarantee. 
					No surprises at the summit.</p>`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  BaseCard($$payload, {
    class: "text-center p-8 hover:shadow-lg transition-all duration-300 group hover:-translate-y-2",
    children: ($$payload2) => {
      $$payload2.out += `<div class="w-16 h-16 bg-skyline-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform"><svg class="w-8 h-8 text-skyline-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg></div> <h3 class="font-display text-xl font-semibold text-skyline-blue-600 mb-2">Colorado Focused</h3> <p class="text-granite-gray-600">We know the Front Range, the Western Slope, 
					and everything in between.</p>`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  BaseCard($$payload, {
    class: "text-center p-8 hover:shadow-lg transition-all duration-300 group hover:-translate-y-2",
    children: ($$payload2) => {
      $$payload2.out += `<div class="w-16 h-16 bg-red-rocks-rust/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform"><svg class="w-8 h-8 text-red-rocks-rust" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg></div> <h3 class="font-display text-xl font-semibold text-skyline-blue-600 mb-2">Results Over Noise</h3> <p class="text-granite-gray-600">Built to stay findable even as search evolves. 
					No buzzwords, just outcomes.</p>`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div></div></section>`;
}
function PricingCard($$payload, $$props) {
  push();
  let priceDisplay, periodDisplay;
  let title = $$props["title"];
  let price = $$props["price"];
  let period = fallback($$props["period"], "month");
  let description = $$props["description"];
  let features = fallback($$props["features"], () => [], true);
  let ctaText = fallback($$props["ctaText"], "Get Started");
  let ctaHref = fallback($$props["ctaHref"], "/contact");
  let popular = fallback($$props["popular"], false);
  let annual = fallback($$props["annual"], false);
  priceDisplay = annual && period === "month" ? `$${(parseInt(price.replace("$", "").replace(",", "")) * 10).toLocaleString()}` : price;
  periodDisplay = annual ? "year" : period;
  $$payload.out += `<div class="relative">`;
  if (popular) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10"><span class="bg-aspen-gold-400 text-granite-gray-700 px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  BaseCard($$payload, {
    class: `h-full transition-all duration-300 hover:scale-105 ${popular ? "ring-2 ring-aspen-gold-400 shadow-xl" : "hover:shadow-lg"}`,
    children: ($$payload2) => {
      $$payload2.out += `<div class="p-6"><div class="text-center mb-6"><h3 class="wkc-heading text-2xl font-bold text-skyline-blue-600 mb-2">${escape_html(title)}</h3> <div class="flex items-baseline justify-center mb-2"><span class="text-4xl font-bold text-granite-gray-700">${escape_html(priceDisplay)}</span> <span class="text-granite-gray-500 ml-1">/${escape_html(periodDisplay)}</span></div> `;
      if (annual && period === "month") {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<div class="text-sm text-aspen-gold-600 font-medium">Save 2 months annually</div>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> <p class="text-granite-gray-600 mt-2">${escape_html(description)}</p></div> `;
      if (features.length > 0) {
        $$payload2.out += "<!--[-->";
        const each_array = ensure_array_like(features);
        $$payload2.out += `<ul class="space-y-3 mb-6"><!--[-->`;
        for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
          let feature = each_array[$$index];
          $$payload2.out += `<li class="flex items-start"><svg class="w-5 h-5 text-aspen-gold-400 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg> <span class="text-granite-gray-600">${escape_html(feature)}</span></li>`;
        }
        $$payload2.out += `<!--]--></ul>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      BaseButton($$payload2, {
        variant: popular ? "primary" : "outline",
        size: "lg",
        href: ctaHref,
        class: `w-full ${popular ? "btn-primary" : "btn-outline"} transition-all duration-300`,
        children: ($$payload3) => {
          $$payload3.out += `<!---->${escape_html(ctaText)}`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----></div>`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div>`;
  bind_props($$props, {
    title,
    price,
    period,
    description,
    features,
    ctaText,
    ctaHref,
    popular,
    annual
  });
  pop();
}
function PlansSnapshotSection($$payload) {
  const plans = [
    {
      title: "Trailhead",
      price: "$750",
      description: "Perfect for getting started with consistent content and basic optimization.",
      features: [
        "4 geo-researched blog posts",
        "Quarterly strategy call",
        "Search tune-ups",
        "Schema markup optimization",
        "Basic analytics reporting"
      ],
      ctaText: "Start the Trail",
      ctaHref: "/contact?plan=trailhead"
    },
    {
      title: "Summit",
      price: "$1,800",
      description: "Comprehensive marketing with ads, video content, and continuous optimization.",
      features: [
        "Everything in Trailhead",
        "Google/Meta ads management",
        "Monthly brand video",
        "Email drip campaigns",
        "Answer engine optimization",
        "Monthly performance review"
      ],
      popular: true,
      ctaText: "Reach the Summit",
      ctaHref: "/contact?plan=summit"
    },
    {
      title: "Peak Season",
      price: "$3,500",
      description: "Full-scale marketing operation with testing, influencers, and premium content.",
      features: [
        "Everything in Summit",
        "Bi-weekly landing page tests",
        "Influencer micro-campaigns",
        "Quarterly brand films",
        "Advanced prompt libraries",
        "Priority support"
      ],
      ctaText: "Claim the Peak",
      ctaHref: "/contact?plan=peak"
    }
  ];
  const each_array = ensure_array_like(plans);
  $$payload.out += `<section class="py-20 bg-gray-50"><div class="max-w-7xl mx-auto px-6"><div class="text-center mb-16"><h2 class="font-display text-3xl md:text-4xl font-bold text-skyline-blue-600 mb-4">Choose Your Altitude</h2> <p class="text-xl text-granite-gray-600 max-w-3xl mx-auto">Start with the $5,280 site, then choose how high you want to climb. 
				Simple monthly plans—no long-term handcuffs.</p></div> <div class="grid md:grid-cols-3 gap-8"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let plan = each_array[$$index];
    PricingCard($$payload, spread_props([plan]));
  }
  $$payload.out += `<!--]--></div> <div class="text-center mt-12"><p class="text-granite-gray-600 mb-6">Want to see the full growth journey and business outcomes?</p> <div class="flex flex-col sm:flex-row gap-4 justify-center items-center"><a href="/plans-growth" class="inline-flex items-center text-skyline-blue-600 hover:text-skyline-blue-700 font-medium group">See Your Growth Journey <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg></a> <span class="text-granite-gray-400">or</span> <a href="/contact" class="inline-flex items-center text-skyline-blue-600 hover:text-skyline-blue-700 font-medium group">Schedule a Discovery Call <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></a></div></div></div></section>`;
}
function FounderStorySection($$payload) {
  $$payload.out += `<section class="py-20 bg-white"><div class="max-w-7xl mx-auto px-6"><div class="grid lg:grid-cols-2 gap-12 items-center"><div><h2 class="font-display text-3xl md:text-4xl font-bold text-skyline-blue-600 mb-6">Friends Since 12, Partners for Life</h2> <p class="text-lg text-granite-gray-600 mb-6">Two Colorado natives who met at 12 and started hustling together at 14—selling everything from 
					wholesale sunglasses to whatever would turn a profit. Both fathers with kids ranging from 
					teenagers to 4-year-olds. We've battled through corporations, built businesses from scratch, 
					failed forward, and succeeded against the odds.</p> <p class="text-lg text-granite-gray-600 mb-6">We've been the corporate executive, the struggling entrepreneur, the midnight-oil burner, 
					and the victory celebrator. We've walked in your shoes through every possible path a business can take.</p> <p class="text-lg text-granite-gray-600 mb-8"><strong class="text-skyline-blue-600">That's how we know what your customers want.</strong> It's how we know how to market you. It's why you choose us.</p> <a href="/about" class="inline-flex items-center px-6 py-3 border-2 border-skyline-blue-600 text-skyline-blue-600 rounded-lg hover:bg-skyline-blue-600 hover:text-white transition-all duration-300 font-semibold group">Read Our Full Story <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></a></div> <div class="relative"><div class="aspect-[4/3] bg-gradient-to-br from-skyline-blue-100 to-aspen-gold-100 rounded-2xl p-8 relative overflow-hidden"><img src="/images/logo/weknowco-icon.svg" alt="" class="absolute bottom-0 right-0 w-48 h-48 opacity-10"/> <div class="relative z-10 h-full flex flex-col justify-between"><div class="flex items-center space-x-3"><div class="w-3 h-3 bg-aspen-gold-400 rounded-full"></div> <span class="text-granite-gray-600 font-semibold">Age 12</span> <span class="text-granite-gray-500">First met</span></div> <div class="ml-1.5 w-0.5 bg-gradient-to-b from-aspen-gold-400 to-skyline-blue-600 flex-grow my-2"></div> <div class="flex items-center space-x-3"><div class="w-3 h-3 bg-skyline-blue-400 rounded-full"></div> <span class="text-granite-gray-600 font-semibold">Age 14</span> <span class="text-granite-gray-500">Started hustling</span></div> <div class="ml-1.5 w-0.5 bg-gradient-to-b from-skyline-blue-400 to-skyline-blue-600 flex-grow my-2"></div> <div class="flex items-center space-x-3"><div class="w-4 h-4 bg-skyline-blue-600 rounded-full animate-pulse"></div> <span class="text-granite-gray-600 font-semibold">Today</span> <span class="text-granite-gray-500">weKnowCO</span></div> <div class="mt-6 pt-6 border-t border-granite-gray-200 grid grid-cols-2 gap-4"><div><p class="text-2xl font-bold text-skyline-blue-600">30+</p> <p class="text-sm text-granite-gray-600">Years of friendship</p></div> <div><p class="text-2xl font-bold text-skyline-blue-600">25+</p> <p class="text-sm text-granite-gray-600">Years hustling</p></div></div></div></div></div></div></div></section>`;
}
function SoloBizTeaserSection($$payload) {
  $$payload.out += `<section class="py-20 bg-gradient-to-br from-red-rocks-rust to-skyline-blue-700 text-white relative overflow-hidden"><div class="absolute inset-0 opacity-20"><div class="absolute top-10 right-10 w-40 h-40 bg-aspen-gold-400/30 rounded-full blur-2xl animate-pulse"></div> <div class="absolute bottom-10 left-10 w-32 h-32 bg-white/20 rounded-full blur-xl animate-pulse delay-1000"></div> <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-rocks-rust/20 rounded-full blur-3xl"></div></div> <div class="max-w-7xl mx-auto px-6 text-center relative z-10"><div class="inline-flex items-center bg-red-rocks-rust/30 backdrop-blur-sm border border-red-rocks-rust/40 rounded-full px-6 py-2 mb-6"><span class="text-aspen-gold-400 font-mono text-sm font-semibold tracking-wider">PARTNER PROGRAM</span></div> <h2 class="font-display text-3xl md:text-5xl font-bold mb-6">Solo Biz Helper</h2> <p class="text-xl md:text-2xl text-white/95 mb-8 max-w-4xl mx-auto">Dedicated founders with viable business models deserve strategic marketing partners. <br class="hidden md:block"/> Let's explore partnership structures that align our success with yours.</p> <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto mb-10"><div class="backdrop-blur-sm bg-white/10 rounded-xl p-4 border border-white/20"><div class="text-2xl font-bold text-aspen-gold-400">Selective</div> <div class="text-white/80 text-sm">Partnership approach</div></div> <div class="backdrop-blur-sm bg-white/10 rounded-xl p-4 border border-white/20"><div class="text-2xl font-bold text-aspen-gold-400">Strategic</div> <div class="text-white/80 text-sm">Investment decisions</div></div> <div class="backdrop-blur-sm bg-white/10 rounded-xl p-4 border border-white/20"><div class="text-2xl font-bold text-aspen-gold-400">Collaborative</div> <div class="text-white/80 text-sm">Growth methodology</div></div></div> <div class="flex flex-col sm:flex-row gap-4 justify-center"><a href="/solo-biz-helper" class="group inline-flex items-center justify-center px-8 py-4 bg-aspen-gold-400 text-granite-gray-800 rounded-lg hover:bg-aspen-gold-500 transition-all duration-300 font-bold shadow-xl hover:shadow-aspen-gold-400/50 transform hover:scale-105">Learn More About Partnerships <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg></a> <a href="/contact?interest=solo-biz" class="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-skyline-blue-600 transition-all duration-300 font-bold backdrop-blur-sm bg-white/10">Apply Now</a></div></div></section>`;
}
function FinalCTASection($$payload) {
  $$payload.out += `<section class="py-20 bg-gradient-to-r from-skyline-blue-600 to-skyline-blue-700 text-white relative overflow-hidden"><div class="absolute inset-0 opacity-20"><div class="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div> <div class="absolute bottom-10 right-10 w-40 h-40 bg-aspen-gold-400/20 rounded-full blur-2xl"></div> <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-skyline-blue-400/10 rounded-full blur-3xl"></div></div> <div class="max-w-4xl mx-auto px-6 text-center relative z-10"><h2 class="font-display text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Climb?</h2> <p class="text-xl mb-8 text-white/90">$5,280. 30 days. Zero fluff. Let's turn your Colorado dream into a mile-high brand.</p> <a href="/contact" class="group inline-flex items-center justify-center px-10 py-5 bg-aspen-gold-400 text-granite-gray-800 rounded-xl hover:bg-aspen-gold-500 transition-all duration-300 font-bold text-lg shadow-2xl hover:shadow-aspen-gold-400/50 transform hover:scale-105">Start Your Project <svg class="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg></a></div></section>`;
}
function _page($$payload) {
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>weKnowCO | Turn Colorado Dreams Into Mile-High Brands</title>`;
    $$payload2.out += `<meta name="description" content="$5,280 gets you a complete website that works. 30 days. 7 pages. Zero fluff. Colorado's premier marketing partner for businesses that punch above altitude."/> <meta property="og:title" content="weKnowCO | Turn Colorado Dreams Into Mile-High Brands"/> <meta property="og:description" content="$5,280 gets you a complete website that works. 30 days. 7 pages. Zero fluff."/> <meta property="og:type" content="website"/> <meta property="og:url" content="https://weknowco.com"/> <meta name="twitter:card" content="summary_large_image"/>`;
  });
  HeroSection($$payload);
  $$payload.out += `<!----> `;
  Why5280Section($$payload);
  $$payload.out += `<!----> `;
  PlansSnapshotSection($$payload);
  $$payload.out += `<!----> `;
  FounderStorySection($$payload);
  $$payload.out += `<!----> `;
  SoloBizTeaserSection($$payload);
  $$payload.out += `<!----> `;
  FinalCTASection($$payload);
  $$payload.out += `<!---->`;
}
export {
  _page as default
};
