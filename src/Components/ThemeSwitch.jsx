import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

const ThemeSwitch = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return <button onClick={toggleTheme}>Ubah Tema</button>;
};

export default ThemeSwitch;
