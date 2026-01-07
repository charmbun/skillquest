/**
 * UI Renderer for SkillQuest
 * --------------------------
 * Responsible for:
 * - Reading state
 * - Building DOM
 * - Wiring UI events
 *
 * NOTE:
 * This file MUST NOT store state.
 * It only calls state mutation + read functions.
 */

import {
  addSkillQuest,
  addSubQuest,
  addTask,
  getAllSkillQuests,
  getSkillQuestbyId,
  getSubQuestbyId,
} from "../state/state.js";

/**
 * Main render function
 * Rebuilds the entire UI based on current state
 */
export function render() {
  const app = document.querySelector("#app");

  /* =========================
     RESET UI
     ========================= */
  app.innerHTML = "";

  /* =========================
     CREATE QUEST INPUT UI
     ========================= */
  const questInput = document.createElement("input");
  questInput.type = "text";
  questInput.placeholder = "Add a new Skill Quest";

  const questBtn = document.createElement("button");
  questBtn.id = "quest-btn";
  questBtn.textContent = "Add Quest";

  app.append(questInput, questBtn);

  /* =========================
     READ STATE
     ========================= */
  const quests = getAllSkillQuests();

  /* =========================
     RENDER SKILL QUESTS
     ========================= */
  quests.forEach((quest) => {
    // --- Quest container ---
    const questDiv = document.createElement("div");
    questDiv.classList.add("quest");

    // --- Quest title ---
    const questTitle = document.createElement("h3");
    questTitle.textContent = quest.title;

    /* =========================
     RENDER SUBQUESTS
     ========================= */
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
      // --- SubQuest title ---
      const subTitle = document.createElement("h4");
      subTitle.textContent = sub.title;

      /* =========================
     RENDER TASKS
     ========================= */
      // --- Task input ---
      const taskInput = document.createElement("input");
      taskInput.type = "text";
      taskInput.placeholder = "Add a new Task";

      // --- Task button ---
      const taskBtn = document.createElement("button");
      taskBtn.id = "task-btn";
      taskBtn.textContent = "Add Task";

      taskBtn.addEventListener("click", (event) => {
        event.preventDefault();
        addTask(sub.id, taskInput.value);
        render();
      });

      const taskQuestDiv = document.createElement("div");
      sub.tasks.forEach((task) => {
        const taskTitle = document.createElement("p");
        taskTitle.textContent = task.title;
        taskQuestDiv.appendChild(taskTitle);
      });

      subQuestDiv.append(subTitle, taskInput, taskBtn, taskQuestDiv);
    });

    // --- Assemble quest block ---
    questDiv.append(questTitle, subInput, subBtn, subQuestDiv);
    app.appendChild(questDiv);
  });

  /* =========================
     EVENT LISTENERS
     ========================= */
  questBtn.addEventListener("click", (event) => {
    event.preventDefault();
    addSkillQuest(questInput.value);
    render();
  });
}
