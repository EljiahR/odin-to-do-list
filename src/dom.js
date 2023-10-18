function displayProjects(projects){
    projects.forEach((project, index) =>{
        if(!document.querySelector(`.project[data-pid='${index}']`)){
            const newProject = document.createElement('li');
            newProject.classList.add('project')
            newProject.innerText = project.title;
            newProject.dataset.pid = index
        
            document.querySelector("#projects").appendChild(newProject)
        }
    })
    
    
}

function displayTasks(taskList, fullList, projectTitle = 'All projects', projectID = ''){
    document.getElementById('project-title').innerText = projectTitle;
    document.getElementById('project-title').dataset.pid = projectID
    const content = document.getElementById('content');
    content.innerHTML ='';
    
    taskList.forEach(task =>{
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('task') 
        taskDiv.dataset.tid = fullList.indexOf(task);
        
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
    const content = document.getElementById('content');
    if(document.getElementById('new-task-button')){
    
        document.getElementById('new-task-button').remove();
        
        const newTaskFormDiv = document.createElement('div')
        newTaskFormDiv.classList.add('task')
        newTaskFormDiv.id ='new-task-form-div'
        
        const newTaskForm = document.createElement('form')
        newTaskForm.id = 'new-task-form'

        const taskTitleLabel = document.createElement('label')
        taskTitleLabel.innerText = 'Title: '
        taskTitleLabel.setAttribute('for', 'new-task-title')
        
        const taskTitle = document.createElement('input')
        taskTitle.type = 'text'
        taskTitle.id = 'new-task-title'
        taskTitle.setAttribute('required','')
        
        const taskDescriptionLabel = document.createElement('label')
        taskDescriptionLabel.innerText = 'Description: '
        taskDescriptionLabel.setAttribute('for', 'new-task-description')

        const taskDescription = document.createElement('input')
        taskDescription.type = 'text'
        taskDescription.id = 'new-task-description'

        const taskDueDateLabel = document.createElement('label')
        taskDueDateLabel.innerText = 'Due By: '
        taskDueDateLabel.setAttribute('for', 'new-task-due-date')

        const taskDueDate = document.createElement('input')
        taskDueDate.type = 'date'
        taskDueDate.id = 'new-task-due-date'
        taskDueDate.setAttribute('required', '')
        
        


        const taskSubmit = document.createElement('button')
        taskSubmit.type = 'submit'
        taskSubmit.value = 'Submit'
        taskSubmit.innerText = 'Submit'
        taskSubmit.id = 'task-form-submit'

        newTaskForm.append(taskTitleLabel,taskTitle, taskDescriptionLabel,taskDescription,taskDueDateLabel,taskDueDate, taskSubmit)
        newTaskFormDiv.appendChild(newTaskForm)
        content.appendChild(newTaskFormDiv)
    }else{
        document.getElementById('new-task-form-div').remove();
        const newTaskButton = document.createElement('button');
        newTaskButton.id = 'new-task-button';
        content.appendChild(newTaskButton)
    }

}

function displayDescription(description, tid){
    const taskDescription = document.createElement('p');
    taskDescription.innerText = description;
    document.querySelector(`[data-tid="${tid}"]`).appendChild(taskDescription)
}

function removeDescription(tid){
    const task = document.querySelector(`[data-tid="${tid}"]`)
    task.removeChild(task.lastChild)
}

export{displayProjects, displayTasks, toggleProjectMenu, toggleNewTask, displayDescription,removeDescription}