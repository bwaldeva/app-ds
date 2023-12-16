import * as React from "react";
import { withThemeByClassName } from "@storybook/addon-themes";
import { FontProvider } from "@app-ds/ui";

import "@app-ds/ui/index.css";

export const decorators = [
  withThemeByClassName({
    themes: {
      light: "light",
      dark: "dark",
    },
    defaultTheme: "dark",
  }),
  (Story) => (
    <FontProvider>
      <Story />
    </FontProvider>
  ),
];
