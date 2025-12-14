import { createSkillQuest } from "../model/skillquest.js";
import { createSubQuest } from "../model/subquest.js";
import { createTask } from "../model/task.js";

const state = {
  skillQuests: [],
};

/* STATE WRITE FUNCTIONS */

export function addSkillQuest(title) {
  const quest = createSkillQuest(title);

  state.skillQuests.push(quest);
  return quest;
}

export function addSubQuest(id, title) {
  const quest = getSkillQuestbyId(id);
  const sub = createSubQuest(title);

  quest.subquests.push(sub);
  return sub;
}

export function addTask(id, title, description, targetDate, priority) {
  const subquest = getSubQuestbyId(id);
  const task = createTask(title, description, targetDate, priority);

  subquest.tasks.push(task);
  return task;
}

/* STATE READ FUNCTIONS */

export function getAllSkillQuests() {
  return state.skillQuests;
}

export function getSkillQuestbyId(id) {
  return state.skillQuests.find((quest) => quest.id === id);
}

export function getSubQuestbyId(id) {
  let subquests = [];
  state.skillQuests.forEach((quest) => {
    subquests.push(...quest.subquests);
  });
  return subquests.find((sub) => sub.id === id);
}
