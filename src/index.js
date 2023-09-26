import createListObject from "./ListObject";

const newItem = createListObject('title', 'description', 'date', 'priorty')
newItem.setTitle('NEW TITLE');
console.log(newItem)
