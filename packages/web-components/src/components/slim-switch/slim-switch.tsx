import { Component, Event, EventEmitter, Prop, State, h } from "@stencil/core";

@Component({
  tag: "slim-switch",
  styleUrl: "slim-switch.css",
  shadow: true
})
export class SlimSwitch {
  @Prop() label?: string;
  @Prop() hint?: string;
  @Prop() error?: string;

  @Prop() name?: string;
  @Prop({ mutable: true }) checked = false;
  @Prop() disabled = false;
  @Prop() required = false;
  @Prop() switchId?: string;

  @Event() slimChange!: EventEmitter<boolean>;

  @State() private _id = "";

  componentWillLoad() {
    this._id = this.switchId ?? `slim-switch-${Math.random().toString(16).slice(2)}`;
  }

  private onChange = (e: Event) => {
    const v = (e.target as HTMLInputElement).checked;
    this.checked = v;
    this.slimChange.emit(v);
  };

  render() {
    const hintId = this.hint ? `${this._id}-hint` : null;
    const errorId = this.error ? `${this._id}-error` : null;
    const describedBy = [hintId, errorId].filter(Boolean).join(" ");

    return (
      <div class="field">
        <label class={`row ${this.disabled ? "isDisabled" : ""}`} htmlFor={this._id}>
          <input
            id={this._id}
            class="native"
            type="checkbox"
            role="switch"
            name={this.name}
            checked={this.checked}
            disabled={this.disabled}
            required={this.required}
            aria-invalid={this.error ? "true" : "false"}
            aria-describedby={describedBy || undefined}
            onChange={this.onChange}
          />
          <span class="track" aria-hidden="true">
            <span class="thumb" />
          </span>
          <span class="label">{this.label ? this.label : <slot />}</span>
        </label>

        {this.hint ? (
          <div id={hintId!} class="hint">
            {this.hint}
          </div>
        ) : null}

        {this.error ? (
          <div id={errorId!} class="error" role="alert">
            {this.error}
          </div>
        ) : null}
      </div>
    );
  }
}

