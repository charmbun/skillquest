export function createSubQuest(title) {
  return {
    id: crypto.randomUUID,
    title,
    tasks: [],
  };
}
