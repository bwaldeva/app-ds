import * as React from "react";
import { withThemeByClassName } from "@storybook/addon-themes";
import { StyleProvider } from "@app-ds/ui";

export const decorators = [
  withThemeByClassName({
    themes: {
      light: "light",
      dark: "dark",
    },
    defaultTheme: "dark",
  }),
  (Story) => (
    <StyleProvider>
      <Story />
    </StyleProvider>
  ),
];
