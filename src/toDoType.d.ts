declare module "ToDoList" {
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
