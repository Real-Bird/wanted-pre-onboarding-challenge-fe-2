import {
  CreateToDo,
  ReadToDoById,
  ReadToDoList,
  ToDoId,
  ToDoList,
  ToDoObj,
  ToggleIsDone,
  UpdateToDo,
} from "ToDoList-Module";
import { updateToDoList } from "./libs/util";

const toDoList = new Array<ToDoObj>();
let idx = 1;

const createToDo: CreateToDo<ToDoObj> = ({
  id,
  content,
  category,
  tags,
}: ToDoObj) => {
  const newToDo: ToDoObj = {
    id,
    content,
    category,
    tags,
    isDone: false,
  };
  toDoList.push(newToDo);
  idx++;
};

const readToDoList: ReadToDoList<ToDoList> = (toDoList) => {
  console.log(`All ToDos : ${toDoList}`);
};

const readToDoById: ReadToDoById<ToDoList, number> = (toDoList, id) => {
  const toDoById = toDoList.find((toDo) => toDo.id === id);
  console.log(`ToDo ${id} : ${JSON.stringify(toDoById)}`);
};

enum ToDoObjProps {
  "CONTENT" = "CONTENT",
  "CATEGORY" = "CATEGORY",
  "ISDONE" = "ISDONE",
}

const toggleIsDone: ToggleIsDone<ToDoList, ToDoId> = (toDoList, id) => {
  const oldToDo = toDoList.find((toDo) => toDo.id === id);
  if (oldToDo) {
    const oldToDoIdx = toDoList.findIndex((toDo) => toDo.id === id);
    const newToDo: ToDoObj = {
      ...oldToDo,
      isDone: !oldToDo?.isDone,
    };
    const newToDoList = updateToDoList(toDoList, newToDo, oldToDoIdx);
    toDoList.splice(0, toDoList.length);
    toDoList.concat(newToDoList);
    return toDoList;
  }
  throw Error("Something wrong happens!");
};

const UpdateToDoList: UpdateToDo<ToDoList, ToDoId> = (
  toDoList,
  id,
  updateKey,
  updateValue
) => {
  const oldToDo = toDoList.find((toDo) => toDo.id === id);
  if (oldToDo) {
    const oldToDoIdx = toDoList.findIndex((toDo) => toDo.id === id);
    const newToDo: ToDoObj = {
      ...oldToDo,
      content: updateKey === "content" ? updateValue : oldToDo.content,
      category: updateKey === "category" ? updateValue : oldToDo.category,
    };
    const newToDoList = updateToDoList(toDoList, newToDo, oldToDoIdx);
    toDoList.splice(0, toDoList.length);
    toDoList.concat(newToDoList);
    return toDoList;
  }
  throw Error("Something wrong happens!");
};

function deleteAllToDos() {
  toDoList.splice(0, toDoList.length);
  return console.log(`Empty List : ${JSON.stringify(toDoList)}`);
}

function deleteToDo(id: number) {
  const delToDoById = toDoList.filter((toDo) => toDo.id !== id);
  return console.log(`Delete ToDo ${id} : ${JSON.stringify(delToDoById)}`);
}

function deleteAllTags(id: number) {
  const delAllTagsById = toDoList.find((toDo) => {
    if (toDo.id === id) {
      toDo = {
        ...toDo,
        tags: [],
      };
    }
  });
  return console.log(
    `Empty Tags ToDo ${id} : ${JSON.stringify(delAllTagsById)}`
  );
}

function deleteTag(id: number, targetTag: string) {
  return toDoList.map((toDo) => {
    if (toDo.id === id) {
      const delTag = toDo.tags?.filter((tag) => tag !== targetTag);
      toDo = {
        ...toDo,
        tags: delTag,
      };
    }
  });
}

createToDo({
  id: idx,
  content: "hi",
  category: "bow",
  tags: ["test"],
});

createToDo({
  id: idx,
  content: "hello",
  category: "bow",
  tags: ["test"],
});

readToDoList(toDoList);
readToDoById(toDoList, 2);

toggleIsDone(toDoList, 2);
readToDoById(toDoList, 2);

deleteAllToDos();

createToDo({
  content: "hi",
  category: "bow",
  tags: ["test"],
});

createToDo({
  content: "hello",
  category: "bow",
  tags: ["test"],
});

createToDo({
  content: "bye",
  category: "shake",
  tags: ["behave"],
});

readToDoList(toDoList);

// deleteToDo(4);

UpdateToDoList(toDoList, 5, "content", "update content");
readToDoList(toDoList);

// deleteAllTags(5);
