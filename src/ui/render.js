import { addSkillQuest, getAllSkillQuests } from "../state/state.js";

export function render() {
  const app = document.querySelector("#app");

  // Clear old content
  app.innerHTML = "";

  // UI: Form + Button
  const questForm = document.createElement("input");
  questForm.id = "quest-form";
  questForm.type = "text";
  questForm.placeholder = "Add a new Skill Quest";

  const addQuestBtn = document.createElement("button");
  addQuestBtn.id = "add-quest-btn";
  addQuestBtn.textContent = "Add Quest";

  app.appendChild(questForm);
  app.appendChild(addQuestBtn);

  // Display All Quests
  const quests = getAllSkillQuests();
  console.log("Quests: ", quests);

  quests.forEach((quest) => {
    const div = document.createElement("div");
    div.textContent = quest.title;
    app.appendChild(div);
  });

  // Event Listeners
  addQuestBtn.addEventListener("click", (event) => {
    event.preventDefault();

    const questValue = questForm.value;
    addSkillQuest(questValue);

    render();
  });
}
