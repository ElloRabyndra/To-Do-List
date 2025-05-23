import { useState, useContext } from "react";
import ThemeSwitch from "./Components/ThemeSwitch";
import { ThemeContext } from "./Context/ThemeContext";

export default function App() {
  const { theme } = useContext(ThemeContext);
  const themeClass = theme === "light" ? "light-theme" : "dark-theme";

  return (
    <div className={themeClass}>
      <ThemeSwitch />
    </div>
  );
}
