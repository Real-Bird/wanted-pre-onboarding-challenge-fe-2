let id = 1;

class Model implements ToDo {
  public readonly id: number;
  public readonly isDone: boolean;
  public toDo: ToDo;
  constructor(
    public readonly content: string,
    public readonly category: string,
    public readonly tags: TagName[]
  ) {
    this.id = id;
    this.isDone = false;
    this.toDo = {
      id: this.id,
      content: this.content,
      category: this.category,
      tags: this.tags,
      isDone: this.isDone,
    };
    id++;
  }
}

export default Model;
