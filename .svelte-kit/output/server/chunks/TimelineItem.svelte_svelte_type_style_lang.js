import { O as fallback, F as attr, G as attr_class, W as attr_style, X as clsx, M as slot, P as bind_props, C as pop, z as push, J as stringify } from "./index.js";
function BaseCard($$payload, $$props) {
  push();
  let isLink, isInteractive, cardClasses;
  let variant = fallback($$props["variant"], "hero");
  let accent = fallback($$props["accent"], "var(--color-primary)");
  let clickable = fallback($$props["clickable"], true);
  let href = fallback($$props["href"], void 0);
  let loading = fallback($$props["loading"], false);
  let elevated = fallback($$props["elevated"], false);
  let padding = fallback($$props["padding"], "md");
  let className = fallback($$props["class"], "");
  isLink = href !== void 0;
  isInteractive = clickable || isLink;
  cardClasses = [
    "base-card",
    `variant-${variant}`,
    `padding-${padding}`,
    isInteractive && "interactive",
    elevated && "elevated",
    className,
    loading && "loading"
  ].filter(Boolean).join(" ");
  if (isLink) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<a${attr("href", href)}${attr_class(clsx(cardClasses), "svelte-f7fe7m")}${attr_style(`--accent-color: ${stringify(accent)}`)} role="button" tabindex="0">`;
    if (loading) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<div class="loading-overlay svelte-f7fe7m"><div class="skeleton skeleton-card svelte-f7fe7m"></div></div>`;
    } else {
      $$payload.out += "<!--[!-->";
      $$payload.out += `<!---->`;
      slot($$payload, $$props, "default", {});
      $$payload.out += `<!---->`;
    }
    $$payload.out += `<!--]--></a>`;
  } else if (isInteractive) {
    $$payload.out += "<!--[1-->";
    $$payload.out += `<button${attr_class(clsx(cardClasses), "svelte-f7fe7m")}${attr_style(`--accent-color: ${stringify(accent)}`)}>`;
    if (loading) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<div class="loading-overlay svelte-f7fe7m"><div class="skeleton skeleton-card svelte-f7fe7m"></div></div>`;
    } else {
      $$payload.out += "<!--[!-->";
      $$payload.out += `<!---->`;
      slot($$payload, $$props, "default", {});
      $$payload.out += `<!---->`;
    }
    $$payload.out += `<!--]--></button>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<div${attr_class(clsx(cardClasses), "svelte-f7fe7m")}${attr_style(`--accent-color: ${stringify(accent)}`)}>`;
    if (loading) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<div class="loading-overlay svelte-f7fe7m"><div class="skeleton skeleton-card svelte-f7fe7m"></div></div>`;
    } else {
      $$payload.out += "<!--[!-->";
      $$payload.out += `<!---->`;
      slot($$payload, $$props, "default", {});
      $$payload.out += `<!---->`;
    }
    $$payload.out += `<!--]--></div>`;
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, {
    variant,
    accent,
    clickable,
    href,
    loading,
    elevated,
    padding,
    class: className
  });
  pop();
}
export {
  BaseCard as B
};
