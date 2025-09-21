// ThemeButton.tsx
import { useTheme } from "../assets/hooks"; // eigener Hook zum Zugriff auf ThemeContext

// Button-Komponente, die das aktuelle Theme anzeigt und per Klick wechselt
const ThemeButton = () => {
  // Hole Theme-Wert und Toggle-Funktion aus dem Context
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme} // beim Klick Theme umschalten
      style={{
        backgroundColor: theme === "light" ? "#fff" : "#333", // Hintergrund je nach Theme
        color: theme === "light" ? "#333" : "#fff", // Textfarbe je nach Theme
        padding: "8px 16px",
        borderRadius: "6px",
      }}>
      Current Theme: {theme} {/* zeigt aktuelles Theme an */}
    </button>
  );
};

export default ThemeButton;
