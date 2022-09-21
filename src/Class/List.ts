class List implements ToDoList {
  public list: ToDo[];
  constructor() {
    this.list = [];
  }
  pushToDo = (toDo: ToDo) => {
    this.list.push(toDo); // push 하지 못하도록 하는 방법을 타이핑하는 게 좋다.
  };
}

export default List;
