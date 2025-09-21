import { useContext } from "react";
import { ThemeContext } from "../components/ThemeContext";

/**
 * useContext Erklärung (Deutsch)
 *
 * - useContext ist ein React Hook, mit dem man Werte aus einem Context abrufen kann,
 *   der zuvor mit createContext erstellt wurde.
 *
 * - Context ist nützlich, um globale Daten (z. B. Theme, User, Sprache) verfügbar zu machen,
 *   ohne Props durch viele verschachtelte Komponenten weitergeben zu müssen (Prop Drilling).
 *
 * Schritte:
 * 1. Context erstellen: createContext(initialValue)
 * 2. Provider-Komponente nutzen: <Context.Provider value={...}> ... </Context.Provider>
 * 3. Werte abrufen: const value = useContext(Context)
 *
 * Vorteile:
 * ✅ Kein Prop Drilling
 * ✅ Globale Zustände wie Theme oder Auth einfach teilen
 * ✅ Sauberer, wiederverwendbarer Code
 *
 * Hinweis:
 * - Für kleine bis mittlere Zustände perfekt geeignet
 * - Für sehr komplexe Daten besser Redux, Zustand oder andere Libraries
 */

// Custom hook for easier use
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
};
