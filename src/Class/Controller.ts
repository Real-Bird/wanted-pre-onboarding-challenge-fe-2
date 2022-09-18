// import {
//   DeleteAllTags,
//   DeleteTagById,
//   DeleteToDoById,
//   EmptyToDoList,
//   ReadToDoById,
//   ReadToDoList,
//   TagName,
//   ToDo,
//   ToDoId,
//   ToDoListController,
//   ToggleIsDone,
//   UpdateToDo,
// } from "ToDoList";
import { ToDo, ToDoListController } from "ToDoList";
import { newList } from "../libs/util";
import List from "./List";

// class Controller extends List {
//   constructor() {
//     super();
//   }
//   readToDoList: ReadToDoList = () => {
//     const stringifyToDoList = JSON.stringify(this.list);
//     return JSON.parse(stringifyToDoList);
//   };

//   readToDoById: ReadToDoById<ToDoId> = (id) => {
//     const toDoById = this.list.find((toDo) => toDo.id === id);
//     if (toDoById) return toDoById;
//     throw Error(`Not Found ToDo by ${id}!`);
//   };

//   toggleIsDone: ToggleIsDone<ToDoId> = (id) => {
//     const oldToDo = this.list.find((toDo) => toDo.id === id);
//     if (oldToDo) {
//       const oldToDoIdx = this.list.findIndex((toDo) => toDo.id === id);
//       const newToDo: ToDo = {
//         ...oldToDo,
//         isDone: !oldToDo?.isDone,
//       };
//       const newToDoList = newList(this.list, newToDo, oldToDoIdx);
//       this.list.splice(0, this.list.length, ...newToDoList);
//       return this.list;
//     }
//     throw Error("Something wrong happens!");
//   };

//   updateToDoList: UpdateToDo<ToDoId> = (id, updateKey, updateValue) => {
//     const oldToDo = this.list.find((toDo) => toDo.id === id);
//     if (oldToDo) {
//       const oldToDoIdx = this.list.findIndex((toDo) => toDo.id === id);
//       const newToDo: ToDo = {
//         ...oldToDo,
//         content: updateKey === "content" ? updateValue : oldToDo.content,
//         category: updateKey === "category" ? updateValue : oldToDo.category,
//       };
//       const newToDoList = newList(this.list, newToDo, oldToDoIdx);
//       this.list.splice(0, this.list.length, ...newToDoList);
//       return this.list;
//     }
//     throw Error("Something wrong happens!");
//   };

//   emptyToDoList: EmptyToDoList = () => {
//     this.list.splice(0, this.list.length);
//     return this.list;
//   };

//   deleteToDo: DeleteToDoById<ToDoId> = (id) => {
//     const oldToDo = this.list.find((toDo) => toDo.id === id);
//     if (oldToDo) {
//       const oldToDoIdx = this.list.findIndex((toDo) => toDo.id === id);
//       this.list.splice(oldToDoIdx, 1);
//       return this.list;
//     }
//     throw Error("Something wrong happens!");
//   };

//   deleteAllTags: DeleteAllTags<ToDoId> = (id) => {
//     const oldToDo = this.list.find((toDo) => toDo.id === id);
//     if (oldToDo) {
//       const oldToDoIdx = this.list.findIndex((toDo) => toDo.id === id);
//       const newToDo: ToDo = {
//         ...oldToDo,
//         tags: [],
//       };
//       const newToDoList = newList(this.list, newToDo, oldToDoIdx);
//       this.list.splice(0, this.list.length, ...newToDoList);
//       return this.list;
//     }
//     throw Error("Something wrong happens!");
//   };

