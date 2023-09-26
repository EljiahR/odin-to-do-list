import createListObject from "./ListObject";
import createProject from "./projects";

const newItem = createListObject('title', 'description', 'date', 'priorty')

const newProject = createProject('Project', 'a project', newItem);
newItem.setTitle('NEW TITLE');
console.log(newProject.list[0])