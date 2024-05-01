import React, { useState } from "react";

export const TaskEditForm = ({ task, onEditTask }) => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() !== "") {
      const result = onEditTask(task.name, inputValue);
      if (result?.error) {
        setError(result?.error);
      } else {
        setInputValue("");
        setError(null);
      }
    } else {
      setError("Task name cannot be empty");
    }
  };

  return (
    <div>
      <form className="input-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          placeholder={task.name}
          onChange={(e) => {
            setInputValue(e.target.value);
            setError(null);
          }}
          className="input"
        />

        <button type="submit" className="submit-btn">
          Edit Task
        </button>
      </form>
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};
