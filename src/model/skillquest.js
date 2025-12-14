export function createSkillQuest(title) {
  return {
    id: crypto.randomUUID(),
    title,
    subquests: [],
  };
}
