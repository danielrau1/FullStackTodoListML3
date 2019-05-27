import { Component, OnInit } from '@angular/core';
import {TodoService} from '../models/todo.service';

import {Todo} from '../models/todo';
import {Router} from '@angular/router';



@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.sass']
})
export class TodosComponent implements OnInit {

 todos: Todo[]; // [1.1c]

  constructor(private todoService: TodoService, private router: Router) { }

  ngOnInit() {
      // [1.1c]
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
      console.log(this.todos);
    });


  }

     // [3.1a]
    onDelete(id) {
 // console.log(id);
        this.todoService.deleteTodo(id).subscribe(res => console.log(res));
        const destination = 'todos';
        this.router.navigate(['/rerouter', destination ]);
    }


    // [4.1a]
    onEdit(todoItem) {
        // console.log(todo1);
        this.todoService.sendToEdit(todoItem);
    }

}
