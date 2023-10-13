function displayProjects(projects){
    projects.forEach((project, index) =>{
        if(!document.querySelector(`.project[data-key='${index}']`)){
            const newProject = document.createElement('li');
            newProject.classList.add('project')
            newProject.innerText = project.title;
            newProject.dataset.key = index
        
            document.querySelector("#projects").appendChild(newProject)
        }
    })
    
    
}

function displayTasks(taskList, fullList){
    document.getElementById('content').innerHTML ='';
    taskList.forEach(task =>{
        let taskDiv = document.createElement('div');
        taskDiv.classList.add('task')
        taskDiv.dataset.key = fullList.indexOf(task);
        let taskTitle = document.createElement('h2');
        taskTitle.innerText = task.title;
        let taskDate = document.createElement('p');
        taskDate.innerText = task.dueDate;
        
        taskDiv.append(taskTitle, taskDate);
        document.querySelector('#content').appendChild(taskDiv)
    })
}

function toggleProjectMenu(){

    const projectMenu = document.getElementById('project-menu-overlay')
    projectMenu.classList.contains('hidden') ? projectMenu.classList.remove('hidden') : projectMenu.classList.add('hidden')
    
}

export{displayProjects, displayTasks, toggleProjectMenu}