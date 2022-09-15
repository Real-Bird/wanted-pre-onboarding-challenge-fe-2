import { ToDo, ToDoList } from "ToDoList";
import {
  deleteAllTags,
  deleteTag,
  deleteToDo,
  emptyToDoList,
  readToDoById,
  readToDoList,
  toggleIsDone,
  updateToDoList,
} from "./controller";
import { createToDo } from "./model";

const toDoList: ToDoList = new Array<ToDo>();

toDoList.push(
  createToDo({
    content: "hi",
    category: "bow",
    tags: ["test"],
  })
);
toDoList.push(
  createToDo({
    content: "hello",
    category: "bow",
    tags: ["test"],
  })
);

console.log("All ToDoList : ", readToDoList(toDoList));
console.log("ToDo 2 : ", readToDoById(toDoList, 2));

toggleIsDone(toDoList, 2);
console.log("ToDo 2 : ", readToDoById(toDoList, 2));

emptyToDoList(toDoList);
console.log("Empty ToDoList : ", readToDoList(toDoList));

toDoList.push(
  createToDo({
    content: "hi",
    category: "bow",
    tags: ["test"],
  })
);

toDoList.push(
  createToDo({
    content: "hello",
    category: "bow",
    tags: ["test"],
  })
);

toDoList.push(
  createToDo({
    content: "bye",
    category: "shake",
    tags: ["behave", "willDelTag"],
  })
);

console.log("All ToDoList : ", readToDoList(toDoList));

deleteToDo(toDoList, 4);
console.log("All ToDoList except 4 : ", readToDoList(toDoList));

updateToDoList(toDoList, 5, "content", "update content");
console.log("Update Content ToDo 5 : ", readToDoList(toDoList));

updateToDoList(toDoList, 5, "category", "update category");
console.log("Update Category ToDo 5 : ", readToDoList(toDoList));

deleteAllTags(toDoList, 4);
console.log("Delete All Tags ToDo 4 : ", readToDoById(toDoList, 4));

deleteTag(toDoList, 5, "behave");
console.log("Delete Tag 'behave' ToDo 5 : ", readToDoById(toDoList, 5));
