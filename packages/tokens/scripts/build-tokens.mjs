import fs from "node:fs";
import path from "node:path";

const outDir = path.resolve("dist");
fs.mkdirSync(outDir, { recursive: true });


const tokenSets = {
  base: {
    /* Typography */
    "--sl-font-family":
      'ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Arial, "Noto Sans", "Liberation Sans", sans-serif',
    "--sl-font-size-1": "12px",
    "--sl-font-size-2": "14px",
    "--sl-font-size-3": "16px",
    "--sl-font-weight-regular": "500",
    "--sl-font-weight-bold": "700",
    "--sl-line-height-1": "1.2",
    "--sl-line-height-2": "1.35",

    /* Spacing */
    "--sl-space-1": "4px",
    "--sl-space-2": "8px",
    "--sl-space-3": "12px",
    "--sl-space-4": "16px",
    "--sl-space-5": "24px",

    /* Radius */
    "--sl-radius-1": "6px",
    "--sl-radius-2": "10px",
    "--sl-radius-round": "999px",

    /* Motion */
    "--sl-duration-fast": "120ms",
    "--sl-duration-instant": "30ms",

    /* Semantic colors (LIGHT) */
    "--sl-surface": "#ffffff",
    "--sl-surface-2": "#f9f9fb",
    "--sl-text": "#232323",
    "--sl-muted": "#666666",

    /* Brand */
    "--sl-primary": "#581d74",
    "--sl-primary-contrast": "#ffffff",
    "--sl-primary-soft": "#edeaf8",
    "--sl-focus": "#581d74",

    /* Status */
    "--sl-info": "var(--sl-primary)",
    "--sl-danger": "#e91b06",
    "--sl-success": "#398538",
    "--sl-warning": "#b86b00",

    /* Borders */
    "--sl-border": "#dcdcdc",

    /* Effects */
    "--sl-shadow-1": "0 8px 20px rgba(0, 0, 0, 0.18)",

    /* A11y */
    "--sl-focus-ring": "3px solid color-mix(in srgb, var(--sl-focus), transparent 70%)"
  },
  themes: {
    dark: {
      "--sl-surface": "#0b1220",
      "--sl-surface-2": "#111a2e",
      "--sl-text": "#eef2ff",
      "--sl-muted": "#a7b0c2",
      "--sl-border": "#263149",
      "--sl-primary-soft": "color-mix(in srgb, var(--sl-primary), var(--sl-surface) 88%)"
    },
    hc: {
      "--sl-surface": "#000",
      "--sl-surface-2": "#000",
      "--sl-text": "#fff",
      "--sl-muted": "#fff",
      "--sl-primary": "#fff",
      "--sl-primary-contrast": "#000",
      "--sl-border": "#fff",
      "--sl-focus": "#fff",
      "--sl-focus-ring": "3px solid var(--sl-focus)"
    }
  }
};

function toCssVarsBlock(vars) {
  return Object.entries(vars)
    .map(([k, v]) => `  ${k}: ${v};`)
    .join("\n");
}

const css = `
:root {
${toCssVarsBlock(tokenSets.base)}
}

[data-theme="dark"] {
${toCssVarsBlock(tokenSets.themes.dark)}
}

[data-theme="hc"] {
${toCssVarsBlock(tokenSets.themes.hc)}
}

@media (prefers-reduced-motion: reduce) {
  :root {
    scroll-behavior: auto;
    --sl-duration-fast: 0ms;
    --sl-duration-instant: 0ms;
  }
}
`.trimStart();

fs.writeFileSync(path.join(outDir, "tokens.css"), css, "utf8");
fs.writeFileSync(
  path.join(outDir, "tokens.js"),
  `export const tokens = ${JSON.stringify(tokenSets, null, 2)};\n`,
  "utf8"
);
fs.writeFileSync(
  path.join(outDir, "tokens.d.ts"),
  `export declare const tokens: {
  base: Record<string, string>;
  themes: {
    dark: Record<string, string>;
    hc: Record<string, string>;
  };
};\n`,
  "utf8"
);


