class List implements ToDoList {
  public list: ToDo[];
  constructor() {
    this.list = [];
  }
  pushToDo = (toDo: ToDo) => {
    this.list.splice(this.list.length, 0, toDo);
  };
}

export default List;
