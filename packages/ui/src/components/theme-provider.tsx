"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light" | "system";

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
}

interface ThemeProviderState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = "system",
  ...props
}: ThemeProviderProps): JSX.Element {
  const [theme, setTheme] = useState<Theme>((): Theme => defaultTheme);

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove("app-light", "app-dark");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "app-dark"
        : "app-light";

      root.classList.add(systemTheme);
    } else if (theme === "light") {
      root.classList.add("app-light");
    } else {
      root.classList.add("app-dark");
    }
  }, [theme]);

  const value = {
    theme,
    setTheme: (newTheme: Theme): void => {
      setTheme(newTheme);
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export function useTheme(): ThemeProviderState {
  const context = useContext(ThemeProviderContext);

  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- it could actually be undefined
  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
}
