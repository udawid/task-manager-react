import React, { useState } from "react";

const TaskForm = ({ addTask }) => {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    addTask(value);
    setValue("");
  };

  return (
    <form className="TaskForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="task-input"
        value={value}
        placeholder="Add a task"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="task-btn">
        Save
      </button>
    </form>
  );
};

export default TaskForm;
