export default function Task({ index, task: {task: taskText, done}, deleteTask, toggleTask }) {
  return (
    <li className="flex items-center justify-between mb-3">
      <div className="flex items-center gap-3">
        <button className="flex items-center">
          <i className={`text-xl cursor-pointer ${done ? "bx bxs-check-circle text-green-400" : "bx bx-circle text-gray-400"} transition-theme`} onClick={() => toggleTask(index)}></i>
        </button>
        <span className={`${done ? "line-through text-gray-400" : ""} transition-theme`}>{taskText}</span>
      </div>
      <button className="text-gray-400 cursor-pointer hover:text-red-400" onClick={() => deleteTask(index)}>
        <i className="text-2xl bx bx-x"></i>
      </button>
    </li>
  );
}
