import React from "react";
import DoneIcon from "../assets/DoneIcon.svg";
import UndoIcon from "../assets/UndoIcon.svg";
import EditIcon from "../assets/EditIcon.svg";
import TrashIcon from "../assets/TrashIcon.svg";
import UpIcon from "../assets/UpIcon.svg";
import DownIcon from "../assets/DownIcon.svg";
import { TaskEditForm } from "./TaskEditForm";

export const Task = ({
  task,
  onToggleDone,
  setIsEditing,
  onEditTask,
  onMoveUp,
  onMoveDown,
  onDelete,
  setChecked,
}) => {
  return (
    <div className="task-container">
      <div className="task">
        <span className={`task-name ${task.isDone ? "task-done" : ""}`}>
          {task.name}
        </span>

        {/* Done/Undo button */}
        <button
          onClick={() => onToggleDone(task.name)}
          className="button"
          title={task.isDone ? "Undo" : "Mark as done"}
        >
          {task.isDone ? (
            <img src={UndoIcon} alt="Undo Icon" />
          ) : (
            <img src={DoneIcon} alt="Done Icon" />
          )}
        </button>

        {/* Edit button */}
        <button
          onClick={() => setIsEditing(task.name)}
          className="button"
          title="Edit task"
        >
          <img src={EditIcon} alt="Edit Icon" />
        </button>

        {/* Delete button */}
        <button
          onClick={() => onDelete(task.name)}
          className="button"
          title="Delete task"
        >
          <img src={TrashIcon} alt="Trash Icon" />
        </button>

        {/* Move up and move down buttons */}
        <div className="move-buttons">
          <button
            onClick={() => onMoveUp(task.name)}
            className="button"
            title="Move task up"
          >
            <img src={UpIcon} alt="Up Icon" />
          </button>
          <button
            onClick={() => onMoveDown(task.name)}
            className="button"
            title="Move task down"
          >
            <img src={DownIcon} alt="Down Icon" />
          </button>
        </div>

        {/* Checkbox */}
        <input
          type="checkbox"
          checked={task.checked}
          onChange={() => setChecked(task.name)}
          className="checkbox"
        />
      </div>

      {/* Task edit form */}
      {task.isEditing && <TaskEditForm task={task} onEditTask={onEditTask} />}
    </div>
  );
};
