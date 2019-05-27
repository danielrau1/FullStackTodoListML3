import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'; // [4.1c]
import {TodoService} from '../models/todo.service'; // [4.1d]

import {Router} from '@angular/router'; // [4.1d]

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.sass']
})
export class EditTodoComponent implements OnInit {

  public id ; // [4.1c]
  public title;

                             // [4.1c]             [4.1d]                      [4.1d]
  constructor(private route: ActivatedRoute, private todoService: TodoService, private router: Router) { }

  ngOnInit() {
    // [4.1c]
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.title = (this.route.snapshot.paramMap.get('title'));
  }

 // [4.1d]
  onSubmit2() {
   // const t = [this.id, this.title];
    // console.log(this.id + ' ' + this.title);
    this.todoService.editTodo(this.id, this.title).subscribe(res => console.log(res));
    this.router.navigate(['']);
  }
}
