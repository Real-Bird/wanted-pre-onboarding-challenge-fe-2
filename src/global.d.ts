export {};

declare global {
  type ToDoId = number;
  type TagName = string;
  type TagList = TagName[];
  interface ToDo {
    id?: ToDoId;
    content: string;
    category: string;
    isDone?: boolean;
    tags: TagList;
  }
  interface ToDoList {
    list: ToDo[];
  }
}
