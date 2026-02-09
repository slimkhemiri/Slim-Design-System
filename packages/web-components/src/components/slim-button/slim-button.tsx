import { Component, Prop, h, Host } from "@stencil/core";

type Variant = "primary" | "secondary" | "danger" | "ghost";
type Size = "sm" | "md" | "lg";

@Component({
  tag: "slim-button",
  styleUrl: "slim-button.css",
  shadow: true
})
export class SlimButton {
  @Prop() variant: Variant = "primary";
  @Prop() size: Size = "md";
  @Prop() disabled = false;
  @Prop() loading = false;
  @Prop() type: "button" | "submit" | "reset" = "button";

  render() {
    return (
      <Host>
        <button
          class={`btn v-${this.variant} s-${this.size}`}
          type={this.type}
          disabled={this.disabled || this.loading}
        >
          <span class="content" aria-hidden={this.loading ? "true" : "false"}>
            <slot />
          </span>
          {this.loading ? (
            <span class="spinner" role="status" aria-label="Loading" />
          ) : null}
        </button>
      </Host>
    );
  }
}

