import React from "react";
import {
    SlimAlert,
    SlimBadge,
    SlimButton,
    SlimCheckbox,
    SlimInput,
  SlimPlaygroundSidebar,
    SlimSelect,
    SlimSwitch,
    SlimTextarea,
    SlimTooltip
} from "@slimkhemiri/react-design-system";

type DemoId = "all" | "buttons" | "inputs" | "alerts" | "badges" | "tooltips";

export function App() {
    const [theme, setTheme] = React.useState<"light" | "dark" | "hc">("light");
    const [demo, setDemo] = React.useState<DemoId>("all");
    const [sidebarCollapsed, setSidebarCollapsed] = React.useState(false);
    // const headerRef = React.useRef<HTMLElement | null>(null);
    const [sidebarTop, setSidebarTop] = React.useState(24);
    const [name, setName] = React.useState("");
    const [notes, setNotes] = React.useState("");
    const [country, setCountry] = React.useState("fr");
    const [marketing, setMarketing] = React.useState(false);
    const [cardFrozen, setCardFrozen] = React.useState(false);
    const [error, setError] = React.useState<string | undefined>(undefined);

    React.useEffect(() => {
        document.documentElement.dataset.theme = theme === "light" ? "" : theme;
    }, [theme]);

    React.useEffect(() => {
        const header = document.querySelector(".header")as HTMLElement | null;
        if (!header) return;

        let raf = 0;
        const update = () => {
            cancelAnimationFrame(raf);
            raf = requestAnimationFrame(() => {
                const rect = header.getBoundingClientRect();
                const next = Math.max(24, Math.round(rect.bottom + 16));
                setSidebarTop(next);
            });
        };

        update();
        window.addEventListener("resize", update);
        window.addEventListener("scroll", update, { passive: true });
        const ro = new ResizeObserver(update);
        ro.observe(header);

        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener("resize", update);
            window.removeEventListener("scroll", update);
            ro.disconnect();
        };
    }, []);

    React.useEffect(() => {
        try {
            const v = window.localStorage.getItem("slim.playground.sidebarCollapsed");
            if (v != null) setSidebarCollapsed(v === "1");
        } catch {
            // ignore
        }
    }, []);

    React.useEffect(() => {
        try {
            window.localStorage.setItem("slim.playground.sidebarCollapsed", sidebarCollapsed ? "1" : "0");
        } catch {
            // ignore
        }
    }, [sidebarCollapsed]);

    const menuItems: Array<{
        id: DemoId;
        label: string;
        icon: Array<{ d: string; strokeWidth?: number; strokeLinecap?: "round" | "square" | "butt"; strokeLinejoin?: "round" | "bevel" | "miter" }>;
    }> = [
        {
            id: "all",
            label: "All components",
            icon: [{ d: "M4 4h7v7H4V4Zm9 0h7v7h-7V4ZM4 13h7v7H4v-7Zm9 0h7v7h-7v-7Z", strokeLinejoin: "round" }]
        },
        {
            id: "buttons",
            label: "Buttons",
            icon: [
                { d: "M6 9h12a3 3 0 0 1 0 6H6a3 3 0 0 1 0-6Z", strokeLinejoin: "round" },
                { d: "M10 12h4", strokeLinecap: "round" }
            ]
        },
        {
            id: "inputs",
            label: "Inputs",
            icon: [
                { d: "M5 7h14v10H5V7Z", strokeLinejoin: "round" },
                { d: "M8 12h8", strokeLinecap: "round" }
            ]
        },
        {
            id: "alerts",
            label: "Alerts",
            icon: [
                { d: "M12 3 2.8 20h18.4L12 3Z", strokeLinejoin: "round" },
                { d: "M12 9v4", strokeLinecap: "round" },
                { d: "M12 16h.01", strokeWidth: 3, strokeLinecap: "round" }
            ]
        },
        {
            id: "badges",
            label: "Badges",
            icon: [
                { d: "M12 2 9 5H5v4l-3 3 3 3v4h4l3 3 3-3h4v-4l3-3-3-3V5h-4l-3-3Z", strokeLinejoin: "round" },
                { d: "M9.5 12h5", strokeLinecap: "round" }
            ]
        },
        {
            id: "tooltips",
            label: "Tooltips",
            icon: [
                { d: "M12 21c5 0 9-4 9-9s-4-9-9-9-9 4-9 9 4 9 9 9Z" },
                { d: "M12 10v6", strokeLinecap: "round" },
                { d: "M12 7h.01", strokeWidth: 3, strokeLinecap: "round" }
            ]
        }
    ];

    const ButtonsDemo = (
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
    );

    const InputsDemo = (
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
    );

    const AlertsDemo = (
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
    );

    const BadgesDemo = (
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
    );

    const TooltipsDemo = (
        <section className="card">
            <div className="cardTitle">Tooltips</div>
            <div className="row">
                <SlimTooltip text="Top tooltip" placement="top">
                    <SlimButton slot="trigger" variant="secondary">
                        Hover (top)
                    </SlimButton>
                </SlimTooltip>
                <SlimTooltip text="Right tooltip" placement="right">
                    <SlimButton slot="trigger" variant="secondary">
                        Hover (right)
                    </SlimButton>
                </SlimTooltip>
                <SlimTooltip text="Bottom tooltip" placement="bottom">
                    <SlimButton slot="trigger" variant="secondary">
                        Hover (bottom)
                    </SlimButton>
                </SlimTooltip>
                <SlimTooltip placement="left">
                    <SlimButton slot="trigger" variant="secondary">
                        Hover (left)
                    </SlimButton>
                    Left Tooltip   
                </SlimTooltip>
            </div>
        </section>
    );

    const content =
        demo === "all" ? (
            <main className="grid" aria-label="Component demos">
                {ButtonsDemo}
                {InputsDemo}
                {AlertsDemo}
                {BadgesDemo}
                {TooltipsDemo}
            </main>
        ) : (
            <main className="content" aria-label="Component demo">
                {demo === "buttons" && ButtonsDemo}
                {demo === "inputs" && InputsDemo}
                {demo === "alerts" && AlertsDemo}
                {demo === "badges" && BadgesDemo}
                {demo === "tooltips" && TooltipsDemo}
            </main>
        );

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
                        onChange={(e) => setTheme(e.currentTarget.value as "light" | "dark" | "hc")}
                    >
                        <option value="light">Light</option>
                        <option value="dark">Dark</option>
                        <option value="hc">High contrast</option>
                    </select>
                </div>
            </header>

            <div className={`layout ${sidebarCollapsed ? "isCollapsed" : ""}`}>
                <SlimPlaygroundSidebar
                    heading="Components"
                    items={menuItems}
                    active={demo}
                    collapsed={sidebarCollapsed}
                    pinnedTop={sidebarTop}
                    pinnedLeft={24}
                    pinnedBottom={24}
                    onSlimToggle={(e: CustomEvent<boolean>) => setSidebarCollapsed(e.detail)}
                    onSlimSelect={(e: CustomEvent<string>) => setDemo(e.detail as DemoId)}
                />

                {content}
            </div>
        </div>
    );
}

