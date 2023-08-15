export class Task {
    id: string;
    title: string;
    description: string;
    dueDate: Date;
    completed: boolean;
    constructor(id: string, title: string, description: string, dueDate: Date, completed: boolean) {
      this.id = id;
      this.title = title;
      this.description = description;
      this.dueDate = dueDate;
      this.completed = completed;
    }
  }
  