class List implements ToDoList {
  public list: ToDo[];
  constructor() {
    this.list = [];
  }
  pushToDo = (toDo: ToDo) => {
    this.list.push(toDo);
  };
}

export default List;
