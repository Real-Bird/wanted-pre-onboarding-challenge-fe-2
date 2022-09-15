export function newList<T, S>(list: T[], newElement: S, oldListIdx: number) {
  const newToDoList = [
    ...list.slice(0, oldListIdx),
    newElement,
    ...list.slice(oldListIdx + 1),
  ];
  return newToDoList;
}
