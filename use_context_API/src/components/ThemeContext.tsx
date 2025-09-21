import { createContext, useState, type ReactNode } from "react";
// Importiere die Typen aus einer zentralen Datei
import type { Theme, ThemeContextType } from "../assets/types";

// Erstelle den Context. Standardmäßig ist er "undefined",
// bis er vom ThemeProvider gesetzt wird.
// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

// Provider-Komponente, die den Context-Wert für alle Kinder-Komponenten bereitstellt
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  // State für das aktuelle Theme ("light" oder "dark")
  const [theme, setTheme] = useState<Theme>("light");

  // Funktion zum Umschalten zwischen "light" und "dark"
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // Der Context-Provider übergibt das aktuelle Theme
  // und die Toggle-Funktion an alle Kind-Komponenten
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
