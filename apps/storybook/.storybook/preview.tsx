import { withThemeByClassName } from "@storybook/addon-themes";

import "@app-ds/ui/index.css";

export const decorators = [
  withThemeByClassName({
    themes: {
      light: "light",
      dark: "dark",
    },
    defaultTheme: "dark",
  }),
];
