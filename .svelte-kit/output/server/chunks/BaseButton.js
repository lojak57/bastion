import { P as fallback, I as attr, J as attr_class, X as clsx, O as slot, Q as bind_props, E as pop, C as push } from "./index.js";
/* empty css                                           */
function BaseButton($$payload, $$props) {
  push();
  let isLink, buttonClasses;
  let variant = fallback($$props["variant"], "primary");
  let size = fallback($$props["size"], "md");
  let disabled = fallback($$props["disabled"], false);
  let loading = fallback($$props["loading"], false);
  let href = fallback($$props["href"], void 0);
  let type = fallback($$props["type"], "button");
  let fullWidth = fallback($$props["fullWidth"], false);
  let icon = fallback($$props["icon"], false);
  let className = fallback($$props["class"], "");
  isLink = href !== void 0;
  buttonClasses = [
    "base-button",
    `variant-${variant}`,
    `size-${size}`,
    disabled && "disabled",
    loading && "loading",
    fullWidth && "full-width",
    icon && "icon-only",
    className
  ].filter(Boolean).join(" ");
  if (isLink) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<a${attr("href", href)}${attr_class(clsx(buttonClasses), "svelte-1povff5")} role="button"${attr("tabindex", disabled ? -1 : 0)}${attr("aria-disabled", disabled)}>`;
    if (loading) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<span class="loading-spinner svelte-1povff5" aria-hidden="true"></span>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> <span${attr_class("button-content svelte-1povff5", void 0, { "sr-only": loading })}><!---->`;
    slot($$payload, $$props, "default", {});
    $$payload.out += `<!----></span></a>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<button${attr_class(clsx(buttonClasses), "svelte-1povff5")}${attr("type", type)}${attr("disabled", disabled, true)}${attr("aria-disabled", disabled)}>`;
    if (loading) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<span class="loading-spinner svelte-1povff5" aria-hidden="true"></span>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> <span${attr_class("button-content svelte-1povff5", void 0, { "sr-only": loading })}><!---->`;
    slot($$payload, $$props, "default", {});
    $$payload.out += `<!----></span></button>`;
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, {
    variant,
    size,
    disabled,
    loading,
    href,
    type,
    fullWidth,
    icon,
    class: className
  });
  pop();
}
export {
  BaseButton as B
};
