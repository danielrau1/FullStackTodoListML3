import { Component, OnInit } from '@angular/core';
import {TodoService} from '../models/todo.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.sass']
})
export class AddItemComponent implements OnInit {

  title: string; // [2.1b]


  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  // [2.1b]
  onAdd() {
// console.log(this.title);
    this.todoService.addTodo(this.title, true).subscribe(res => console.log(res));

  }

}
