import { ToDoList, ToDoObj } from "ToDoList-Module";

export function updateToDoList(
  toDoList: ToDoList,
  newToDo: ToDoObj,
  oldToDoIdx: number
): ToDoList {
  const newToDoList = [
    ...toDoList.slice(0, oldToDoIdx),
    newToDo,
    ...toDoList.slice(oldToDoIdx + 1),
  ];
  return newToDoList;
}
