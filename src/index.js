import * as controller from "./app";

const projects =[];
const tasks = [];
projects.push(controller.createProject('Home', 'all projects'));
tasks.push(controller.createListObject('title', 'description', 'date', 'priorty'))
projects[0].addObject(tasks[0])

tasks[0].setTitle('NEW TITLE');
console.log(projects)