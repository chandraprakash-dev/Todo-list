import { todoList, Todo } from "./todo";
import { projectList, Project } from "./project";
import { projectRender } from "./projectDisplay";
import addTodo from "./todos";
import addProject from "./projects";
import hideDropdowns from "./windowEvents";
import todoDropdownOptionsEventListeners from "./todoDropdownOptions";
import projectDropdownOptionsEventListeners from "./projectDropdownOptions";

// Create a default project 'home'
let home = Project("Home");
home.addNotes("this is a default project");
// console.log(home.getNotes());
projectList.add(home);

// Create a To do and add it to the todoList

let todo1 = Todo("todo1", "today", "high");
todo1.addNotes("this is notes");
todo1.setPriority("low");
todoList.add(todo1);
console.log(todo1.getPriority());
console.log(todoList.getList());
console.log(todoList.getTodo("todo1"));

// Add the To do to its respective project
home.addTodo(todo1);

// Add event listeners to dropdown options of a to do
todoDropdownOptionsEventListeners();

// Render the default project
projectRender.render(home);
// Add event listeners to dropdown options of a project
projectDropdownOptionsEventListeners();

const projectElement = document.querySelector(".project");

// Select the default project
projectRender.selectProject(projectElement, home);

const addproject = document.querySelector(".add-project");
addproject.addEventListener("click", addProject);

//
//
// // Operations on a to do
// todo1.edit('todo2', 'tomorrow', 'high', 'Home');
// console.log(todoList.getTodo('todo2'));
// console.log(home.getTodos());
//
// todo1.moveToProject('Home');
// console.log(home.getTodos());
//
// todo1.reschedule('today');
//
// let todo2 = Todo('todo2', 'do todo', 'today', 'misc');
// todo1.addToChecklist(todo2);
// console.log(todoList.getTodo('todo2'));
//
// console.log('output for mark');
// todo1.markAsCompleted();
// // todoList.remove(todo1);
//
// todo2.markAsCompleted();
// todo1.markAsCompleted();
// console.log(todo1.getTodo());
// let subtodos = todo1.getTodo().checkList;
// console.log(subtodos[0].getTodo());
//
// // operations on a project
// console.log('trying to remove project from projectList');
// console.log(projectList.getList());
// console.log(todoList.getList());
// // projectList.remove('Home');
// console.log(todoList.getList());
// console.log(projectList.getList());

// home.edit('Bome');
