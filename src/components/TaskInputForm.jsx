import React, { useState } from "react";

/**
 * Input component with a text field and submit button.
 * @component
 */
export const TaskInputForm = ({ onAddTask }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() !== "") {
      onAddTask(inputValue);
      setInputValue("");
    } else {
      alert("Task Name can not be empty");
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
        Add Task
      </button>
    </form>
  );
};
