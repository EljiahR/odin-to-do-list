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

function displayTasks(taskList, fullList, projectTitle = 'All projects'){
    document.getElementById('project-title').innerText = projectTitle;
    const content = document.getElementById('content');
    content.innerHTML ='';
    
    taskList.forEach(task =>{
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('task') 
        taskDiv.dataset.key = fullList.indexOf(task);
        
        const taskTitle = document.createElement('h2');
        taskTitle.innerText = task.title;
        
        const taskDate = document.createElement('p');
        taskDate.innerText = `Due: ${task.dueDate}`;
        
        taskDiv.append(taskTitle, taskDate);
        content.appendChild(taskDiv)
    })
    const newTaskButton = document.createElement('button');
    newTaskButton.id = 'new-task-button';
    content.appendChild(newTaskButton)

}

function toggleProjectMenu(){

    const projectMenu = document.getElementById('project-menu-overlay')
    projectMenu.classList.contains('hidden') ? projectMenu.classList.remove('hidden') : projectMenu.classList.add('hidden')
    
}

function toggleNewTask(){
    document.getElementById('new-task-button').remove();
}

export{displayProjects, displayTasks, toggleProjectMenu, toggleNewTask}