import { Component, Event, EventEmitter, Host, Prop, h } from "@stencil/core";
import { createId } from "../../utils/id";

export type SlimPlaygroundSidebarIconPath = {
  d: string;
  strokeWidth?: number;
  strokeLinecap?: "round" | "square" | "butt";
  strokeLinejoin?: "round" | "bevel" | "miter";
};

export type SlimPlaygroundSidebarItem = {
  id: string;
  label: string;
  icon?: SlimPlaygroundSidebarIconPath[];
  disabled?: boolean;
};

@Component({
  tag: "slim-playground-sidebar",
  styleUrl: "slim-playground-sidebar.css",
  shadow: true
})
export class SlimPlaygroundSidebar {
  /** Sidebar heading shown in the header. */
  @Prop() heading = "Components";

  /** Menu items to render. */
  @Prop() items: SlimPlaygroundSidebarItem[] = [];

  /** Currently active item id. */
  @Prop() active?: string;

  /** Whether the sidebar is collapsed (icon-only rail). */
  @Prop({ reflect: true }) collapsed = false;

  /** Show/hide the collapse toggle button. */
  @Prop() collapsible = true;

  /** Fixed positioning offsets (in px). */
  @Prop() pinnedTop = 24;
  @Prop() pinnedLeft = 24;
  @Prop() pinnedBottom = 24;

  /** Emitted when a menu item is selected (detail = item id). */
  @Event() slimSelect!: EventEmitter<string>;

  /** Emitted when the user toggles collapse (detail = next collapsed). */
  @Event() slimToggle!: EventEmitter<boolean>;

  private headingId = createId("slim-sidebar-heading");
  private navId = createId("slim-sidebar-nav");

  private onToggle = () => {
    if (!this.collapsible) return;
    this.slimToggle.emit(!this.collapsed);
  };

  private onSelect = (id: string) => {
    this.slimSelect.emit(id);
  };

  render() {
    const style: Record<string, string> = {
      "--slim-sidebar-top": `${this.pinnedTop}px`,
      "--slim-sidebar-left": `${this.pinnedLeft}px`,
      "--slim-sidebar-bottom": `${this.pinnedBottom}px`
    };

    return (
      <Host style={style}>
        <div class="root">
          <div class="sidebarHeader">
            <h2
              id={this.headingId}
              class="sidebarTitle"
              aria-hidden={this.collapsed ? "true" : "false"}
            >
              {this.heading}
            </h2>

            {this.collapsible ? (
              <button
                type="button"
                class="sidebarToggle"
                onClick={this.onToggle}
                aria-label={this.collapsed ? "Expand sidebar" : "Collapse sidebar"}
                aria-expanded={this.collapsed ? "false" : "true"}
                aria-controls={this.navId}
                title={this.collapsed ? "Expand sidebar" : "Collapse sidebar"}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path
                    d={this.collapsed ? "M9 6l6 6-6 6" : "M15 6l-6 6 6 6"}
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            ) : null}
          </div>

          <nav
            id={this.navId}
            class="menu"
            aria-label={this.collapsed ? this.heading : undefined}
            aria-labelledby={this.collapsed ? undefined : this.headingId}
          >
            {this.items.map((item) => {
              const isActive = item.id === this.active;
              return (
                <button
                  key={item.id}
                  type="button"
                  class={`menuItem ${isActive ? "isActive" : ""}`}
                  aria-label={this.collapsed ? item.label : undefined}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => this.onSelect(item.id)}
                  disabled={!!item.disabled}
                  data-tooltip={item.label}
                >
                  <span class="menuItemIcon" aria-hidden="true">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      focusable="false"
                    >
                      {(item.icon ?? []).map((p) => (
                        <path
                          d={p.d}
                          stroke="currentColor"
                          stroke-width={p.strokeWidth ?? 2}
                          stroke-linecap={p.strokeLinecap ?? "round"}
                          stroke-linejoin={p.strokeLinejoin ?? "round"}
                        />
                      ))}
                    </svg>
                  </span>
                  <span class="menuItemLabel">{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </Host>
    );
  }
}

