# Color Palette - Slim Design System

## Overview

This document presents all the colors available in the design system. Colors are defined as CSS variables (`--sl-*`) and automatically adapt to themes (light, dark, high-contrast).

---

## 🎨 Gray Palette

A complete gray scale for backgrounds, borders, and secondary text.

| Variable | Light | Dark | High Contrast |
|----------|-------|------|---------------|
| `--sl-gray-50` | #f9fafb | #1f2937 | #000 |
| `--sl-gray-100` | #f3f4f6 | #374151 | #1a1a1a |
| `--sl-gray-200` | #e5e7eb | #4b5563 | #333 |
| `--sl-gray-300` | #d1d5db | #6b7280 | #4d4d4d |
| `--sl-gray-400` | #9ca3af | #9ca3af | #666 |
| `--sl-gray-500` | #6b7280 | #d1d5db | #999 |
| `--sl-gray-600` | #4b5563 | #e5e7eb | #ccc |
| `--sl-gray-700` | #374151 | #f3f4f6 | #e6e6e6 |
| `--sl-gray-800` | #1f2937 | #f9fafb | #f2f2f2 |
| `--sl-gray-900` | #111827 | #ffffff | #fff |

---

## 🏢 Semantic Colors

### Surfaces
```css
--sl-surface         /* Main background */
--sl-surface-2       /* Secondary background */
--sl-surface-3       /* Tertiary background */
```

### Text
```css
--sl-text           /* Main text */
--sl-text-light     /* Secondary text */
--sl-muted          /* Muted text */
```

### Borders
```css
--sl-border         /* Standard border */
--sl-border-light   /* Light border */
--sl-border-strong  /* Strong border */
```

---

## 🎯 Brand Colors

### Primary (BPCE Purple)
```css
--sl-primary         /* #581d74 - Main color */
--sl-primary-hover   /* #6b2488 - Hover state */
--sl-primary-active  /* #4a1862 - Active state */
--sl-primary-contrast /* #ffffff - Text on primary */
--sl-primary-soft    /* #edeaf8 - Soft version */
```

**Usage**: Primary buttons, important links, active navigation elements

### Secondary (Sky Blue)
```css
--sl-secondary         /* #0ea5e9 - Secondary color */
--sl-secondary-hover   /* #0284c7 - Hover state */
--sl-secondary-active  /* #0369a1 - Active state */
--sl-secondary-contrast /* #ffffff - Text on secondary */
--sl-secondary-soft    /* #e0f2fe - Soft version */
```

**Usage**: Secondary buttons, alternative actions, complementary information elements

### Accent (Orange/Amber)
```css
--sl-accent         /* #f59e0b - Accent color */
--sl-accent-hover   /* #d97706 - Hover state */
--sl-accent-active  /* #b45309 - Active state */
--sl-accent-contrast /* #ffffff - Text on accent */
--sl-accent-soft    /* #fef3c7 - Soft version */
```

**Usage**: Call-to-action, highlighted elements, promotional badges

---

## 📊 Status Colors

### Info (Blue)
```css
--sl-info          /* #3b82f6 - Information */
--sl-info-contrast /* #ffffff - Text on info */
--sl-info-soft     /* #dbeafe - Soft version */
```

### Danger (Red)
```css
--sl-danger          /* #e91b06 - Error/Danger */
--sl-danger-contrast /* #ffffff - Text on danger */
--sl-danger-soft     /* #fee2e2 - Soft version */
```

### Success (Green)
```css
--sl-success          /* #398538 - Success */
--sl-success-contrast /* #ffffff - Text on success */
--sl-success-soft     /* #dcfce7 - Soft version */
```

### Warning (Dark Orange)
```css
--sl-warning          /* #b86b00 - Warning */
--sl-warning-contrast /* #ffffff - Text on warning */
--sl-warning-soft     /* #fef3c7 - Soft version */
```

---

## 🎭 Themes

### Light Theme (default)
```html
<html>
  <!-- Light theme applied by default -->
</html>
```

### Dark Theme
```html
<html data-theme="dark">
  <!-- Activates dark theme -->
</html>
```

### High Contrast Theme
```html
<html data-theme="hc">
  <!-- Activates high contrast theme for accessibility -->
</html>
```

---

## 💡 Usage Examples

### In Web Components
```css
.my-component {
  background: var(--sl-surface);
  color: var(--sl-text);
  border: 1px solid var(--sl-border);
}

.my-button-primary {
  background: var(--sl-primary);
  color: var(--sl-primary-contrast);
}

.my-button-primary:hover {
  background: var(--sl-primary-hover);
}
```

### In React
```tsx
import '@slimkhemiri/tokens/tokens.css';

function MyCard() {
  return (
    <div style={{ 
      background: 'var(--sl-surface-2)',
      border: '1px solid var(--sl-border-light)',
      color: 'var(--sl-text)'
    }}>
      Card content
    </div>
  );
}
```

---

## 🔧 Maintenance

To add or modify colors:

1. Edit `packages/tokens/scripts/build-tokens.mjs`
2. Run `npm run build` in `packages/tokens`
3. Rebuild the entire project with `pnpm build` at the root

---

## ♿ Accessibility

- All color pairs (text/background) meet WCAG AA contrast ratios
- The `hc` (high contrast) theme offers maximum contrast for users with specific needs
- Use `-contrast` variables to ensure optimal readability on bright colors
