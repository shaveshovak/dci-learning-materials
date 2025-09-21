// Definiere den Typ für das Theme: entweder "light" oder "dark"
export type Theme = "light" | "dark";

// Interface beschreibt, welche Werte und Funktionen im Context verfügbar sind
export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}
