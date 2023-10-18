import * as app from "./app";
import * as dom from "./dom";

const projects =[];
const tasks = [];

//Demo data, for testing purposes only
projects.push(app.createProject('Home', 'home projects'));
projects.push(app.createProject('Odin', 'odin projects'))
tasks.push(app.createTask('To-Do Project', 'complete this project', 'date', 'priorty'))
tasks.push(app.createTask('Floors', 'lay down new floors', 'date', 'priorty'))
tasks.push(app.createTask('Paint', 'paint the walls', 'date', 'priorty'))
tasks.push(app.createTask('Kitchen', 'clean kitchen', 'date', 'priorty'))
tasks.push(app.createTask('Trash', 'take out trash', 'date', 'priorty'))
projects[0].addTask(tasks[1],tasks[2],tasks[3],tasks[4])
projects[1].addTask(tasks[0]);


document.getElementById('add-project').addEventListener('click', (e)=>{
    e.preventDefault();
    dom.toggleProjectMenu()
})
document.getElementById('project-menu-overlay').addEventListener('click',(e)=>{
    if(e.target.id === 'project-menu-overlay'){dom.toggleProjectMenu()}
})

//Event listener for form for new project submit
document.getElementById('project-form').addEventListener('submit', (e)=>{
    e.preventDefault();
    handleNewProject();
})

//Gets project from form, adds it to project array
function handleNewProject(){
    const newProjectName = document.querySelector('#project-name').value
    const index = projects.push(app.createProject(newProjectName, '')) - 1
    dom.displayProjects(projects);
    dom.toggleProjectMenu();
    document.getElementById('project-form').reset();
    console.log('tasks')
    dom.displayTasks(projects[index].list, tasks, projects[index].title, index)
    addListenerToTaskButton();
}

//Clickable projects in sidebar
document.querySelector('#projects').addEventListener('click', (e)=>{
    if(e.target.dataset.pid){        
        dom.displayTasks(projects[e.target.dataset.pid].list, tasks, projects[e.target.dataset.pid].title, e.target.dataset.pid)
    }else{
        dom.displayTasks(tasks, tasks)
    }
    addListenerToTaskButton();
})

function addListenerToTaskButton(){
    document.getElementById('new-task-button').addEventListener('click', (e)=>{
        e.preventDefault();
        dom.toggleNewTask();
        if(document.getElementById('new-task-form-div')){
            addListenerToTaskFormSubmit();
        }
    })
}

function addListenerToTaskFormSubmit(){
    document.getElementById('new-task-form').addEventListener('submit', (e)=>{
        e.preventDefault();
        
        handleNewTask();
    })
}

function handleNewTask(){
    const newTaskName = document.querySelector('#new-task-title').value
    const newTaskDescription = document.querySelector('#new-task-description').value
    const newTaskDueDate = document.querySelector('#new-task-due-date').value

    const newTaskID = tasks.push(app.createTask(newTaskName,newTaskDescription,newTaskDueDate,'')) - 1
    const projectID = document.getElementById('project-title').dataset.pid
    if(projectID !== ''){
        projects[projectID].addTask(tasks[newTaskID])
        dom.displayTasks(projects[projectID].list, tasks, projects[projectID].title, projectID)
    }else{
        dom.displayTasks(tasks, tasks)
    }
}

document.getElementById('content').addEventListener('click', (e)=>{
    if(e.target.id === 'content' && document.getElementById('new-task-form-div')){
        dom.toggleNewTask();
        addListenerToTaskButton();
    }
})

document.getElementById('content').addEventListener('click', (e)=>{
    let target = e.target
    const parent = target.parentElement
    if(target.id == 'new-task-button' || target.id == 'task-form-submit'){return}
    if(parent.classList.contains('task')){target = parent}
    
    if(target.classList.contains('task')){
        if(target.classList.contains('expand')){
            target.classList.remove('expand')
            dom.removeDescription(target.dataset.tid)
        } else {
            dom.displayDescription(tasks[target.dataset.tid].description, target.dataset.tid)
            target.classList.add('expand')
        }
    }
})

dom.displayProjects(projects);
dom.displayTasks(tasks, tasks)
addListenerToTaskButton()

