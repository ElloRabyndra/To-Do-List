import { useState, useContext } from "react";
import ThemeSwitch from "./Components/ThemeSwitch";
import { ThemeContext } from "./Context/ThemeContext";

export default function App() {
  const { theme } = useContext(ThemeContext);
  const checkTheme = (lightStyle, darkStyle) => theme === "light" ? lightStyle : darkStyle

  const [task, setTask] = useState("");
  const [tasksList, setTasksList] = useState([]);

  return (
    <section className={`${checkTheme("bg-gray-50 text-gray-800", "bg-zinc-900 text-white")} font-[Poppins] min-h-screen flex justify-center items-center transition-theme`}>
      <main className={`${checkTheme("bg-white", "bg-zinc-800")} p-6 shadow-sm rounded-3xl min-w-md transition-theme`}>
        <header className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-center">To Do List</h1>
          <ThemeSwitch />
        </header>
        <div className="w-full p-2 mt-4">
          <div className="relative flex items-center overflow-auto rounded-full shadow-sm">
            <input type="text" placeholder="Add Task" className={`${checkTheme("bg-gray-100 text-gray-800", "bg-zinc-700 text-white")} w-full outline-none px-3 py-2 transition-theme`} />
            <button className="absolute right-0 px-4 py-2 text-white rounded-full cursor-pointer bg-amber-400">Add</button>
          </div>
        </div>
        </main>
    </section>
  );
}
