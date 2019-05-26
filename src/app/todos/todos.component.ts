import { Component, OnInit } from '@angular/core';
import {TodoService} from '../models/todo.service';

import {Todo} from '../models/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.sass']
})
export class TodosComponent implements OnInit {

 todos: Todo[]; // [1.1c]

  constructor(private todoService: TodoService) { }

  ngOnInit() {
      // [1.1c]
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
      console.log(this.todos);
    });


  }

}
