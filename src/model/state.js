import { createSkillQuest } from "./skillquest";
import { createSubQuest } from "./subquest";
import { createTask } from "./task";

const state = {
  skillQuests: [],
};

function addSkillQuest(title) {
  const quest = createSkillQuest(title);
  state.skillQuests.push(quest);
}

function addSubQuest(skillQuestId, title) {
  const quest = state.skillQuests.find((quest) => quest.id === skillQuestId);
  const sub = createSubQuest(title);
  quest.subquests.push(sub);
}

function addTask(subQuestId, title, description, targetDate, priority) {
  let subquests = [];
  state.skillQuests.forEach((quest) => {
    subquests.push(...quest.subquests);
  });
  const subquest = subquests.find((sq) => sq.id === subQuestId);

  const task = createTask(title, description, targetDate, priority);
  subquest.tasks.push(task);
}

// function getSkillQuests() {}
// function removeSkillQuest(id) {}
// function removeSubQuest(skillQuestId, subQuestId) {}
// function toggleTask(taskId) {}
// function removeTask(taskId) {}

export { addSkillQuest, addSubQuest, addTask };
