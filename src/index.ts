interface IToDo {
  id: number;
  content: string;
  isDone: boolean;
  categories: string;
  tags?: string[];
}

type IToDoList = IToDo[];

const toDoList: IToDoList = [];
let idx = 1;
function createToDo({ content, categories, tags, isDone = false }: IToDo) {
  const newToDo: IToDo = {
    id: idx,
    content,
    isDone,
    categories,
    tags,
  };
  toDoList.push(newToDo);
  idx++;
  return;
}

function readToDo(id?: number) {
  if (id) return toDoList.find((toDo) => toDo.id === id);
  return toDoList;
}

function updateToDo({ id, content, categories, isDone, tags }: IToDo) {
  const oldToDo = toDoList.find((toDo) => toDo.id === id);
  const newToDo = {
    ...oldToDo,
    content,
    categories,
    isDone,
    tags,
  };
  const oldToDoIdx = toDoList.findIndex((toDo) => toDo.id === id);
  return [
    ...toDoList.slice(0, oldToDoIdx),
    newToDo,
    ...toDoList.slice(oldToDoIdx + 1),
  ];
}

type tagName = string;

function deleteAllToDos() {
  return toDoList.splice(0, toDoList.length);
}

function deleteToDo(id: number) {
  return toDoList.filter((toDo) => toDo.id !== id);
}

function deleteAllTags(id: number, tags: tagName[]) {
  return toDoList.map((toDo) => {
    if (toDo.id === id) {
      toDo = {
        ...toDo,
        tags: [],
      };
    }
  });
}

function deleteTag(id: number, targetTag: tagName) {
  return toDoList.map((toDo) => {
    if (toDo.id === id) {
      const delTag = toDo.tags?.filter((tag) => tag !== targetTag);
      toDo = {
        ...toDo,
        tags: delTag,
      };
    }
  });
}

export default toDoList;
