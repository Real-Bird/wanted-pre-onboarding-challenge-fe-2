interface IToDo {
  id?: number;
  content: string;
  isDone: boolean;
  category: string;
  tags?: string[];
}

type IToDoList = IToDo[];

const toDoList: IToDoList = [];
let idx = 1;
function createToDo({ content, category, tags, isDone = false }: IToDo) {
  const newToDo: IToDo = {
    id: idx,
    content,
    isDone,
    category,
    tags,
  };
  toDoList.push(newToDo);
  idx++;
  return;
}

function readToDo(id?: number) {
  if (id) {
    const toDoById = toDoList.find((toDo) => toDo.id === id);
    return console.log(`ToDo ${id} : ${JSON.stringify(toDoById)}`);
  }
  return console.log(`All ToDos : ${JSON.stringify(toDoList)}`);
}

function updateToDo({ id, content, category, isDone, tags }: IToDo) {
  const oldToDo = toDoList.find((toDo) => toDo.id === id);
  const newToDo = {
    ...oldToDo,
    content,
    category,
    isDone,
    tags,
  };
  const oldToDoIdx = toDoList.findIndex((toDo) => toDo.id === id);
  const newToDoList = [
    ...toDoList.slice(0, oldToDoIdx),
    newToDo,
    ...toDoList.slice(oldToDoIdx + 1),
  ];
  return console.log(`update ToDo ${id} : ${JSON.stringify(newToDoList)}`);
}

type tagName = string;

function deleteAllToDos() {
  toDoList.splice(0, toDoList.length);
  return console.log(`Empty List : ${JSON.stringify(toDoList)}`);
}

function deleteToDo(id: number) {
  const delToDoById = toDoList.filter((toDo) => toDo.id !== id);
  return console.log(`Delete ToDo ${id} : ${JSON.stringify(delToDoById)}`);
}

function deleteAllTags(id: number) {
  const delAllTagsById = toDoList.find((toDo) => {
    if (toDo.id === id) {
      toDo = {
        ...toDo,
        tags: [],
      };
    }
  });
  return console.log(
    `Empty Tags ToDo ${id} : ${JSON.stringify(delAllTagsById)}`
  );
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

createToDo({
  id: idx,
  content: "hi",
  category: "bow",
  tags: ["test"],
  isDone: false,
});

createToDo({
  id: idx,
  content: "hello",
  category: "bow",
  tags: ["test"],
  isDone: false,
});

readToDo();
readToDo(2);

updateToDo({
  id: 1,
  content: "hi",
  category: "bow",
  tags: ["test"],
  isDone: true,
});

deleteAllToDos();

createToDo({
  id: idx,
  content: "hi",
  category: "bow",
  tags: ["test"],
  isDone: false,
});

createToDo({
  id: idx,
  content: "hello",
  category: "bow",
  tags: ["test"],
  isDone: false,
});

createToDo({
  id: idx,
  content: "bye",
  category: "shake",
  tags: ["behave"],
  isDone: false,
});

readToDo();

deleteToDo(4);

updateToDo({
  id: 5,
  content: "hi",
  category: "bow",
  tags: ["test", "behave"],
  isDone: true,
});

deleteAllTags(5);
