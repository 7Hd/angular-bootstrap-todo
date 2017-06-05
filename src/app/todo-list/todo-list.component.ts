import { Component, OnInit } from '@angular/core';

import { Todo } from '../models/todo';
import { TodoDataService } from '../shared/todo-data.service';
import { EnumArrayPipe } from '../shared/enum-array.pipe';
import { TodoPriority } from '../shared/todo-priority.enum';

@Component({
  selector: 'td-todo-list',
  templateUrl: './todo-list.component.html',
  styles: [
    `
    .col-task { width: 30%; }
    .col-priority { width: 30%; }
    .col-action { width: 30%; }
    `]
})
export class TodoListComponent implements OnInit {

  TodoPriority = TodoPriority;

  newTodo: Todo = new Todo();

  constructor(
    private todoDataService: TodoDataService
  ) { }

  ngOnInit() { }

  addTodo() {
    this.todoDataService.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }

  get todos() {
    return this.todoDataService.getAllTodos();
  }
}
