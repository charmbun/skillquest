/* CORE LOGIC API */
// These are what UI calls.

// ✅ hold the data
// ✅ expose functions to read the data
// ✅ expose functions to change the data
// ✅ be the only place that mutates state

getSkillQuests();

addSkillQuest(title);
removeSkillQuest(id);

addSubQuest(skillQuestId, title);
removeSubQuest(skillQuestId, subQuestId);

addTask(subQuestId, taskData);
toggleTask(taskId);
removeTask(taskId);
