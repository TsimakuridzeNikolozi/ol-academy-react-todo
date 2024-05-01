import React, { useState } from "react";

export const TaskInputForm = ({ onAddTask }) => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() !== "") {
      const result = onAddTask(inputValue);
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
          placeholder="Enter task name"
          onChange={(e) => {
            setInputValue(e.target.value);
            setError(null);
          }}
          className="input"
        />

        <button type="submit" className="submit-btn">
          Add Task
        </button>
      </form>
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};
