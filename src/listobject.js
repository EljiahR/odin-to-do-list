export default function createListObject(title, description, dueDate, priority){
    
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