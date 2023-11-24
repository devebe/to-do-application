import './style.css';
import Project from './data/project';
import ToDo from './data/todo';

const project = new Project('project');

project.appendToList(new ToDo('Get shit done','01-01-2024'));
project.appendToList(new ToDo('Wash my lingerie', '12-32-2024'));
project.deleteFromList('Get shit done');
project.updateListItem('Wash my lingerie', 'title', 'Wash my underwear');

console.log(project);