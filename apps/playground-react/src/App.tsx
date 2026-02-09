import React from "react";
import {
  SlimAlert,
  SlimBadge,
  SlimButton,
  SlimCheckbox,
  SlimInput,
  SlimSelect,
  SlimSwitch,
  SlimTextarea
} from "@slim-ds/react";

export function App() {
  const [theme, setTheme] = React.useState<"light" | "dark" | "hc">("light");
  const [name, setName] = React.useState("");
  const [notes, setNotes] = React.useState("");
  const [country, setCountry] = React.useState("fr");
  const [marketing, setMarketing] = React.useState(false);
  const [cardFrozen, setCardFrozen] = React.useState(false);
  const [error, setError] = React.useState<string | undefined>(undefined);

  React.useEffect(() => {
    document.documentElement.dataset.theme = theme === "light" ? "" : theme;
  }, [theme]);

  return (
    <div className="page">
      <header className="header">
        <div>
          <div className="title">Slim Design System</div>
          <div className="subtitle">Bank UI primitives (Stencil + React)</div>
        </div>
        <div className="theme">
          <label className="themeLabel" htmlFor="theme">
            Theme
          </label>
          <select
            id="theme"
            className="themeSelect"
            value={theme}
            onChange={(e) => setTheme(e.target.value as any)}
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="hc">High contrast</option>
          </select>
        </div>
      </header>

      <main className="grid">
        <section className="card">
          <div className="cardTitle">Buttons</div>
          <div className="row">
            <SlimButton variant="primary">Pay now</SlimButton>
            <SlimButton variant="secondary">Cancel</SlimButton>
            <SlimButton variant="danger">Freeze card</SlimButton>
            <SlimButton variant="ghost">Learn more</SlimButton>
            <SlimButton loading>Loading</SlimButton>
          </div>
        </section>

        <section className="card">
          <div className="cardTitle">Inputs</div>
          <div className="stack">
            <SlimInput
              label="Account nickname"
              hint="Shown on statements and transfers"
              value={name}
              onSlimChange={(e: CustomEvent<string>) => {
                const v = e.detail;
                setName(v);
                setError(v.trim().length < 3 ? "Must be at least 3 characters" : undefined);
              }}
              error={error}
            />
            <SlimSelect
              label="Country"
              value={country}
              options={[
                { value: "fr", label: "France" },
                { value: "be", label: "Belgium" },
                { value: "de", label: "Germany" }
              ]}
              onSlimChange={(e: CustomEvent<string>) => setCountry(e.detail)}
            />

            <SlimTextarea
              label="Notes"
              hint="Optional internal note"
              value={notes}
              onSlimChange={(e: CustomEvent<string>) => setNotes(e.detail)}
            />

            <SlimCheckbox
              label="I agree to receive marketing emails"
              checked={marketing}
              onSlimChange={(e: CustomEvent<boolean>) => setMarketing(e.detail)}
            />

            <SlimSwitch
              label="Freeze card"
              hint="Temporarily disable payments"
              checked={cardFrozen}
              onSlimChange={(e: CustomEvent<boolean>) => setCardFrozen(e.detail)}
            />
          </div>
        </section>

        <section className="card">
          <div className="cardTitle">Alerts</div>
          <div className="stack">
            <SlimAlert variant="info" heading="Security tip">
              Never share your one-time code with anyone.
            </SlimAlert>
            <SlimAlert variant="success" heading="Payment scheduled">
              Your transfer will run on the next business day.
            </SlimAlert>
            <SlimAlert variant="warning" heading="Unusual activity">
              We noticed a new device. Review recent logins.
            </SlimAlert>
            <SlimAlert variant="danger" heading="Action required">
              Your session is about to expire. Save your work.
            </SlimAlert>
          </div>
        </section>

        <section className="card">
          <div className="cardTitle">Badges</div>
          <div className="row">
            <SlimBadge variant="neutral">Standard</SlimBadge>
            <SlimBadge variant="primary">BPCE</SlimBadge>
            <SlimBadge variant="success">Verified</SlimBadge>
            <SlimBadge variant="warning">Pending</SlimBadge>
            <SlimBadge variant="danger">Blocked</SlimBadge>
            <SlimBadge size="sm" variant="primary">
              New
            </SlimBadge>
          </div>
        </section>
      </main>
    </div>
  );
}

