declare module "ToDoList/model" {
  export interface CreateToDo {
    ({ content, category, tags }: ToDo): ToDo;
  }
}

declare module "ToDoList/controller" {
  export type ReadToDoList = (toDoList: ToDoList) => ToDoList;
  export type ReadToDoById = (toDoList: ToDoList, id: ToDoId) => ToDo;

  export type ToggleIsDone = (toDoList: ToDoList, id: ToDoId) => ToDoList;
  export type UpdateToDo = (
    toDoList: ToDoList,
    id: ToDoId,
    updateKey: "content" | "category",
    updateValue: string
  ) => ToDoList;

  export type EmptyToDoList = (toDoList: ToDoList) => ToDoList;
  export type DeleteToDoById = (toDoList: ToDoList, id: ToDoId) => ToDoList;
  export type DeleteAllTags = (toDoList: ToDoList, id: ToDoId) => ToDoList;
  export type DeleteTagById = (
    toDoList: ToDoList,
    id: ToDoId,
    targetTag: TagName
  ) => ToDoList;
}
