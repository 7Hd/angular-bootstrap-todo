import { TodoPriority } from '../shared/todo-priority.enum';

export class Todo {
  id: number;
  task: string;
  complete: boolean;
  priority: TodoPriority;

  constructor(obj: any = {}) {
    this.id = obj.id;
    this.task = obj.title;
    this.complete = obj.complete;
    this.priority = obj.priority || TodoPriority.Low;
  }

  toJSON(): any {
    const obj: any = {};
    obj.id = this.id;
    obj.task = this.task;
    obj.complete = this.complete;
    obj.priority = this.priority;
    return obj;
  }
}
