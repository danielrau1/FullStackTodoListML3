import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Observable} from 'rxjs';

import {Todo} from './todo';
import {map} from 'rxjs/operators'; // [1.1b]




@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient ) { }
   url = 'http://localhost/PHPMVCTodoListML/'; // [1.1b]

  // [2.1d], [3.1b]
  httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/x-www-form-urlencoded'
      })
    };

  // [1.1b]
  getTodos(): Observable<Todo[]> {
    return this.http.get(this.url).pipe(
        map(res => (res as any[]).map(item => item = new Todo(item)))
    );

  }

  // [2.1c]
  addTodo(title: string, completed: boolean): Observable<any> {
    // console.log(title);
   // this.router.navigate(this.url + 'Pages/addTodo/' + title);
    const body = `title=${title}&completed=${completed}`;
    return this.http.post(this.url + 'Pages/addTodo' , body, this.httpOptions);
  }


  // [3.1b]
  deleteTodo(id: number): Observable<any> {
    const body = `id=${id}`;
    return this.http.post(this.url + 'Pages/deleteTodo' , body, this.httpOptions);
  }

}

