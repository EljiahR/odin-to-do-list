import createListObject from "./ListObject";
import createProject from "./projects";


const allProjects = createProject('Home', 'all projects');
const newItem = createListObject('title', 'description', 'date', 'priorty')
allProjects.addObject(newItem)

newItem.setTitle('NEW TITLE');
console.log(allProjects)