//   deleteTag: DeleteTagById<ToDoId, TagName> = (id, targetTag) => {
//     const oldToDo = this.list.find((toDo) => toDo.id === id);
//     if (oldToDo) {
//       const oldToDoIdx = this.list.findIndex((toDo) => toDo.id === id);
//       const newTagToDo: ToDo = {
//         ...oldToDo,
//         tags: oldToDo.tags.filter((tag) => tag !== targetTag),
//       };
//       const newToDoList = newList(this.list, newTagToDo, oldToDoIdx);
//       this.list.splice(0, this.list.length, ...newToDoList);
//       return this.list;
//     }
//     throw Error("Something wrong happens!");
//   };
// }

class Controller extends List implements ToDoListController {
  constructor() {
    super();
  }
  readToDoList: ToDoListController["readToDoList"] = () => {
    const stringifyToDoList = JSON.stringify(this.list);
    return JSON.parse(stringifyToDoList);
  };

  readToDoById: ToDoListController["readToDoById"] = (id) => {
    const toDoById = this.list.find((toDo) => toDo.id === id);
    if (toDoById) return toDoById;
    throw Error(`Not Found ToDo by ${id}!`);
  };

  toggleIsDone: ToDoListController["toggleIsDone"] = (id) => {
    const oldToDo = this.list.find((toDo) => toDo.id === id);
    if (oldToDo) {
      const oldToDoIdx = this.list.findIndex((toDo) => toDo.id === id);
      const newToDo: ToDo = {
        ...oldToDo,
        isDone: !oldToDo?.isDone,
      };
      const newToDoList = newList(this.list, newToDo, oldToDoIdx);
      this.list.splice(0, this.list.length, ...newToDoList);
      return this.list;
    }
    throw Error("Something wrong happens!");
  };

  updateToDoById: ToDoListController["updateToDoById"] = (
    id,
    updateKey,
    updateValue
  ) => {
    const oldToDo = this.list.find((toDo) => toDo.id === id);
    if (oldToDo) {
      const oldToDoIdx = this.list.findIndex((toDo) => toDo.id === id);
      const newToDo: ToDo = {
        ...oldToDo,
        content: updateKey === "content" ? updateValue : oldToDo.content,
        category: updateKey === "category" ? updateValue : oldToDo.category,
      };
      const newToDoList = newList(this.list, newToDo, oldToDoIdx);
      this.list.splice(0, this.list.length, ...newToDoList);
      return this.list;
    }
    throw Error("Something wrong happens!");
  };

  emptyToDoList: ToDoListController["emptyToDoList"] = () => {
    this.list.splice(0, this.list.length);
    return this.list;
  };

  deleteToDoById: ToDoListController["deleteToDoById"] = (id) => {
    const oldToDo = this.list.find((toDo) => toDo.id === id);
    if (oldToDo) {
      const oldToDoIdx = this.list.findIndex((toDo) => toDo.id === id);
      this.list.splice(oldToDoIdx, 1);
      return this.list;
    }
    throw Error("Something wrong happens!");
  };

  deleteAllTags: ToDoListController["deleteAllTags"] = (id) => {
    const oldToDo = this.list.find((toDo) => toDo.id === id);
    if (oldToDo) {
      const oldToDoIdx = this.list.findIndex((toDo) => toDo.id === id);
      const newToDo: ToDo = {
        ...oldToDo,
        tags: [],
      };
      const newToDoList = newList(this.list, newToDo, oldToDoIdx);
      this.list.splice(0, this.list.length, ...newToDoList);
      return this.list;
    }
    throw Error("Something wrong happens!");
  };

  deleteTagById: ToDoListController["deleteTagById"] = (id, targetTag) => {
    const oldToDo = this.list.find((toDo) => toDo.id === id);
    if (oldToDo) {
      const oldToDoIdx = this.list.findIndex((toDo) => toDo.id === id);
      const newTagToDo: ToDo = {
        ...oldToDo,
        tags: oldToDo.tags.filter((tag) => tag !== targetTag),
      };
      const newToDoList = newList(this.list, newTagToDo, oldToDoIdx);
      this.list.splice(0, this.list.length, ...newToDoList);
      return this.list;
    }
    throw Error("Something wrong happens!");
  };
}

export default Controller;
