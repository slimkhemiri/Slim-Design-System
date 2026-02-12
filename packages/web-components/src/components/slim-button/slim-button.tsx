import { Component, Prop, h, Host } from "@stencil/core";

@Component({
  tag: "slim-button",
  styleUrl: "slim-button.css",
  shadow: true
})
export class SlimButton {
  @Prop() variant: "primary" | "secondary" | "danger" | "ghost" = "primary";
  @Prop() size: "sm" | "md" | "lg" = "md";
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
            <span class="spinner" role="status" aria-live="polite" aria-label="Loading" />
          ) : null}
        </button>
      </Host>
    );
  }
}

