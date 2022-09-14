export {};

declare global {
  type ToDoId = number;
  type IsDone = boolean;
  type TagName = string;
  type TagList = TagName[];
  interface ToDo {
    id?: ToDoId;
    content: string;
    category: string;
    isDone?: IsDone;
    tags: TagList;
  }
  type ToDoList = ToDo[];
}
