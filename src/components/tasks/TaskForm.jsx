import { useState, useContext } from "react";
import { TaskContext } from "../../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(title, description);
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4 rounded-md">
        <h1 className="text-2xl text-white capitalize font-bold mb-1">Nueva tarea</h1>
        <input
        className="bg-slate-300 px-3 w-full mb-2"
          placeholder="Escribe un titulo"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus
        />
        <textarea
        className="bg-slate-300 px-3 w-full mb-2"
          placeholder="Escribe una descripcion"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <button className="bg-indigo-500 py-1 px-3 rounded-sm text-white">Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
