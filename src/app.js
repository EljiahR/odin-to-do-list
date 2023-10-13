function createProject(title, description, ...listObjects){
    class Project{
        constructor(title,description,...listObjects){
            this.title = title;
            this.description = description;
            this.list = [...listObjects];
        }
        
        addTask(...task){
            this.list = [...this.list, ...task]
        }

    }
    return new Project(title, description, ...listObjects)
}

function createTask(title, description, dueDate, priority){
    
    class Task{
        constructor(title, description, dueDate, priority){
            this.title = title;
            this.description = description;
            this.dueDate = dueDate;
            this.priority = priority;
        }
        setTitle(newTitle){
            this.title = newTitle;
        }
        setDescription(newDescription){
            this.description = newDescription;
        }
        setDueDate(newDueDate){
            this.dueDate = newDueDate;
        }
        setPriority(newPriority){
            this.priority = newPriority;
        }
        
    }
    return new Task(title,description,dueDate,priority);
}

export{createProject, createTask}