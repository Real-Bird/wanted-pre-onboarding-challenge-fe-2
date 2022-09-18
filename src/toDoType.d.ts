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
  export interface ToDoList {
    list: ToDo[];
  }

  // export type CreateToDo = (
  //   newTodo: Pick<ToDo, "content" | "category" | "tags">
  // ) => ToDo;
  // export type ReadToDoList = () => ToDoList[];
  // export type ReadToDoById<ToDoId> = (id: ToDoId) => ToDo;
  // export type ToggleIsDone<ToDoId> = (id: ToDoId) => ToDoList["list"];
  // export type UpdateToDo<ToDoId> = (
  //   id: ToDoId,
  //   updateKey: "content" | "category",
  //   updateValue: string
  // ) => ToDoList["list"];
  // export type EmptyToDoList = () => ToDoList["list"];
  // export type DeleteToDoById<ToDoId> = (id: ToDoId) => ToDoList["list"];
  // export type DeleteAllTags<ToDoId> = (id: ToDoId) => ToDoList["list"];
  // export type DeleteTagById<ToDoId, TagName> = (
  //   id: ToDoId,
  //   targetTag: TagName
  // ) => ToDoList["list"];

  export interface ToDoListController {
    readToDoList: () => ToDoList;
    readToDoById: <ToDoId>(id: ToDoId) => ToDo;
    toggleIsDone: <ToDoId>(id: ToDoId) => ToDoList["list"];
    updateToDoById: <ToDoId>(
      id: ToDoId,
      updateKey: "content" | "category",
      updateValue: string
    ) => ToDoList["list"];
    emptyToDoList: () => ToDoList["list"];
    deleteToDoById: <ToDoId>(id: ToDoId) => ToDoList["list"];
    deleteAllTags: <ToDoId>(id: ToDoId) => ToDoList["list"];
    deleteTagById: <ToDoId>(id: ToDoId, targetTag: TagName) => ToDoList["list"];
  }
}
