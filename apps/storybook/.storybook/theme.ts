import { create } from "@storybook/theming/create";
import "@fontsource-variable/inter";
import "@fontsource-variable/jetbrains-mono";

export default create({
  base: "dark",
  // Typography
  fontBase: '"Inter Variable", sans-serif',
  fontCode: '"JetBrains Mono Variable", monospace',

  brandTitle: "Application Design System",
  brandUrl: "https://example.com",
  brandImage: "https://storybook.js.org/images/placeholders/350x150.png",
  brandTarget: "_self",

  //   //
  //   colorPrimary: "#3A10E5",
  //   colorSecondary: "#585C6D",

  //   // UI
  //   appBg: "#ffffff",
  //   appContentBg: "#ffffff",
  //   appPreviewBg: "#ffffff",
  //   appBorderColor: "#585C6D",
  //   appBorderRadius: 4,

  //   // Text colors
  //   textColor: "#10162F",
  //   textInverseColor: "#ffffff",

  //   // Toolbar default and active colors
  //   barTextColor: "#9E9E9E",
  //   barSelectedColor: "#585C6D",
  //   barBg: "#ffffff",

  //   // Form colors
  //   inputBg: "#ffffff",
  //   inputBorder: "#10162F",
  //   inputTextColor: "#10162F",
  //   inputBorderRadius: 2,
});
