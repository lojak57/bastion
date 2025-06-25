import { S as head } from "../../../../chunks/index.js";
/* empty css                                                            */
import { B as BaseCard } from "../../../../chunks/BaseCard.js";
function _page($$payload) {
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Terms of Service | weKnowCO</title>`;
    $$payload2.out += `<meta name="description" content="weKnowCO's terms of service outline the rules and regulations for using our website and services."/>`;
  });
  $$payload.out += `<div class="min-h-screen bg-snowfield-white py-16"><div class="max-w-4xl mx-auto px-6">`;
  BaseCard($$payload, {
    class: "p-8 lg:p-12",
    children: ($$payload2) => {
      $$payload2.out += `<h1 class="font-display text-3xl lg:text-4xl font-bold text-skyline-blue-700 mb-8">Terms of Service</h1> <div class="prose prose-lg max-w-none"><p class="text-granite-gray-600 mb-6"><strong>Effective Date:</strong> June 25, 2025</p> <h2 class="font-display text-2xl font-semibold text-skyline-blue-600 mt-8 mb-4">Acceptance of Terms</h2> <p class="text-granite-gray-700 mb-4">By accessing and using weKnowCO's website and services, you accept and agree to be bound by the terms and provision of this agreement.</p> <h2 class="font-display text-2xl font-semibold text-skyline-blue-600 mt-8 mb-4">Services</h2> <p class="text-granite-gray-700 mb-4">weKnowCO provides digital marketing, web development, and business consulting services. All services are provided "as is" and we reserve the right to modify or discontinue services at any time.</p> <h2 class="font-display text-2xl font-semibold text-skyline-blue-600 mt-8 mb-4">Payment Terms</h2> <ul class="text-granite-gray-700 mb-4 list-disc pl-6"><li>Payment is due according to the terms specified in your service agreement</li> <li>Late payments may incur additional fees</li> <li>Refunds are handled according to our refund policy</li> <li>All prices are in USD unless otherwise specified</li></ul> <h2 class="font-display text-2xl font-semibold text-skyline-blue-600 mt-8 mb-4">Intellectual Property</h2> <p class="text-granite-gray-700 mb-4">The content, organization, graphics, design, and other matters related to weKnowCO are protected under applicable copyrights and other proprietary laws.</p> <h2 class="font-display text-2xl font-semibold text-skyline-blue-600 mt-8 mb-4">Limitation of Liability</h2> <p class="text-granite-gray-700 mb-4">weKnowCO shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.</p> <h2 class="font-display text-2xl font-semibold text-skyline-blue-600 mt-8 mb-4">Contact Information</h2> <div class="bg-skyline-blue-50 p-4 rounded-lg"><p class="text-granite-gray-700"><strong>weKnowCO</strong><br/> Email: hello@weknowco.com<br/> Denver, Colorado</p></div></div>`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div></div>`;
}
export {
  _page as default
};
