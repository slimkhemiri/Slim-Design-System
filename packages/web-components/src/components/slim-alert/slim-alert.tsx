import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "slim-alert",
  styleUrl: "slim-alert.css",
  shadow: true
})
export class SlimAlert {
  @Prop() variant: "info" | "success" | "warning" | "danger" = "info";
  @Prop() heading?: string;

  render() {
    const role =
      this.variant === "danger" || this.variant === "warning"
        ? "alert"
        : "status";
  
    const ariaLive = role === "alert" ? "assertive" : "polite";
  
    return (
      <div
        class={`root v-${this.variant}`}
        role={role}
        aria-live={ariaLive}
        aria-labelledby={this.heading ? "alert-heading" : null}
      >
        <div class="content">
          {this.heading ? (
            <div id="alert-heading" class="heading">
              {this.heading}
            </div>
          ) : null}
  
          <div class="body">
            <slot />
          </div>
        </div>
      </div>
    );
  }
}

