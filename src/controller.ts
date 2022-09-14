import {
  DeleteAllTags,
  DeleteTagById,
  DeleteToDoById,
  EmptyToDoList,
  ReadToDoById,
  ReadToDoList,
  ToggleIsDone,
  UpdateToDo,
} from "ToDoList/controller";
import { findTag, newList } from "./libs/util";

export const readToDoList: ReadToDoList = (toDoList) => {
  return toDoList;
};

export const readToDoById: ReadToDoById = (toDoList, id) => {
  const toDoById = toDoList.find((toDo) => toDo.id === id);
  if (toDoById) return toDoById;
  throw Error(`Not Found ToDo by ${id}!`);
};

export const toggleIsDone: ToggleIsDone = (toDoList, id) => {
  const oldToDo = toDoList.find((toDo) => toDo.id === id);
  if (oldToDo) {
    const oldToDoIdx = toDoList.findIndex((toDo) => toDo.id === id);
    const newToDo: ToDo = {
      ...oldToDo,
      isDone: !oldToDo?.isDone,
    };
    const newToDoList = newList(toDoList, newToDo, oldToDoIdx);
    toDoList.splice(0, toDoList.length);
    toDoList.concat(newToDoList);
    return toDoList;
  }
  throw Error("Something wrong happens!");
};

export const updateToDoList: UpdateToDo = (
  toDoList,
  id,
  updateKey,
  updateValue
) => {
  const oldToDo = toDoList.find((toDo) => toDo.id === id);
  if (oldToDo) {
    const oldToDoIdx = toDoList.findIndex((toDo) => toDo.id === id);
    const newToDo: ToDo = {
      ...oldToDo,
      content: updateKey === "content" ? updateValue : oldToDo.content,
      category: updateKey === "category" ? updateValue : oldToDo.category,
    };
    const newToDoList = newList(toDoList, newToDo, oldToDoIdx);
    toDoList.splice(0, toDoList.length);
    toDoList.concat(newToDoList);
    return toDoList;
  }
  throw Error("Something wrong happens!");
};

export const emptyToDoList: EmptyToDoList = (toDoList) => {
  toDoList.splice(0, toDoList.length);
  return toDoList;
};

export const deleteToDo: DeleteToDoById = (toDoList, id) => {
  const delToDoById = toDoList.filter((toDo) => toDo.id !== id);
  return delToDoById;
};

export const deleteAllTags: DeleteAllTags = (toDoList, id) => {
  const oldToDo = toDoList.find((toDo) => toDo.id === id);
  if (oldToDo) {
    const oldToDoIdx = toDoList.findIndex((toDo) => toDo.id === id);
    const newToDo: ToDo = {
      ...oldToDo,
      tags: [],
    };
    const newToDoList = newList(toDoList, newToDo, oldToDoIdx);
    toDoList.splice(0, toDoList.length);
    toDoList.concat(newToDoList);
    return toDoList;
  }
  throw Error("Something wrong happens!");
};

export const deleteTag: DeleteTagById = (toDoList, id, targetTag) => {
  const oldToDo = toDoList.find((toDo) => toDo.id === id);
  if (oldToDo) {
    const oldToDoIdx = toDoList.findIndex((toDo) => toDo.id === id);
    const targetTagIdx = findTag(oldToDo.tags, targetTag);
    const newTagToDo: ToDo = {
      ...oldToDo,
      tags: oldToDo.tags.splice(targetTagIdx, 1),
    };
    const newToDoList = newList(toDoList, newTagToDo, oldToDoIdx);
    toDoList.splice(0, toDoList.length);
    toDoList.concat(newToDoList);
    return toDoList;
  }
  throw Error("Something wrong happens!");
};
