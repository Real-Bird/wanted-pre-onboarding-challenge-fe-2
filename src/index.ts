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

console.log(readToDoList(toDoList));
console.log(readToDoById(toDoList, 2));

toggleIsDone(toDoList, 2);
console.log(readToDoById(toDoList, 2));

emptyToDoList(toDoList);
console.log(readToDoList);

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

console.log(readToDoList(toDoList));

deleteToDo(toDoList, 4);
console.log(readToDoList(toDoList));

updateToDoList(toDoList, 5, "content", "update content");
console.log(readToDoList(toDoList));

updateToDoList(toDoList, 5, "category", "update category");
console.log(readToDoList(toDoList));

deleteAllTags(toDoList, 4);
console.log(readToDoById(toDoList, 4));

deleteTag(toDoList, 5, "behave");
console.log(readToDoById(toDoList, 5));
