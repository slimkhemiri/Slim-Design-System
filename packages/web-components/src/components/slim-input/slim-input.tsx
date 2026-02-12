import { Component, Event, EventEmitter, Prop, State, h } from "@stencil/core";
import { createId } from "../../utils/id";

@Component({
  tag: "slim-input",
  styleUrl: "slim-input.css",
  shadow: true
})
export class SlimInput {
  @Prop() label?: string;
  @Prop() hint?: string;
  @Prop() error?: string;

  @Prop() name?: string;
  @Prop({ mutable: true }) value = "";
  @Prop() type: "text" | "email" | "password" | "tel" | "number" = "text";
  @Prop() disabled = false;
  @Prop() required = false;
  @Prop() autocomplete?: string;
  @Prop() inputId?: string;

  @Event() slimChange!: EventEmitter<string>;

  @State() private _id = "";

  componentWillLoad() {
    this._id = this.inputId ?? createId("slim-input");
  }

  private onInput = (e: Event) => {
    const v = (e.target as HTMLInputElement).value;
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

        <input
          id={this._id}
          class={`input ${this.error ? "hasError" : ""}`}
          name={this.name}
          value={this.value}
          type={this.type}
          disabled={this.disabled}
          required={this.required}
          autocomplete={this.autocomplete}
          aria-invalid={this.error ? "true" : "false"}
          aria-describedby={describedBy || undefined}
          onInput={this.onInput}
        />

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

