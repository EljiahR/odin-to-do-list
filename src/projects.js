export default function createProject(title, description, ...listObjects){
    class Project{
        constructor(title,description,...listObjects){
            this.title = title;
            this.description = description;
            this.list = [...listObjects];
        }
        

    }
    return new Project(title, description, ...listObjects)
}