import { F as store_get, G as ensure_array_like, I as attr, J as attr_class, K as escape_html, M as stringify, N as unsubscribe_stores, E as pop, C as push, O as slot } from "../../chunks/index.js";
import { p as page } from "../../chunks/stores.js";
function Navigation($$payload, $$props) {
  push();
  var $$store_subs;
  let currentPath;
  const navItems = [
    { label: "Home", href: "/" },
    { label: "$5,280 Site", href: "/5280-site" },
    {
      label: "Plans & Growth",
      href: "/plans-growth"
    },
    {
      label: "Solo Biz Helper",
      href: "/solo-biz-helper",
      special: true
    },
    { label: "About", href: "/about" }
  ];
  currentPath = store_get($$store_subs ??= {}, "$page", page).url.pathname;
  const each_array = ensure_array_like(navItems);
  $$payload.out += `<nav class="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50"><div class="max-w-7xl mx-auto px-4 sm:px-6"><div class="flex justify-between items-center h-14 sm:h-16"><div class="flex items-center"><img src="/favicon.png" alt="" class="w-10 h-10 lg:w-12 lg:h-12 opacity-80 hover:opacity-100 transition-opacity duration-200"/></div> <div class="hidden md:flex items-center space-x-8"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let item = each_array[$$index];
    $$payload.out += `<a${attr("href", item.href)}${attr_class(`text-granite-gray-600 hover:text-skyline-blue-600 transition-colors font-medium ${stringify(currentPath === item.href ? "text-skyline-blue-600 font-semibold" : "")} ${stringify(item.special ? "text-red-rocks-rust hover:text-red-rocks-rust/80" : "")}`)}>${escape_html(item.label)}</a>`;
  }
  $$payload.out += `<!--]--></div> <div class="hidden md:flex items-center"><a href="/contact" class="bg-skyline-blue-600 text-white px-4 py-2 lg:px-6 lg:py-2 rounded-lg hover:bg-skyline-blue-700 transition-colors font-semibold text-sm lg:text-base">Start Your Climb</a></div> <button class="md:hidden p-1.5 sm:p-2" aria-label="Toggle menu"><svg class="w-5 h-5 sm:w-6 sm:h-6 text-granite-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">`;
  {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>`;
  }
  $$payload.out += `<!--]--></svg></button></div> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div></nav>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function Footer($$payload, $$props) {
  push();
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const footerLinks = {
    services: [
      { label: "$5,280 Website", href: "/5280-site" },
      { label: "Monthly Plans", href: "/plans-growth" },
      {
        label: "Solo Biz Helper",
        href: "/solo-biz-helper"
      }
    ],
    company: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" }
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" }
    ]
  };
  const each_array = ensure_array_like(footerLinks.services);
  const each_array_1 = ensure_array_like(footerLinks.company);
  const each_array_2 = ensure_array_like(footerLinks.legal);
  $$payload.out += `<footer class="bg-gradient-to-br from-granite-gray-800 to-skyline-blue-900 text-white relative overflow-hidden"><div class="absolute inset-0 opacity-5"><div class="absolute top-0 left-0 w-96 h-96"><img src="/favicon.svg" alt="" class="w-full h-full"/></div> <div class="absolute bottom-0 right-0 w-64 h-64"><img src="/images/logo/weknowco-icon.svg" alt="" class="w-full h-full"/></div></div> <div class="relative max-w-7xl mx-auto px-6 py-16"><div class="grid grid-cols-1 md:grid-cols-4 gap-12"><div class="md:col-span-1"><div class="flex items-center mb-6"><img src="/images/logo/weknowco-full-logo.png" alt="weKnowCO" class="h-12 w-auto brightness-0 invert"/></div> <p class="text-white/80 mb-6">Colorado's digital marketing partner. Turning mile-high dreams into thriving brands.</p> <div class="flex items-center space-x-3 text-aspen-gold-400"><img src="/favicon.svg" alt="" class="w-6 h-6"/> <span class="font-mono text-sm">Elevation: 5,280ft</span></div></div> <div><h3 class="font-semibold text-lg mb-4 text-aspen-gold-400">Services</h3> <ul class="space-y-3"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let link = each_array[$$index];
    $$payload.out += `<li><a${attr("href", link.href)} class="text-white/80 hover:text-white transition-colors flex items-center group"><span class="w-1 h-1 bg-aspen-gold-400 rounded-full mr-2 group-hover:w-2 transition-all"></span> ${escape_html(link.label)}</a></li>`;
  }
  $$payload.out += `<!--]--></ul></div> <div><h3 class="font-semibold text-lg mb-4 text-aspen-gold-400">Company</h3> <ul class="space-y-3"><!--[-->`;
  for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
    let link = each_array_1[$$index_1];
    $$payload.out += `<li><a${attr("href", link.href)} class="text-white/80 hover:text-white transition-colors flex items-center group"><span class="w-1 h-1 bg-aspen-gold-400 rounded-full mr-2 group-hover:w-2 transition-all"></span> ${escape_html(link.label)}</a></li>`;
  }
  $$payload.out += `<!--]--></ul></div> <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"><div class="flex justify-center mb-4"><img src="/images/logo/weknowco-icon.svg" alt="" class="w-16 h-16"/></div> <h3 class="font-semibold text-lg mb-2 text-center">Ready to Climb?</h3> <p class="text-white/80 text-sm mb-4 text-center">Start your journey to mile-high success.</p> <a href="/contact" class="block bg-aspen-gold-400 text-granite-gray-800 px-6 py-3 rounded-lg hover:bg-aspen-gold-500 transition-colors font-semibold text-center">Get Started Today</a></div></div> <div class="border-t border-white/20 mt-12 pt-8"><div class="flex flex-col md:flex-row justify-between items-center gap-4"><div class="flex items-center space-x-2 text-white/60 text-sm"><span>© ${escape_html(currentYear)} weKnowCO.</span> <span>•</span> <span>Made with</span> <img src="/favicon.svg" alt="love" class="w-4 h-4 inline"/> <span>in Colorado</span></div> <div class="flex items-center space-x-6"><!--[-->`;
  for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
    let link = each_array_2[$$index_2];
    $$payload.out += `<a${attr("href", link.href)} class="text-white/60 hover:text-white text-sm transition-colors">${escape_html(link.label)}</a>`;
  }
  $$payload.out += `<!--]--></div></div></div></div></footer>`;
  pop();
}
function _layout($$payload, $$props) {
  $$payload.out += `<div class="min-h-screen bg-snowfield-white flex flex-col">`;
  Navigation($$payload);
  $$payload.out += `<!----> <main class="flex-grow"><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></main> `;
  Footer($$payload);
  $$payload.out += `<!----></div>`;
}
export {
  _layout as default
};
