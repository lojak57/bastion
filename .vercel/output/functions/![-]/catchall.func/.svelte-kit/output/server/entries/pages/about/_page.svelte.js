import { G as ensure_array_like, K as escape_html, S as head } from "../../../chunks/index.js";
import "clsx";
import { L as LeadCaptureWizard } from "../../../chunks/LeadCaptureWizard.js";
import "../../../chunks/WizardContainer.js";
/* empty css                                                         */
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
function _page($$payload) {
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>About Us | weKnowCO | Born and Raised Colorado Marketing</title>`;
    $$payload2.out += `<meta name="description" content="We've been building together since high school. From selling sunglasses to serving Fortune 500s, we know Colorado businesses because we are Colorado business."/>`;
  });
  AboutStats($$payload);
  $$payload.out += `<!----> `;
  AboutLetter($$payload);
  $$payload.out += `<!----> `;
  AboutCTA($$payload);
  $$payload.out += `<!---->`;
}
export {
  _page as default
};
