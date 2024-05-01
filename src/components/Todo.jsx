import React, { useState } from "react";
import {
  handleAddTask,
  handleToggleDone,
  handleSetIsEditing,
  handleEditTask,
  handleDelete,
  handleMoveUp,
  handleMoveDown,
  handleSetChecked,
} from "../functions/taskFunctions";
import { TaskInputForm } from "./TaskInputForm";
import { Task } from "./Task";
import { TodoButtons } from "./TodoButtons";

export const Todo = () => {
  const [tasks, setTasks] = useState([]);

  const onAddTask = (name) => {
    const result = handleAddTask(name, tasks);
    if (result?.error) {
      return result;
    } else {
      setTasks(result.tasks);
    }
  };

  const onEditTask = (currentName, newName) => {
    const result = handleEditTask(currentName, newName, tasks);
    if (result?.error) {
      return result;
    } else {
      setTasks(result.tasks);
    }
  };

  const onToggleDone = (name) => setTasks(handleToggleDone(name, tasks));
  const setIsEditing = (name) => setTasks(handleSetIsEditing(name, tasks));
  const onDelete = (name) => setTasks(handleDelete(name, tasks));
  const onMoveUp = (name) => setTasks(handleMoveUp(name, tasks));
  const onMoveDown = (name) => setTasks(handleMoveDown(name, tasks));
  const setChecked = (name) => setTasks(handleSetChecked(name, tasks));
  const onDeleteAll = () => setTasks([]);
  const onDeleteDone = () => setTasks(tasks.filter((task) => !task.isDone));
  const onDeleteChecked = () => setTasks(tasks.filter((task) => !task.checked));

  return (
    <div className="todo">
      <TodoButtons
        onDeleteAll={onDeleteAll}
        onDeleteDone={onDeleteDone}
        onDeleteChecked={onDeleteChecked}
      />
      <TaskInputForm onAddTask={onAddTask} />
      {tasks.map((task) => (
        <Task
          key={task.name}
          task={task}
          onToggleDone={onToggleDone}
          setIsEditing={setIsEditing}
          onEditTask={onEditTask}
          onDelete={onDelete}
          onMoveUp={onMoveUp}
          onMoveDown={onMoveDown}
          setChecked={setChecked}
        />
      ))}
    </div>
  );
};
