import { S as head } from "../../../../chunks/index.js";
import { B as BaseButton } from "../../../../chunks/BaseButton.js";
import { B as BaseCard } from "../../../../chunks/BaseCard.js";
/* empty css                                                            */
function _page($$payload) {
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Thank You | weKnowCO</title>`;
    $$payload2.out += `<meta name="description" content="Thanks for reaching out! We'll be in touch within 24 hours to start planning your climb."/> <meta name="robots" content="noindex"/>`;
  });
  $$payload.out += `<div class="min-h-screen bg-snowfield-white flex items-center justify-center py-12"><div class="max-w-2xl mx-auto px-6 text-center">`;
  BaseCard($$payload, {
    class: "p-12",
    children: ($$payload2) => {
      $$payload2.out += `<div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"><svg class="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></div> <h1 class="wkc-heading text-3xl md:text-4xl font-bold text-skyline-blue-600 mb-4">Thanks for Reaching Out!</h1> <p class="text-lg text-granite-gray-600 mb-8">We've received your message and are excited to help turn your Colorado dream into a mile-high brand. 
				We'll be in touch within 24 hours to start planning your climb.</p> <div class="bg-aspen-gold-50 rounded-lg p-6 mb-8"><h3 class="wkc-heading text-lg font-semibold text-granite-gray-700 mb-2">While you wait...</h3> <p class="text-granite-gray-600 mb-4">Download our free Colorado Marketing Checklist to start optimizing your business for local success.</p> `;
      BaseButton($$payload2, {
        variant: "secondary",
        href: "/downloads/colorado-marketing-checklist.pdf",
        target: "_blank",
        class: "bg-aspen-gold-400 text-granite-gray-700 hover:bg-aspen-gold-500",
        children: ($$payload3) => {
          $$payload3.out += `<!---->Download Free Checklist <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----></div> <div class="text-sm text-granite-gray-500 mb-8"><p>Questions in the meantime? Reach us at:</p> <p><a href="mailto:hello@weknowco.com" class="text-skyline-blue-600 hover:text-skyline-blue-700">hello@weknowco.com</a> • <a href="tel:+1-720-555-5280" class="text-skyline-blue-600 hover:text-skyline-blue-700">(720) 555-5280</a></p></div> <div class="flex flex-col sm:flex-row gap-4 justify-center">`;
      BaseButton($$payload2, {
        variant: "outline",
        href: "/",
        class: "btn-outline",
        children: ($$payload3) => {
          $$payload3.out += `<!---->Back to Home`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      BaseButton($$payload2, {
        variant: "outline",
        href: "/case-stories",
        class: "btn-outline",
        children: ($$payload3) => {
          $$payload3.out += `<!---->View Our Work`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----></div>`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div></div>`;
}
export {
  _page as default
};
