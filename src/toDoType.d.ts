declare module "ToDoList" {
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
  export type ToDoList = ToDo[];

  export type CreateToDo = (
    newTodo: Pick<ToDo, "content" | "category" | "tags">
  ) => ToDo;
  export type ReadToDoList<ToDoList> = (toDoList: ToDoList) => ToDoList;
  export type ReadToDoById<ToDoList, ToDoId> = (
    toDoList: ToDoList,
    id: ToDoId
  ) => ToDo;

  export type ToggleIsDone<ToDoList, ToDoId> = (
    toDoList: ToDoList,
    id: ToDoId
  ) => ToDoList;
  export type UpdateToDo<ToDoList, ToDoId> = (
    toDoList: ToDoList,
    id: ToDoId,
    updateKey: "content" | "category",
    updateValue: string
  ) => ToDoList;

  export type EmptyToDoList<ToDoList> = (toDoList: ToDoList) => ToDoList;
  export type DeleteToDoById<ToDoList, ToDoId> = (
    toDoList: ToDoList,
    id: ToDoId
  ) => ToDoList;
  export type DeleteAllTags<ToDoList, ToDoId> = (
    toDoList: ToDoList,
    id: ToDoId
  ) => ToDoList;
  export type DeleteTagById<ToDoList, ToDoId, TagName> = (
    toDoList: ToDoList,
    id: ToDoId,
    targetTag: TagName
  ) => ToDoList;
}
