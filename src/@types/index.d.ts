declare module "ToDoList/model" {
  export type ToDoId = number;
  export type TagName = string;
  export type TagList = TagName[];
  export interface ToDo {
    id?: ToDoId;
    content: string;
    category: string;
    isDone?: IsDone;
    tags: TagList;
  }
  type IsDone = boolean;
  type ToDoList = ToDo[];
}

declare module "ToDoList/controller" {
  type CreateToDo = (
    newTodo: Pick<ToDo, "content" | "category" | "tags">
  ) => ToDo;
  type ReadToDoList<ToDoList> = (toDoList: ToDoList) => ToDoList;
  type ReadToDoById<ToDoList, ToDoId> = (
    toDoList: ToDoList,
    id: ToDoId
  ) => ToDo;

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
}
