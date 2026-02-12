import type { Preview } from "@storybook/react";

import "@slim-ds/tokens/tokens.css";
import { defineCustomElements } from "@slimkhemiri/web-components/loader";

// Ensure custom elements are registered once for all stories.
defineCustomElements(window);

const preview: Preview = {
  decorators: [
    (Story) => {
      return (
        <div style={{ padding: 24, background: "var(--sl-surface)", color: "var(--sl-text)" }}>
          <Story />
        </div>
      );
    }
  ],
  parameters: {
    a11y: {},
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
};

export default preview;