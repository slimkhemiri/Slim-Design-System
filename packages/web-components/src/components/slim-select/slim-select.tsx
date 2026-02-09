import { Component, Event, EventEmitter, Prop, State, h } from "@stencil/core";

type Option = { value: string; label: string; disabled?: boolean };

@Component({
  tag: "slim-select",
  styleUrl: "slim-select.css",
  shadow: true
})
export class SlimSelect {
  @Prop() label?: string;
  @Prop() hint?: string;
  @Prop() error?: string;

  @Prop() name?: string;
  @Prop({ mutable: true }) value = "";
  @Prop() options: Option[] = [];
  @Prop() disabled = false;
  @Prop() required = false;
  @Prop() selectId?: string;

  @Event() slimChange!: EventEmitter<string>;

  @State() private _id = "";

  componentWillLoad() {
    this._id = this.selectId ?? `slim-select-${Math.random().toString(16).slice(2)}`;
  }

  private onChange = (e: Event) => {
    const v = (e.target as HTMLSelectElement).value;
    this.value = v;
    this.slimChange.emit(v);
  };

  render() {
    const hintId = this.hint ? `${this._id}-hint` : null;
    const errorId = this.error ? `${this._id}-error` : null;
    const describedBy = [hintId, errorId].filter(Boolean).join(" ");

    return (
      <div class="field">
        {this.label ? (
          <label class="label" htmlFor={this._id}>
            {this.label}
            {this.required ? (
              <span class="req" aria-hidden="true">
                {" "}
                *
              </span>
            ) : null}
          </label>
        ) : null}

        <select
          id={this._id}
          class={`control ${this.error ? "hasError" : ""}`}
          name={this.name}
          disabled={this.disabled}
          required={this.required}
          aria-invalid={this.error ? "true" : "false"}
          aria-describedby={describedBy || undefined}
          onChange={this.onChange}
        >
          {this.options.map((o) => (
            <option value={o.value} disabled={o.disabled} selected={o.value === this.value}>
              {o.label}
            </option>
          ))}
          <slot />
        </select>

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

