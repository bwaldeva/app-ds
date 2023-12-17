import type { Metadata } from "next";
import { ThemeProvider, StyleProvider } from "@app-ds/ui";
import "./styles.css";

export const metadata: Metadata = {
  title: "Application Design System",
  description: "Create Beautiful React Server Apps with ease.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <ThemeProvider defaultTheme="dark">
        <StyleProvider>
          <body>{children}</body>
        </StyleProvider>
      </ThemeProvider>
    </html>
  );
}
