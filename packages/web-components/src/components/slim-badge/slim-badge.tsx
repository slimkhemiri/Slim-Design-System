import { Component, Prop, h, Host } from "@stencil/core";

@Component({
  tag: "slim-badge",
  styleUrl: "slim-badge.css",
  shadow: true
})
export class SlimBadge {
  @Prop() variant: "neutral" | "primary" | "success" | "warning" | "danger" = "neutral";
  @Prop() size: "sm" | "md" = "md";

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

