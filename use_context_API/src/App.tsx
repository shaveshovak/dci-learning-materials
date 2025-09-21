import { useTheme } from "./assets/hooks";
import ThemeButton from "./components/ThemeButton";
import { ThemeProvider } from "./components/ThemeContext";

const EmptyDiv = () => {
  const { theme } = useTheme();
  return (
    <div
      data-theme={theme}
      style={{
        width: "300px",
        height: "300px",
        backgroundColor: theme === "light" ? "red" : "#333",
      }}></div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <ThemeButton />
      <EmptyDiv />
    </ThemeProvider>
  );
};

export default App;
