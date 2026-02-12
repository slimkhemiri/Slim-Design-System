import js from "@eslint/js";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import jsxA11y from "eslint-plugin-jsx-a11y";

export default [
  // Ignore built output + vendored dirs
  {
    ignores: [
      "**/dist/**",
      "**/www/**",
      "**/loader/**",
      "**/storybook-static/**",
      "**/.turbo/**",
      "**/tmp-*/**"
    ]
  },

  js.configs.recommended,
  ...tseslint.configs.recommended,

  // Base TS/JS rules
  {
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
      }
    },
    rules: {
      "no-console": ["warn", { allow: ["warn", "error"] }]
    }
  },

  // Type declaration files often contain "unused" generics used purely for typing.
  {
    files: ["**/*.d.ts"],
    rules: {
      "@typescript-eslint/no-unused-vars": "off"
    }
  },

  // React + a11y (React apps and React bindings)
  {
    files: ["apps/**/*.{tsx,jsx}", "packages/react/**/*.{tsx,jsx}"],
    plugins: {
      react,
      "react-hooks": reactHooks,
      "jsx-a11y": jsxA11y
    },
    languageOptions: {
      globals: {
        JSX: "readonly"
      }
    },
    settings: {
      react: { version: "detect" }
    },
    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,

      // React 17+ JSX runtime
      "react/react-in-jsx-scope": "off",

      // Design-system-friendly: allow custom elements attributes like "aria-*" etc.
      "react/no-unknown-property": ["error", { ignore: ["class", "slot"] }]
    }
  },

  // Storybook templates/content in stories often includes unescaped quotes in text nodes.
  {
    files: ["packages/react/src/stories/**/*.{tsx,jsx}"],
    rules: {
      "react/no-unescaped-entities": "off"
    }
  }
  ,

  // Stencil (web components) TSX uses the `h` pragma via tsconfig jsxFactory.
  // ESLint can't see the implicit usage, so we ignore it here.
  {
    files: ["packages/web-components/src/**/*.{ts,tsx}"],
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^(h)$" }
      ]
    }
  }
];

