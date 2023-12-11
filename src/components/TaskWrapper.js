import React, { useState } from "react";
import TaskForm from "./TaskForm";
import { v4 as uuidv4 } from "uuid";
import Task from "./Task";
import EditTaskForm from "./EditTaskForm";
uuidv4();

const TaskWrapper = () => {
  const [tasks, setTasks] = useState([]);
  const addTask = (task) => {
    setTasks([
      ...tasks,
      { id: uuidv4(), task: task, completed: false, isEditing: false },
    ]);
    console.log(tasks);
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isEditing: !task.isEditing } : task
      )
    );
  };

  const editTasks = (task, id) => {
    setTasks(
      tasks.map((tasks) =>
        tasks.id === id
          ? { ...tasks, task, isEditing: !tasks.isEditing }
          : tasks
      )
    );
  };

  return (
    <div className="TaskWrapper">
      <TaskForm addTask={addTask} />
      {tasks.map((task) =>
        task.isEditing ? (
          <EditTaskForm editTask={editTasks} task={task} />
        ) : (
          <Task
            key={task.id}
            task={task}
            toggleComplete={toggleComplete}
            deleteTask={deleteTask}
            editTask={editTask}
          />
        )
      )}
    </div>
  );
};

export default TaskWrapper;
