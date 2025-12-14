function createSubQuest(title) {
  let tasks = [];
  const id = crypto.randomUUID();
  return { id, title, tasks };
}

// function addTask() {}
// function removeTask() {}

export { createSubQuest };
