import { useContext } from "react";
import { TaskContext } from "./../../context/TaskContext";

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);

  return (
    <div className="flex flex-col bg-gray-800 text-white p-4 rounded-md">
      <h1 className="text-xl font-bold capitalize">{task.title}</h1>
      <p className="text-sm mb-3 text-gray-400">{task.description}</p>
      <button
        className="bg-red-500 px-2 py-1 rounded-md m-auto ml-0 mb-0 hover:bg-red-600"
        onClick={() => deleteTask(task.id)}
      >
        Eliminar tarea
      </button>
    </div>
  );
}

export default TaskCard;
