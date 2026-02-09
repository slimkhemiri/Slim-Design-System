# Slim Design System (Bank)

A bank-grade Design System built with **Stencil Web Components** and **React** wrappers, powered by **design tokens**.

## What’s inside

- `packages/tokens`: semantic design tokens (CSS variables) with light/dark/high-contrast themes
- `packages/web-components`: Stencil components (framework-agnostic)
- `packages/react`: React bindings + `defineCustomElements()`
- `apps/playground-react`: a Vite React app that consumes the design system

## Prereqs

- Node.js 18+ (recommended 20+)
- pnpm (this repo uses Corepack)

## Quickstart

```bash
corepack enable
corepack prepare pnpm@9.15.4 --activate
pnpm install
pnpm build
pnpm dev
```

## Theming

Themes are CSS-variable based:

- default (light): `:root`
- dark: `[data-theme="dark"]`
- high contrast: `[data-theme="hc"]`

Example:

```html
<html data-theme="dark">
  ...
</html>
```

## BPCE theme

This repo’s default light theme is **BPCE-inspired** (primary `#581d74`).