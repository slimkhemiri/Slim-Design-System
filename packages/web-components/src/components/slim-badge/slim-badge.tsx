import { Component, Prop, h, Host } from "@stencil/core";

type Variant = "neutral" | "primary" | "success" | "warning" | "danger";
type Size = "sm" | "md";

@Component({
  tag: "slim-badge",
  styleUrl: "slim-badge.css",
  shadow: true
})
export class SlimBadge {
  @Prop() variant: Variant = "neutral";
  @Prop() size: Size = "md";

  render() {
    return (
      <Host>
        <span class={`badge v-${this.variant} s-${this.size}`}>
          <slot />
        </span>
      </Host>
    );
  }
}

