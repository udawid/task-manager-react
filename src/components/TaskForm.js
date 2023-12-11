import React from "react";

const TaskForm = () => {
  return (
    <form className="TaskForm">
      <input type="text" className="task-input" placeholder="Add a task" />
      <button type="submit" className="task-btn"></button>
    </form>
  );
};

export default TaskForm;
