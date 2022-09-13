declare module "ToDoList-Module" {
  export type ToDoId = number;
  export interface DefaultIsDone extends ToDoId {
    isDone?: boolean | false;
  }
  export type TagName = string;

  export interface ToDoObj extends DefaultIsDone {
    id?: ToDoId;
    content: string;
    category: string;
    tags: TagName[];
  }
  export type ToDoList = ToDoObj[];

  export interface CreateToDo<ToDoObj> {
    ({ content, category, tags }: ToDoObj): void;
  }

  export type ReadToDoList<ToDoList> = (toDoList: ToDoList) => void;
  export type ReadToDoById<ToDoList, ToDoId> = (
    toDoList: ToDoList,
    id: ToDoId
  ) => void;

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
}
