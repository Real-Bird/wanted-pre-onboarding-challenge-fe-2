import Controller from "./Class/Controller";
import Model from "./Class/Model";

const {
  readToDoList,
  readToDoById,
  deleteAllTags,
  deleteTagById,
  deleteToDoById,
  emptyToDoList,
  toggleIsDone,
  updateToDoById,
  pushToDo,
} = new Controller();

const { toDo: toDo1 } = new Model("hello", "bow", ["test"]);
const { toDo: toDo2 } = new Model("hello", "bow", ["test"]);

pushToDo(toDo1);
pushToDo(toDo2);

console.log("'All ToDoList' : ", readToDoList());
console.log("'ToDo 2 ': ", readToDoById(2));

toggleIsDone(2);
console.log("'ToDo 2' : ", readToDoById(2));

emptyToDoList();
console.log("'Empty ToDoList' : ", readToDoList());

const { toDo: toDo3 } = new Model("hi", "bow", ["test"]);
const { toDo: toDo4 } = new Model("hello", "bow", ["test"]);
const { toDo: toDo5 } = new Model("bye", "shake", ["behave", "willDelTag"]);
pushToDo(toDo3);
pushToDo(toDo4);
pushToDo(toDo5);

console.log("'All ToDoList' : ", readToDoList());

deleteToDoById(4);
console.log("'All ToDoList except 4' : ", readToDoList());

updateToDoById(5, "content", "update content");
console.log("'Update Content ToDo 5' : ", readToDoList());

updateToDoById(5, "category", "update category");
console.log("'Update Category ToDo 5' : ", readToDoById(5));

deleteAllTags(3);
console.log("'Delete All Tags ToDo 3' : ", readToDoById(3));

deleteTagById(5, "behave");
console.log("'Delete Tag 'behave' ToDo 5' : ", readToDoById(5));

console.log("'All ToDoList' : ", readToDoList());
