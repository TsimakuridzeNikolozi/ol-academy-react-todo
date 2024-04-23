import React from "react";

export const TodoButtons = ({ onDeleteAll, onDeleteDone, onDeleteChecked }) => {
  return (
    <div className="todo-buttons">
      <button className="btn-delete-all" onClick={onDeleteAll}>
        Delete All
      </button>
      <button className="btn-delete-done" onClick={onDeleteDone}>
        Delete Done
      </button>
      <button className="btn-delete-checked" onClick={onDeleteChecked}>
        Delete Checked
      </button>
    </div>
  );
};
