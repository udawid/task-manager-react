import React, { useState } from "react";

const EditTaskForm = ({ editTask, task }) => {
  const [value, setValue] = useState(task.task);
  const handleSubmit = (e) => {
    e.preventDefault();

    editTask(value, task.id);

    setValue("");
  };

  return (
    <form className="TaskForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="task-input"
        value={value}
        placeholder="Update task"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="task-btn">
        Update
      </button>
    </form>
  );
};

export default EditTaskForm;
