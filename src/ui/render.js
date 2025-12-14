import { getAllSkillQuests } from "../state/state";

export function render() {
  const app = document.querySelector("#app");

  // Clear old content
  app.innerHTML = "";

  // Display all quests
  const quests = getAllSkillQuests();
  quests.forEach((quest) => {
    const div = document.createElement("div");
    div.textContent = quest.title;
    app.appendChild(div);
  });
}
