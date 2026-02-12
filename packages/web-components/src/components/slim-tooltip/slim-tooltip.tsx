import {
  Component,
  Event,
  EventEmitter,
  Host,
  Prop,
  State,
  Watch,
  h
} from "@stencil/core";
import { createId } from "../../utils/id";

type Placement = "top" | "bottom" | "left" | "right";

@Component({
  tag: "slim-tooltip",
  styleUrl: "slim-tooltip.css",
  shadow: true
})
export class SlimTooltip extends HTMLElement {
  /** Tooltip text. If omitted, the default slot is used as tooltip content. */
  @Prop() text?: string;

  /** Where the tooltip appears relative to the trigger. */
  @Prop({ reflect: true }) placement: Placement = "top";

  /** Pixel offset between trigger and tooltip bubble. */
  @Prop() offset = 8;

  /** Max width of the tooltip bubble, in pixels. */
  @Prop() maxWidth = 240;

  /** Disables showing the tooltip via interactions. */
  @Prop({ reflect: true }) disabled = false;

  /** Controls tooltip visibility. Can be toggled by hover/focus by default. */
  @Prop({ reflect: true, mutable: true }) open = false;

  @Event() slimShow!: EventEmitter<void>;
  @Event() slimHide!: EventEmitter<void>;

  @State() private _id = "";

  private triggerSlotEl?: HTMLSlotElement;

  componentWillLoad() {
    this._id = createId("slim-tooltip");
  }

  componentDidLoad() {
    this.syncAriaDescribedBy();
  }

  @Watch("disabled")
  protected onDisabledChanged(next: boolean) {
    if (next) this.open = false;
    this.syncAriaDescribedBy();
  }

  private setOpen(next: boolean) {
    if (this.disabled) return;
    if (this.open === next) return;
    this.open = next;
    if (next) this.slimShow.emit();
    else this.slimHide.emit();
  }

  private onMouseEnter = () => this.setOpen(true);
  private onMouseLeave = () => this.setOpen(false);
  private onFocusIn = () => this.setOpen(true);
  private onFocusOut = () => this.setOpen(false);

  private onKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") this.setOpen(false);
  };

  private syncAriaDescribedBy = () => {
    const slot = this.triggerSlotEl;
    if (!slot) return;

    const triggers = slot.assignedElements({ flatten: true }) as HTMLElement[];
    for (const t of triggers) {
      const prev = (t.getAttribute("aria-describedby") ?? "")
        .split(/\s+/)
        .filter(Boolean);
      const next = Array.from(new Set([...prev.filter((id) => id !== this._id), this._id]));

      if (this.disabled) {
        const removed = prev.filter((id) => id !== this._id);
        if (removed.length) t.setAttribute("aria-describedby", removed.join(" "));
        else t.removeAttribute("aria-describedby");
      } else {
        t.setAttribute("aria-describedby", next.join(" "));
      }
    }
  };

  private onTriggerSlotChange = (e: Event) => {
    this.triggerSlotEl = e.target as HTMLSlotElement;
    this.syncAriaDescribedBy();
  };

  render() {
    const isOpen = this.open && !this.disabled;
    const style: Record<string, string> = {
      "--slim-tooltip-offset": `${this.offset}px`,
      "--slim-tooltip-max-width": `${this.maxWidth}px`
    };

    return (
      <Host
        style={style}
        onKeyDown={this.onKeyDown}
      >
        <span
          class="trigger"
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
          onFocusin={this.onFocusIn}
          onFocusout={this.onFocusOut}
        >
          <slot name="trigger" onSlotchange={this.onTriggerSlotChange} />
        </span>

        <div
          id={this._id}
          class="tooltip"
          role="tooltip"
          aria-hidden={isOpen ? "false" : "true"}
        >
          <div class="bubble">
            {this.text != null ? this.text : <slot />}
          </div>
        </div>
      </Host>
    );
  }
}

