import { Component, Event, EventEmitter, Prop, h } from "@stencil/core";

@Component({
  tag: "slim-modal",
  styleUrl: "slim-alert.css",
  shadow: true
})
export class SlimModal {
  /** Whether the modal is open */
  @Prop() open = false;
  /** Optional modal title */
  @Prop() heading?: string;

  /** Fired when the user requests closing the modal (backdrop click / close button / ESC) */
  @Event() slimClose!: EventEmitter<void>;

  private onBackdropClick = (e: MouseEvent) => {
    if (e.target === e.currentTarget) this.slimClose.emit();
  };

  private onKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") this.slimClose.emit();
  };

  render() {
    if (!this.open) return null;
    return (
      <div class="backdrop" onClick={this.onBackdropClick} onKeyDown={this.onKeyDown} tabindex={-1}>
        <div class="dialog" role="dialog" aria-modal="true" aria-label={this.heading ?? "Dialog"}>
          <div class="header">
            {this.heading ? <div class="heading">{this.heading}</div> : <div />}
            <button class="close" type="button" onClick={() => this.slimClose.emit()} aria-label="Close dialog">
              ×
            </button>
          </div>
          <div class="body">
            <slot />
          </div>
        </div>
      </div>
    );
  }
}

