export function newList<T, S>(list: T[], newElement: S, oldListIdx: number) {
  return [
    ...list.slice(0, oldListIdx),
    newElement,
    ...list.slice(oldListIdx + 1),
  ];
}
