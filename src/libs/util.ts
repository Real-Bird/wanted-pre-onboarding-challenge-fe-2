export function newList(
  list: ToDoList,
  newElement: ToDo,
  oldListIdx: number
): ToDoList {
  const newToDoList = [
    ...list.slice(0, oldListIdx),
    newElement,
    ...list.slice(oldListIdx + 1),
  ];
  return newToDoList;
}

export function findTag(tags: TagList, tagName: string) {
  const tagIdx = tags.findIndex((tag) => tag === tagName);
  return tagIdx;
}
