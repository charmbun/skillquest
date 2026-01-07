/**
 * UI Renderer for SkillQuest
 * --------------------------
 * Builds UI from state.
 * Owns DOM + event wiring.
 * Does NOT store state.
 */

import { createTask } from "../model/task.js";
import {
  addSkillQuest,
  addSubQuest,
  addTask,
  getAllSkillQuests,
} from "../state/state.js";

/* =========================
   PUBLIC RENDER
   ========================= */
export function render() {
  const app = document.querySelector("#app");
  app.innerHTML = "";

  app.appendChild(createQuestInput());

  const quests = getAllSkillQuests();
  quests.forEach((quest) => {
    app.appendChild(createQuestElement(quest));
  });
}

/* =========================
   APP-LEVEL UI
   ========================= */
function createQuestInput() {
  const container = document.createElement("div");

  const questInput = document.createElement("input");
  questInput.type = "text";
  questInput.placeholder = "Add a new Skill Quest";

  const questBtn = document.createElement("button");
  questBtn.id = "quest-btn";
  questBtn.textContent = "Add Quest";

  questBtn.addEventListener("click", (event) => {
    event.preventDefault();
    addSkillQuest(questInput.value);
    render();
  });

  container.append(questInput, questBtn);
  return container;
}

/* =========================
   QUEST UI
   ========================= */
function createQuestElement(quest) {
  // --- Quest container ---
  const questDiv = document.createElement("div");
  questDiv.classList.add("quest");

  // --- Quest title ---
  const questTitle = document.createElement("h3");
  questTitle.textContent = quest.title;

  // --- SubQuest input ---
  const subInput = document.createElement("input");
  subInput.type = "text";
  subInput.placeholder = "Add a new Sub Quest";

  // --- SubQuest button ---
  const subBtn = document.createElement("button");
  subBtn.id = "sub-btn";
  subBtn.textContent = "Add SubQuest";

  subBtn.addEventListener("click", (event) => {
    event.preventDefault();
    addSubQuest(quest.id, subInput.value);
    render();
  });

  const subQuestDiv = document.createElement("div");

  quest.subquests.forEach((sub) => {
    subQuestDiv.appendChild(createSubQuestElement(sub));
  });

  questDiv.append(questTitle, subInput, subBtn, subQuestDiv);

  return questDiv;
}

/* =========================
   SUBQUEST UI
   ========================= */
function createSubQuestElement(sub) {
  const subQuestDiv = document.createElement("div");
  subQuestDiv.classList.add("subquest");

  // --- SubQuest title ---
  const subTitle = document.createElement("h4");
  subTitle.textContent = sub.title;

  // --- Task input ---
  const taskInput = document.createElement("input");
  taskInput.type = "text";
  taskInput.placeholder = "Add a new Task";

  // --- Task button ---
  const taskBtn = document.createElement("button");
  taskBtn.textContent = "Add Task";

  taskBtn.addEventListener("click", (event) => {
    event.preventDefault();
    addTask(sub.id, taskInput.value);
    render();
  });

  const taskQuestDiv = document.createElement("div");

  sub.tasks.forEach((task) => {
    taskQuestDiv.appendChild(createTaskElement(task));
  });

  subQuestDiv.append(subTitle, taskInput, taskBtn, taskQuestDiv);

  return subQuestDiv;
}

/* =========================
   TASK UI
   ========================= */
function createTaskElement(task) {
  const taskTitle = document.createElement("p");
  taskTitle.textContent = task.title;
  return taskTitle;
}
