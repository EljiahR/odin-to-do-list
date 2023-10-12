import * as app from "./app";
import * as dom from "./dom";

const projects =[];
const tasks = [];
projects.push(app.createProject('Home', 'all projects'));
tasks.push(app.createTask('title', 'description', 'date', 'priorty'))
projects[0].addObject(tasks[0])

document.getElementById('add-project').addEventListener('click', (e)=>{
    e.preventDefault();
    dom.toggleProjectMenu()
})
document.getElementById('project-menu-overlay').addEventListener('click',(e)=>{
    if(e.target.id === 'project-menu-overlay'){dom.toggleProjectMenu()}
})

//Gets project from form, adds it to project array
document.getElementById('project-form').addEventListener('submit', (e)=>{
    e.preventDefault();
    const newProjectName = document.querySelector('#project-name').value
    const index = projects.push(app.createProject(newProjectName, '')) - 1
    dom.addProject(projects[index].title, index);
    dom.toggleProjectMenu();
    document.getElementById('project-form').reset();
})


tasks[0].setTitle('NEW TITLE');
dom.addProject(projects[0].title, 0);
dom.addTask(tasks[0],0)

console.log(projects)
