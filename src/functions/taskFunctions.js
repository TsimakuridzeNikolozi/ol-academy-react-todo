const findTaskByName = (name, tasks) =>
  tasks.find((task) => task.name === name);

export const handleAddTask = (name, tasks) => {
  if (findTaskByName(name, tasks)) {
    return { error: `Task with the name: "${name}" already exists` };
  }
  return {
    tasks: [
      ...tasks,
      { name, isDone: false, isEditing: false, checked: false },
    ],
  };
};

export const handleToggleDone = (name, tasks) =>
  tasks.map((task) =>
    task.name === name ? { ...task, isDone: !task.isDone } : task
  );

export const handleSetIsEditing = (name, tasks) =>
  tasks.map((task) =>
    task.name === name ? { ...task, isEditing: !task.isEditing } : task
  );

export const handleEditTask = (currentName, newName, tasks) => {
  if (findTaskByName(newName, tasks)) {
    return { error: `Task with the name: "${newName}" already exists` };
  }
  return {
    tasks: tasks.map((task) =>
      task.name === currentName
        ? { ...task, name: newName, isEditing: false }
        : task
    ),
  };
};

export const handleDelete = (name, tasks) =>
  tasks.filter((task) => task.name !== name);

export const handleMoveUp = (name, tasks) => {
  const index = tasks.findIndex((task) => task.name === name);
  if (index > 0) {
    const newTasks = [...tasks];
    [newTasks[index - 1], newTasks[index]] = [
      newTasks[index],
      newTasks[index - 1],
    ];
    return newTasks;
  }
  return tasks;
};

export const handleMoveDown = (name, tasks) => {
  const index = tasks.findIndex((task) => task.name === name);
  if (index < tasks.length - 1) {
    const newTasks = [...tasks];
    [newTasks[index + 1], newTasks[index]] = [
      newTasks[index],
      newTasks[index + 1],
    ];
    return newTasks;
  }
  return tasks;
};

export const handleSetChecked = (name, tasks) =>
  tasks.map((task) =>
    task.name === name ? { ...task, checked: !task.checked } : task
  );
