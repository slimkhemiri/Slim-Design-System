import { Component, Prop, h } from "@stencil/core";

type Variant = "info" | "success" | "warning" | "danger";

@Component({
  tag: "slim-alert",
  styleUrl: "slim-alert.css",
  shadow: true
})
export class SlimAlert {
  @Prop() variant: Variant = "info";
  @Prop() heading?: string;

  render() {
    const role = this.variant === "danger" || this.variant === "warning" ? "alert" : "status";

    return (
      <div class={`root v-${this.variant}`} role={role}>
        <div class="content">
          {this.heading ? <div class="heading">{this.heading}</div> : null}
          <div class="body">
            <slot />
          </div>
        </div>
      </div>
    );
  }
}

