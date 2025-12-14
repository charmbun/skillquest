function createTask(title, description, targetDate, priority) {
  const id = crypto.randomUUID();
  return { id, title, description, targetDate, priority };
}

// function toggleComplete() {}

export { createTask };
