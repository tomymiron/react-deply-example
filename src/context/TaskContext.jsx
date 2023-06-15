import { createContext, useState, useEffect } from "react";
import { tasks as data } from "./../data/tasks";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, SetTasks] = useState([]);

  const createTask = (taskTitle, taskDescription) => {
    SetTasks([
      ...tasks,
      {
        id: tasks[tasks.length - 1].id + 1,
        title: taskTitle,
        description: taskDescription,
      },
    ]);
  };

  const deleteTask = (idTask) => {
    SetTasks(tasks.filter((task) => task.id !== idTask));
  };

  useEffect(() => {
    SetTasks(data);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        deleteTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
