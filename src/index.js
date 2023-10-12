import * as app from "./app";
import * as dom from "./dom";

const projects =[];
const tasks = [];
projects.push(app.createProject('Home', 'home projects'));
tasks.push(app.createTask('To-Do Project', 'complete this project', 'date', 'priorty'))
tasks.push(app.createTask('Floors', 'lay down new floors', 'date', 'priorty'))
tasks.push(app.createTask('Paint', 'paint the walls', 'date', 'priorty'))
tasks.push(app.createTask('Kitchen', 'clean kitchen', 'date', 'priorty'))
tasks.push(app.createTask('Trash', 'take out trash', 'date', 'priorty'))
projects[0].addObject(tasks[1],tasks[2],tasks[3],tasks[4])

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

document.querySelector('ul').addEventListener('click', (e)=>{
    if(e.target.dataset.key){
        
        dom.displayTasks(projects[e.target.dataset.key].list, tasks)
    }else{
        dom.displayTasks(tasks, tasks)
    }
})

dom.addProject(projects[0].title, 0);
dom.displayTasks(tasks, tasks)

console.log(projects)
