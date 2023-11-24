import './style.css';
import Project from './data/project';

const dod = new Project('dod');

console.log(dod);

dod.createToDo('pop');
dod.createToDo('plop');
dod.createToDo('Rob a bank', '11-11-2023', 'Get a gun and rob the bank');
dod.deleteToDo('plop');
dod.updateToDo('pop','title','Ploppers');