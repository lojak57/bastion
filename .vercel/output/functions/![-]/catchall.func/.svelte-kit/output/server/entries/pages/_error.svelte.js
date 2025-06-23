import { F as store_get, K as escape_html, N as unsubscribe_stores, E as pop, C as push } from "../../chunks/index.js";
import { p as page } from "../../chunks/stores.js";
import { B as BaseButton } from "../../chunks/BaseButton.js";
/* empty css                                                      */
function _error($$payload, $$props) {
  push();
  var $$store_subs;
  $$payload.out += `<div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-skyline-blue-50 to-aspen-gold-50 relative overflow-hidden svelte-9woes2"><div class="absolute inset-0 opacity-10 svelte-9woes2"><img src="/images/logo/weknowco-icon.svg" alt="" class="absolute top-10 left-10 w-32 h-32 animate-float-slow svelte-9woes2"/> <img src="/favicon.svg" alt="" class="absolute bottom-20 right-20 w-24 h-24 animate-float-delayed svelte-9woes2"/> <img src="/images/logo/weknowco-icon.svg" alt="" class="absolute top-1/3 right-1/3 w-20 h-20 animate-float-reverse svelte-9woes2"/></div> <div class="relative z-10 max-w-2xl mx-auto px-6 text-center svelte-9woes2"><div class="relative mb-8 svelte-9woes2"><h1 class="font-display text-9xl md:text-[12rem] font-bold text-skyline-blue-600/20 svelte-9woes2">404</h1> <div class="absolute inset-0 flex items-center justify-center svelte-9woes2"><img src="/images/logo/weknowco-icon.svg" alt="weKnowCO" class="w-32 h-32 md:w-48 md:h-48 opacity-80 svelte-9woes2"/></div></div> <h2 class="font-display text-3xl md:text-4xl font-bold text-skyline-blue-600 mb-4 svelte-9woes2">Looks like you've wandered off the trail</h2> <p class="text-lg text-granite-gray-600 mb-8 max-w-lg mx-auto svelte-9woes2">`;
  if (store_get($$store_subs ??= {}, "$page", page).status === 404) {
    $$payload.out += "<!--[-->";
    $$payload.out += `The page you're looking for has gone hiking in the Rockies. Let's get you back on track.`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `Something went wrong at elevation ${escape_html(store_get($$store_subs ??= {}, "$page", page).status || "5,280")}ft. Don't worry, we'll help you find your way.`;
  }
  $$payload.out += `<!--]--></p> <div class="flex flex-col sm:flex-row gap-4 justify-center items-center svelte-9woes2">`;
  BaseButton($$payload, {
    href: "/",
    size: "lg",
    variant: "primary",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Return to Base Camp`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  BaseButton($$payload, {
    href: "/contact",
    size: "lg",
    variant: "outline",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Get Help`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div> <div class="mt-12 inline-flex items-center text-granite-gray-500 text-sm svelte-9woes2"><img src="/favicon.svg" alt="" class="w-6 h-6 mr-2 opacity-60 svelte-9woes2"/> <span class="svelte-9woes2">Currently lost at elevation: ${escape_html(store_get($$store_subs ??= {}, "$page", page).status || "404")}ft</span></div></div></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _error as default
};
