import { useState, type ReactNode } from "react";
import { ThemeContext } from "./ThemeContext";
import type { Theme } from "../assets/types";

// Provider-Komponente, die den State verwaltet und allen Kind-Komponenten
// den Zugriff auf den Context ermöglicht

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  // React-Status, der das aktuelle Theme speichert
  const [theme, setTheme] = useState<Theme>("light");

  // Funktion, die zwischen "light" und "dark" wechselt
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // Der Provider stellt den Wert (theme + toggleTheme) allen Kindern zur Verfügung
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
