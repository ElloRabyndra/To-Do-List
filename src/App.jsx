import { useState, useContext } from "react";
import ThemeSwitch from "./Components/ThemeSwitch";
import { ThemeContext } from "./Context/ThemeContext";
import Task from "./Components/Task.jsx";
import GradientBackground from "./Components/GradientBackground.jsx";

export default function App() {
  
  // Context
  const { theme } = useContext(ThemeContext);
  const checkTheme = (lightStyle, darkStyle) => theme === "light" ? lightStyle : darkStyle

  // State
  const [task, setTask] = useState("");
  const [tasksList, setTasksList] = useState([]);

  // Fungsi untuk mengubah nilai task
  const handleInputChange = (e) => setTask(e.target.value);

  // Fungsi untuk menambahkan task
  const addTask = () => {
    if (task) {
      const newTask = {
        task: task,
        done: false
      }
      
      setTasksList([...tasksList, newTask]);
      setTask("");
    }
  };

  // Fungsi untuk menghapus task
  const deleteTask = (index) => {
    const newTasksList = [...tasksList];
    newTasksList.splice(index, 1);
    setTasksList(newTasksList);
  }

  // Fungsi untuk mengubah status task
  const toggleTask = (index) => {
    const newTasksList = [...tasksList];
    newTasksList[index].done = !newTasksList[index].done;
    setTasksList(newTasksList);
  }

  return (
    <section className={`${checkTheme("bg-gray-50 text-gray-800", "bg-zinc-900 text-white")} font-[Poppins] min-h-screen flex justify-center items-center transition-theme`}>

       {/* Gradient Background Elements */}
      <GradientBackground checkTheme={checkTheme} />
      
      <main className={`${checkTheme("bg-white", "bg-zinc-800")} p-6 shadow-sm rounded-3xl min-w-md transition-theme`}>
        {/* Header */}
        <header className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-center">To Do List</h1>
          <ThemeSwitch />
        </header>
        {/* Input Tugas */}
        <div className="p-2 mt-4">
          <div className="relative flex items-center overflow-auto rounded-full shadow-sm">
            <input type="text" placeholder="Add Task" className={`${checkTheme("bg-gray-100 text-gray-800", "bg-zinc-700 text-white")} w-full outline-none px-3 py-2 transition-theme`} value={task} onChange={handleInputChange} />
            <button className="absolute right-0 px-4 py-2 text-white rounded-full outline-none cursor-pointer bg-amber-400 hover:bg-amber-500" onClick={addTask}>Add</button>
          </div>
        </div>
        <div className={`${checkTheme("text-gray-800", "text-white")} mt-4 transition-theme`}>
          {/* Menampilkan daftar tugas */}
          <ul>
            {tasksList.map((task, index) => (
              <Task key={index} index={index} task={task} deleteTask={deleteTask} toggleTask={toggleTask} />
            ))}
          </ul>
        </div>
        </main>
    </section>
  );
}
