import { G as ensure_array_like, K as escape_html, E as pop, C as push, S as head } from "../../../../chunks/index.js";
import "clsx";
import { L as LeadCaptureWizard } from "../../../../chunks/LeadCaptureWizard.js";
import "../../../../chunks/WizardContainer.js";
/* empty css                                                            */
import { B as BaseCard } from "../../../../chunks/BaseCard.js";
function AboutLetter($$payload) {
  $$payload.out += `<section class="py-20 bg-snowfield-white"><div class="max-w-4xl mx-auto px-6"><div class="bg-white shadow-2xl rounded-lg border border-granite-gray-100 overflow-hidden"><div class="bg-gradient-to-r from-skyline-blue-600 to-skyline-blue-700 px-8 py-6"><div class="flex items-center space-x-4"><img src="/images/logo/weknowco-full-logo.png" alt="weKnowCO" class="h-8 filter brightness-0 invert"/> <div class="text-white/80 text-sm">Colorado's Marketing Partners</div></div></div> <div class="p-12"><div class="prose prose-lg max-w-none text-granite-gray-700 leading-relaxed space-y-6"><p class="text-xl font-medium text-skyline-blue-600 mb-8">We've been in business together since before we had bank accounts.</p> <p class="italic text-granite-gray-600">Literally.</p> <p>Back in high school, it was wholesale sunglasses. Two bucks a pair, flipped for fifteen out of backpacks between classes. Was it legal? Debatable. Was it entrepreneurial? Absolutely.</p> <p class="font-medium text-skyline-blue-600">That instinct never left.</p> <p>We've been best friends since we were twelve. Working together. Working apart. Always building something. From cashiering at waterparks and janitoring storefronts to managing multimillion-dollar teams and negotiating with enterprise vendors, we've lived through every flavor of work Colorado has to offer.</p> <p>We were raised here. Not just in geography, but in grit. In the rhythm of this state. We've worked in the mountains and on the plains. Inside warehouses, boardrooms, oilfields, and sales floors. We've served the people who built this state, and we're part of the generation raised by them.</p> <p>We know the old-school locals. The millennial natives. The new wave of transplants. Not because we studied them. Because we are them. We've sold to them. Led them. Grown with them. Listened to them.</p> <p class="bg-skyline-blue-50 border-l-4 border-skyline-blue-400 p-4 rounded-r-lg">This company isn't theory. It's not vibe-based branding from a New York loft or algorithmic "strategy" pulled from a dashboard. WeKnowCO is the result of twenty years of real conversations about work, culture, what people value, and what actually moves them.</p> <p>We've sold furniture. Managed logistics. Built tech. Advised startups. Sat in Fortune 500 meetings. Raised kids early. Burned out. Reinvented ourselves. And stood by a campfire in the foothills with the same crew we met in middle school, wondering what kind of world we'd help build next.</p> <p class="font-medium text-skyline-blue-600">That's why we started this.</p> <p>We believe the best marketing doesn't feel like marketing. It feels like being seen. Being understood. It's a story people want to hear because it already sounds like theirs.</p> <p>That's what we do. We translate your brand into something that speaks to the people who matter, because we know how to listen.</p> <p class="font-medium text-skyline-blue-600">And we know Colorado.</p> <p>From Brighton to Boulder. From the oil rig to the boardroom. From Adobe decks to dad jokes. From blue collar to venture capital. From viral reels to real relationships.</p> <p>This is home. And we know how to speak its language.</p> <p class="text-xl font-bold text-skyline-blue-600 mt-8">Let's build something they'll actually care about.</p></div> <div class="mt-12 pt-8 border-t border-granite-gray-200"><div class="flex items-center justify-between"><div class="space-y-2"><p class="text-granite-gray-600 font-medium">The weKnowCO Team</p> <p class="text-granite-gray-500 text-sm">Colorado Natives &amp; Marketing Partners</p></div> <img src="/favicon.svg" alt="" class="w-8 h-8 opacity-60"/></div></div></div></div></div></section>`;
}
function AboutStats($$payload) {
  const stats = [
    {
      number: "30+",
      label: "Years of friendship",
      detail: "Since we were 12"
    },
    {
      number: "25+",
      label: "Years hustling",
      detail: "Started at 14"
    },
    {
      number: "100%",
      label: "Colorado born",
      detail: "Raised in the grit"
    },
    {
      number: "20+",
      label: "Years building",
      detail: "Every industry"
    }
  ];
  const each_array = ensure_array_like(stats);
  $$payload.out += `<section class="py-12 bg-gradient-to-r from-skyline-blue-600 to-skyline-blue-700"><div class="max-w-7xl mx-auto px-6"><div class="grid grid-cols-2 lg:grid-cols-4 gap-8"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let stat = each_array[$$index];
    $$payload.out += `<div class="text-center text-white"><div class="text-3xl md:text-4xl font-bold text-aspen-gold-400 mb-2">${escape_html(stat.number)}</div> <div class="font-semibold mb-1">${escape_html(stat.label)}</div> <div class="text-white/80 text-sm">${escape_html(stat.detail)}</div></div>`;
  }
  $$payload.out += `<!--]--></div></div></section>`;
}
function AboutCTA($$payload) {
  $$payload.out += `<section class="py-20 bg-gradient-to-br from-aspen-gold-400 to-red-rocks-rust"><div class="max-w-6xl mx-auto px-6"><div class="grid lg:grid-cols-2 gap-12 items-center"><div class="text-granite-gray-800 space-y-6"><h2 class="font-display text-3xl md:text-4xl font-bold">Ready to work with people who actually get it?</h2> <p class="text-lg">We're not just another marketing agency. We're Colorado natives who've walked in your shoes, served your customers, and built businesses in this state.</p> <div class="flex items-center space-x-4"><img src="/images/logo/weknowco-icon.svg" alt="" class="w-12 h-12"/> <div><p class="font-semibold">Born and raised in Colorado</p> <p class="text-granite-gray-700 text-sm">We know how to speak its language</p></div></div></div> <div class="bg-white/95 backdrop-blur-sm rounded-xl shadow-xl p-8"><div class="mb-6"><h3 class="font-display text-xl font-bold text-skyline-blue-600 mb-2">Start Your Colorado Story</h3> <p class="text-granite-gray-600 text-sm">Tell us about your business. Let's see how we can help you grow.</p></div> `;
  LeadCaptureWizard($$payload, {
    variant: "about",
    className: "about-wizard-simple"
  });
  $$payload.out += `<!----></div></div></div></section>`;
}
function TestimonialsSection($$payload, $$props) {
  push();
  const testimonials = [
    {
      quote: "Working with weKnowCO transformed our business. They didn't just build us a website - they helped us understand our customers and grow revenue by 300% in the first year.",
      author: "Sarah Mitchell",
      title: "Owner, Rocky Mountain Adventures",
      location: "Boulder, CO",
      result: "300% revenue growth"
    },
    {
      quote: "Finally, a marketing team that speaks our language. They understand Colorado businesses because they ARE Colorado business. No fancy jargon, just real results.",
      author: "Mike Torres",
      title: "CEO, Denver Craft Solutions",
      location: "Denver, CO",
      result: "2x lead generation"
    },
    {
      quote: "The $5,280 website package was exactly what we needed. Fixed price, no surprises, and delivered exactly on time. Our new site converts 5x better than the old one.",
      author: "Jessica Chen",
      title: "Founder, Colorado Wellness Co",
      location: "Fort Collins, CO",
      result: "5x conversion rate"
    }
  ];
  const each_array = ensure_array_like(testimonials);
  $$payload.out += `<section class="py-16 md:py-20 bg-gradient-to-br from-skyline-blue-50 to-aspen-gold-50 relative overflow-hidden"><div class="absolute inset-0 overflow-hidden"><div class="absolute top-20 right-20 w-64 h-64 bg-aspen-gold-100/30 rounded-full blur-3xl"></div> <div class="absolute bottom-20 left-20 w-48 h-48 bg-skyline-blue-100/30 rounded-full blur-3xl"></div></div> <div class="max-w-7xl mx-auto px-4 sm:px-6 relative z-10"><div class="text-center mb-12 md:mb-16"><div class="inline-flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6 shadow-lg"><svg class="w-5 h-5 mr-2 text-aspen-gold-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg> <span class="text-granite-gray-700 font-semibold text-sm uppercase tracking-wider">Client Success</span></div> <h2 class="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-skyline-blue-700 mb-4">What Colorado Businesses Say</h2> <p class="text-granite-gray-600 text-lg md:text-xl max-w-3xl mx-auto">Real results from real Colorado businesses. No fake reviews, no inflated numbers - just honest feedback from our clients.</p></div> <div class="grid md:grid-cols-3 gap-6 lg:gap-8"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let testimonial = each_array[$$index];
    BaseCard($$payload, {
      class: "p-6 lg:p-8 bg-white/90 backdrop-blur-sm shadow-xl border-2 border-white/50 hover:border-skyline-blue-300 transition-all duration-300 hover:-translate-y-2 group",
      children: ($$payload2) => {
        $$payload2.out += `<div class="space-y-6"><div class="relative"><svg class="w-8 h-8 text-aspen-gold-400 mb-4" fill="currentColor" viewBox="0 0 24 24"><path d="M14,17H17L19,13V7H13V13H16M6,17H9L11,13V7H5V13H8L6,17Z"></path></svg> <blockquote class="text-granite-gray-700 font-medium text-lg leading-relaxed">"${escape_html(testimonial.quote)}"</blockquote></div> <div class="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 p-4 rounded-lg"><div class="flex items-center"><svg class="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg> <span class="text-green-800 font-bold text-base">${escape_html(testimonial.result)}</span></div></div> <div class="border-t border-granite-gray-200 pt-6"><div class="flex items-center"><div class="w-12 h-12 bg-gradient-to-br from-skyline-blue-500 to-aspen-gold-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">${escape_html(testimonial.author.split(" ").map((n) => n[0]).join(""))}</div> <div><div class="font-semibold text-granite-gray-700">${escape_html(testimonial.author)}</div> <div class="text-granite-gray-600 text-sm">${escape_html(testimonial.title)}</div> <div class="text-granite-gray-500 text-sm flex items-center"><svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 24 24"><path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z"></path></svg> ${escape_html(testimonial.location)}</div></div></div></div></div>`;
      },
      $$slots: { default: true }
    });
  }
  $$payload.out += `<!--]--></div> <div class="mt-12 md:mt-16">`;
  BaseCard($$payload, {
    class: "p-8 bg-white/90 backdrop-blur-sm shadow-xl border-2 border-skyline-blue-200",
    children: ($$payload2) => {
      $$payload2.out += `<div class="text-center"><h3 class="font-display text-2xl font-bold text-skyline-blue-700 mb-6">Trusted by Colorado Businesses Since 2018</h3> <div class="grid grid-cols-2 md:grid-cols-4 gap-8 items-center"><div class="text-center"><div class="text-3xl font-bold text-aspen-gold-600 mb-2">50+</div> <div class="text-granite-gray-600 text-sm">Colorado Businesses Served</div></div> <div class="text-center"><div class="text-3xl font-bold text-skyline-blue-600 mb-2">$2M+</div> <div class="text-granite-gray-600 text-sm">Revenue Generated for Clients</div></div> <div class="text-center"><div class="text-3xl font-bold text-green-600 mb-2">4.9★</div> <div class="text-granite-gray-600 text-sm">Average Client Rating</div></div> <div class="text-center"><div class="text-3xl font-bold text-red-rocks-rust mb-2">100%</div> <div class="text-granite-gray-600 text-sm">Client Retention Rate</div></div></div></div>`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div></div></section>`;
  pop();
}
function _page($$payload) {
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>About Us | weKnowCO | Born and Raised Colorado Marketing</title>`;
    $$payload2.out += `<meta name="description" content="We've been building together since high school. From selling sunglasses to serving Fortune 500s, we know Colorado businesses because we are Colorado business."/>`;
  });
  AboutStats($$payload);
  $$payload.out += `<!----> `;
  AboutLetter($$payload);
  $$payload.out += `<!----> `;
  TestimonialsSection($$payload);
  $$payload.out += `<!----> `;
  AboutCTA($$payload);
  $$payload.out += `<!---->`;
}
export {
  _page as default
};
