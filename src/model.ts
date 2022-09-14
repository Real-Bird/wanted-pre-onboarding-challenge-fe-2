import { CreateToDo } from "ToDoList/model";

let idx: ToDoId = 1;

export const createToDo: CreateToDo = (toDo: Omit<ToDo, "isDone" | "id">) => {
  const newToDo: ToDo = {
    ...toDo,
    id: idx,
    isDone: false,
  };
  idx++;
  return newToDo;
};
