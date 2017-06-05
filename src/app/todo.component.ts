import { Component, OnInit, Input } from '@angular/core';

import { Todo } from './models/todo';
import { TodoPriority } from './shared/todo-priority.enum';
import { TodoDataService } from './shared/todo-data.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'tr[td-todo]',
  template: `
    <td [class.strike]="todo.complete">{{todo.task}}</td>
    <td>{{TodoPriority[todo.priority]}}</td>
    <td>
      <button type="button" class="btn btn-info" *ngIf="!todo.complete; else uncomplete"
          (click)="toggleTodoComplete(todo)">Complete</button>
      <ng-template #uncomplete>
        <button type="button" class="btn btn-warning" (click)="toggleTodoComplete(todo)">UnComplete</button>
      </ng-template>
      <button type="button" class="btn btn-danger" (click)="removeTodo(todo)">Remove</button>
    </td>
  `,
  styles: []
})
export class TodoComponent implements OnInit {

  @Input() todo: Todo;

  TodoPriority = TodoPriority;

  constructor(
    private todoDataService: TodoDataService
  ) { }

  ngOnInit() { }

  toggleTodoComplete(todo) {
    this.todoDataService.toggleTodoComplete(todo);
  }

  removeTodo(todo) {
    this.todoDataService.deleteTodoById(todo.id);
  }
}
