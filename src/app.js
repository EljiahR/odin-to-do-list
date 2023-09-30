function createProject(title, description, ...listObjects){
    class Project{
        constructor(title,description,...listObjects){
            this.title = title;
            this.description = description;
            this.list = [...listObjects];
        }
        
        addObject(listObject){
            this.list = [...this.list, listObject]
        }

    }
    return new Project(title, description, ...listObjects)
}

function createListObject(title, description, dueDate, priority){
    
    class listObject{
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
    return new listObject(title,description,dueDate,priority);
}

export{createProject, createListObject}