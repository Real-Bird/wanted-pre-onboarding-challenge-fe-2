import { TagName, ToDo, ToDoId } from "ToDoList";
import { newList } from "../libs/util";

type ToDoList = ToDo[];

type ReadToDoList<ToDoList> = (toDoList: ToDoList) => ToDoList;
type ReadToDoById<ToDoList, ToDoId> = (toDoList: ToDoList, id: ToDoId) => ToDo;

type ToggleIsDone<ToDoList, ToDoId> = (
  toDoList: ToDoList,
  id: ToDoId
) => ToDoList;
type UpdateToDo<ToDoList, ToDoId> = (
  toDoList: ToDoList,
  id: ToDoId,
  updateKey: "content" | "category",
  updateValue: string
) => ToDoList;

type EmptyToDoList<ToDoList> = (toDoList: ToDoList) => ToDoList;
type DeleteToDoById<ToDoList, ToDoId> = (
  toDoList: ToDoList,
  id: ToDoId
) => ToDoList;
type DeleteAllTags<ToDoList, ToDoId> = (
  toDoList: ToDoList,
  id: ToDoId
) => ToDoList;
type DeleteTagById<ToDoList, ToDoId, TagName> = (
  toDoList: ToDoList,
  id: ToDoId,
  targetTag: TagName
) => ToDoList;

export const readToDoList: ReadToDoList<ToDoList> = (toDoList) => {
  const stringifyToDoList = JSON.stringify(toDoList);
  return JSON.parse(stringifyToDoList);
};

export const readToDoById: ReadToDoById<ToDoList, ToDoId> = (toDoList, id) => {
  const toDoById = toDoList.find((toDo) => toDo.id === id);
  if (toDoById) return toDoById;
  throw Error(`Not Found ToDo by ${id}!`);
};

export const toggleIsDone: ToggleIsDone<ToDoList, ToDoId> = (toDoList, id) => {
  const oldToDo = toDoList.find((toDo) => toDo.id === id);
  if (oldToDo) {
    const oldToDoIdx = toDoList.findIndex((toDo) => toDo.id === id);
    const newToDo: ToDo = {
      ...oldToDo,
      isDone: !oldToDo?.isDone,
    };
    const newToDoList = newList(toDoList, newToDo, oldToDoIdx);
    toDoList.splice(0, toDoList.length, ...newToDoList);
    return toDoList;
  }
  throw Error("Something wrong happens!");
};

export const updateToDoList: UpdateToDo<ToDoList, ToDoId> = (
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
    toDoList.splice(0, toDoList.length, ...newToDoList);
    return toDoList;
  }
  throw Error("Something wrong happens!");
};

export const emptyToDoList: EmptyToDoList<ToDoList> = (toDoList) => {
  toDoList.splice(0, toDoList.length);
  return toDoList;
};

export const deleteToDo: DeleteToDoById<ToDoList, ToDoId> = (toDoList, id) => {
  const oldToDo = toDoList.find((toDo) => toDo.id === id);
  if (oldToDo) {
    const oldToDoIdx = toDoList.findIndex((toDo) => toDo.id === id);
    toDoList.splice(oldToDoIdx, 1);
    return toDoList;
  }
  throw Error("Something wrong happens!");
};

export const deleteAllTags: DeleteAllTags<ToDoList, ToDoId> = (
  toDoList,
  id
) => {
  const oldToDo = toDoList.find((toDo) => toDo.id === id);
  if (oldToDo) {
    const oldToDoIdx = toDoList.findIndex((toDo) => toDo.id === id);
    const newToDo: ToDo = {
      ...oldToDo,
      tags: [],
    };
    const newToDoList = newList(toDoList, newToDo, oldToDoIdx);
    toDoList.splice(0, toDoList.length, ...newToDoList);
    return toDoList;
  }
  throw Error("Something wrong happens!");
};

export const deleteTag: DeleteTagById<ToDoList, ToDoId, TagName> = (
  toDoList,
  id,
  targetTag
) => {
  const oldToDo = toDoList.find((toDo) => toDo.id === id);
  if (oldToDo) {
    const oldToDoIdx = toDoList.findIndex((toDo) => toDo.id === id);
    const newTagToDo: ToDo = {
      ...oldToDo,
      tags: oldToDo.tags.filter((tag) => tag !== targetTag),
    };
    const newToDoList = newList(toDoList, newTagToDo, oldToDoIdx);
    toDoList.splice(0, toDoList.length, ...newToDoList);
    return toDoList;
  }
  throw Error("Something wrong happens!");
};
