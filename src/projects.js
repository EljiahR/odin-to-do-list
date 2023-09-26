export default function createProject(title, description, ...listObjects){
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