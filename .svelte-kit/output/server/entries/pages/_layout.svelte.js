import { D as store_get, E as ensure_array_like, F as attr, G as attr_class, I as escape_html, J as stringify, K as unsubscribe_stores, C as pop, z as push, M as slot } from "../../chunks/index.js";
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
    { label: "Case Stories", href: "/case-stories" },
    { label: "About", href: "/about" }
  ];
  currentPath = store_get($$store_subs ??= {}, "$page", page).url.pathname;
  const each_array = ensure_array_like(navItems);
  $$payload.out += `<nav class="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50"><div class="max-w-7xl mx-auto px-6"><div class="flex justify-between items-center h-16"><a href="/" class="flex items-center space-x-2"><div class="w-8 h-8 bg-gradient-to-br from-skyline-blue-600 to-aspen-gold-400 rounded-lg flex items-center justify-center"><span class="text-white font-bold text-sm">W</span></div> <span class="font-display font-bold text-xl text-skyline-blue-600">weKnowCO</span></a> <div class="hidden md:flex items-center space-x-8"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let item = each_array[$$index];
    $$payload.out += `<a${attr("href", item.href)}${attr_class(`text-granite-gray-600 hover:text-skyline-blue-600 transition-colors font-medium ${stringify(currentPath === item.href ? "text-skyline-blue-600 font-semibold" : "")} ${stringify(item.special ? "text-red-rocks-rust hover:text-red-rocks-rust/80" : "")}`)}>${escape_html(item.label)}</a>`;
  }
  $$payload.out += `<!--]--></div> <div class="hidden md:block"><a href="/contact" class="bg-skyline-blue-600 text-white px-6 py-2 rounded-lg hover:bg-skyline-blue-700 transition-colors font-semibold">Start Your Climb</a></div> <button class="md:hidden p-2" aria-label="Toggle menu"><svg class="w-6 h-6 text-granite-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">`;
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
function _layout($$payload, $$props) {
  $$payload.out += `<div class="min-h-screen bg-snowfield-white">`;
  Navigation($$payload);
  $$payload.out += `<!----> <!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></div>`;
}
export {
  _layout as default
};
