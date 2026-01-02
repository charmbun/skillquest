import "./styles/main.css";
import { render } from "./ui/render.js";

render();

/*
const quest = addSkillQuest("Web Programming");
console.log("Quest: ", quest);
console.log("Quest given ID: ", getSkillQuestbyId(quest.id));

const sub = addSubQuest(quest.id, "JavaScript");
console.log("Subquest: ", sub);
console.log("Subquest given ID: ", getSubQuestbyId(sub.id));

const task = addTask(sub.id, {
  title: "Learn variables",
  description: "...",
  targetDate: "2025-01-01",
  priority: "high",
});
console.log("Task: ", task);

const quest2 = addSkillQuest("Nihonggo");

const allQuest = getAllSkillQuests();
console.log("All Quests: ", allQuest);
*/
