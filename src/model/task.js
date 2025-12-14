export function createTask(title, description, targetDate, priority) {
  return {
    id: crypto.randomUUID(),
    title,
    description,
    targetDate,
    priority,
  };
}
