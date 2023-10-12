function addProject(projectName, projectIndex){
    let newProject = document.createElement('li');
    newProject.innerText = projectName;
    newProject.dataset.key = projectIndex

    document.querySelector("#projects").appendChild(newProject)
    
}

function addTask(task, taskIndex){
    let taskDiv = document.createElement('div');
    taskDiv.classList.add('task')
    taskDiv.dataset.key = taskIndex;
    let taskTitle = document.createElement('h2');
    taskTitle.innerText = task.title;
    let taskDate = document.createElement('p');
    taskDate.innerText = task.dueDate;
    
    taskDiv.append(taskTitle, taskDate);
    document.querySelector('#content').appendChild(taskDiv)
}

function toggleProjectMenu(){

    const projectMenu = document.getElementById('project-menu-overlay')
    projectMenu.classList.contains('hidden') ? projectMenu.classList.remove('hidden') : projectMenu.classList.add('hidden')
    
}

export{addProject, addTask, toggleProjectMenu}