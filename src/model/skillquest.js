function createSkillQuest(title) {
  let subquests = [];
  const id = crypto.randomUUID();
  return { id, title, subquests };
}

// function addSubQuest() {}
// function removeSubQuest() {}

export { createSkillQuest };
