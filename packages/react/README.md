# @slimkhemiri/react-design-system

React bindings for the **Slim Design System** (Stencil Web Components).

This package provides:

- React components like `SlimButton`, `SlimInput`, …
- `defineCustomElements()` to register the underlying web components

## Install

```bash
npm i @slimkhemiri/react-design-system
```

This package depends on `@slimkhemiri/web-components` (installed automatically).

If you see `E404 Not Found` for `@slimkhemiri/web-components`, it means that package is **not published to your registry yet**. Publish it first (see repo-level publishing notes), or install from local tarballs.

```bash
npm whoami
npm login
```

## Usage

Register the custom elements once, then use the React components.

```ts
// main.tsx / index.tsx
import React from "react";
import ReactDOM from "react-dom/client";

import { defineCustomElements } from "@slimkhemiri/react-design-system";

// Registers <slim-button />, <slim-input />, ... as custom elements
defineCustomElements();

import { App } from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

```tsx
// App.tsx
import { SlimButton, SlimInput } from "@slimkhemiri/react-design-system";

export function App() {
  return (
    <div style={{ display: "grid", gap: 12, maxWidth: 360 }}>
      <SlimInput label="Email" type="email" onSlimChange={(e) => console.log(e.detail)} />
      <SlimButton variant="primary">Click me !</SlimButton>
    </div>
  );
}
```

## Troubleshooting: "Invalid hook call" / `useRef` is null

This error almost always means **React is resolved twice** (or `react` / `react-dom` versions don’t match) in your consuming app.

### 1) Verify there is only one React

```bash
npm ls react react-dom
```

You should see **a single version** of `react` and `react-dom`.

### 1bis) Quick fix (npm): force a single React via overrides

If you see something like `@slimkhemiri/react-design-system -> react@18.x` while your app is on React 19 (or vice-versa),
force React to a single version in your app:

```json
{
  "overrides": {
    "@slimkhemiri/react-design-system": {
      "react": "19.2.4",
      "react-dom": "19.2.4"
    }
  }
}
```

Then reinstall (`rm -rf node_modules package-lock.json` + `npm i`).

### 2) If you use Vite + monorepo / workspace / `npm link`

Add React dedupe to your consuming app’s `vite.config.ts`:

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    dedupe: ["react", "react-dom"]
  }
});
```

## Next.js / SSR notes

Custom elements must be defined in the browser. In Next.js, call `defineCustomElements()` from a client component:

```tsx
"use client";

import { useEffect } from "react";
import { defineCustomElements } from "@slimkhemiri/react-design-system";

export function SlimDesignSystemProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    defineCustomElements();
  }, []);

  return children;
}
```

## Components

Currently exported:

- `SlimAlert`
- `SlimBadge`
- `SlimButton`
- `SlimCheckbox` (`onSlimChange` → `CustomEvent<boolean>`)
- `SlimInput` (`onSlimChange` → `CustomEvent<string>`)
- `SlimSelect` (`onSlimChange` → `CustomEvent<string>`)
- `SlimSwitch` (`onSlimChange` → `CustomEvent<boolean>`)
- `SlimTextarea` (`onSlimChange` → `CustomEvent<string>`)

