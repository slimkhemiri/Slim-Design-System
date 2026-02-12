import { Component, Event, EventEmitter, Prop, State, h } from "@stencil/core";
import { createId } from "../../utils/id";

@Component({
  tag: "slim-textarea",
  styleUrl: "slim-textarea.css",
  shadow: true
})
export class SlimTextarea {
  @Prop() label?: string;
  @Prop() hint?: string;
  @Prop() error?: string;

  @Prop() name?: string;
  @Prop({ mutable: true }) value = "";
  @Prop() disabled = false;
  @Prop() required = false;
  @Prop() readonly = false;
  @Prop() placeholder?: string;
  @Prop() rows = 4;
  @Prop() maxlength?: number;
  @Prop() minlength?: number;
  @Prop() textareaId?: string;

  @Event() slimChange!: EventEmitter<string>;

  @State() private _id = "";

  componentWillLoad() {
    this._id = this.textareaId ?? createId("slim-textarea");
  }

  private onInput = (e: Event) => {
    const v = (e.target as HTMLTextAreaElement).value;
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

        <textarea
          id={this._id}
          class={`control ${this.error ? "hasError" : ""}`}
          name={this.name}
          value={this.value}
          disabled={this.disabled}
          required={this.required}
          readOnly={this.readonly}
          placeholder={this.placeholder}
          rows={this.rows}
          maxLength={this.maxlength}
          minLength={this.minlength}
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

