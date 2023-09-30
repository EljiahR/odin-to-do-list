import * as app from "./app";
import * as dom from "./dom";

const projects =[];
const tasks = [];
projects.push(app.createProject('Home', 'all projects'));
tasks.push(app.createTask('title', 'description', 'date', 'priorty'))
projects[0].addObject(tasks[0])

tasks[0].setTitle('NEW TITLE');
dom.addProject(projects[0].title, 0);
dom.addTask(tasks[0],0)

console.log(projects)
