import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Task = ({ task, toggleComplete, deleteTask, editTask }) => {
  return (
    <div className="Task">
      <p
        onClick={() => toggleComplete(task.id)}
        className={`${task.completed ? "completed" : ""}`}
      >
        {task.task}
      </p>
      <div>
        <FontAwesomeIcon
          icon={faPenToSquare}
          onClick={() => editTask(task.id)}
        />
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTask(task.id)} />
      </div>
    </div>
  );
};

export default Task;
