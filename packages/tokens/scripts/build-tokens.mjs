import fs from "node:fs";
import path from "node:path";

const outDir = path.resolve("dist");
fs.mkdirSync(outDir, { recursive: true });

const css = `
:root {
  /* Typography */
  --sl-font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, "Noto Sans", "Liberation Sans", sans-serif;
  --sl-font-size-1: 12px;
  --sl-font-size-2: 14px;
  --sl-font-size-3: 16px;

  /* Spacing */
  --sl-space-1: 4px;
  --sl-space-2: 8px;
  --sl-space-3: 12px;
  --sl-space-4: 16px;

  /* Radius */
  --sl-radius-1: 6px;
  --sl-radius-2: 10px;

  /* Semantic colors (LIGHT) — BPCE-inspired */
  --sl-surface: #ffffff;
  --sl-surface-2: #f9f9fb;
  --sl-text: #232323;
  --sl-muted: #666666;

  /* Brand */
  --sl-primary: #581d74;
  --sl-primary-contrast: #ffffff;
  --sl-primary-soft: #edeaf8;
  --sl-focus: #581d74;

  /* Status */
  --sl-info: var(--sl-primary);
  --sl-danger: #e91b06;
  --sl-success: #398538;
  --sl-warning: #b86b00;

  /* Borders */
  --sl-border: #dcdcdc;
}

[data-theme="dark"] {
  --sl-surface: #0b1220;
  --sl-surface-2: #111a2e;
  --sl-text: #eef2ff;
  --sl-muted: #a7b0c2;

  --sl-border: #263149;

  /* Brand/status soft surfaces for dark */
  --sl-primary-soft: color-mix(in srgb, var(--sl-primary), var(--sl-surface) 88%);
}

[data-theme="hc"] {
  --sl-surface: #000;
  --sl-surface-2: #000;
  --sl-text: #fff;
  --sl-muted: #fff;

  --sl-primary: #fff;
  --sl-primary-contrast: #000;
  --sl-border: #fff;
  --sl-focus: #fff;
}

@media (prefers-reduced-motion: reduce) {
  :root {
    scroll-behavior: auto;
  }
}
`.trimStart();

fs.writeFileSync(path.join(outDir, "tokens.css"), css, "utf8");
console.log("Wrote dist/tokens.css");

