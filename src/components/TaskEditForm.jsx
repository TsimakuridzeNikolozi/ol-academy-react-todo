import React, { useState } from "react";

export const TaskEditForm = ({ task, onEditTask }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() !== "") {
      onEditTask(task.name, inputValue);
      setInputValue("");
    } else {
      alert("Task name can not be empty");
    }
  };

  return (
    <form className="input-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="input"
      />
      <button type="submit" className="submit-btn">
        Edit Task
      </button>
    </form>
  );
};
