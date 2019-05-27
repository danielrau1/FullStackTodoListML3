import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TodosComponent} from './todos/todos.component';
import {EditTodoComponent} from './edit-todo/edit-todo.component';
import {RerouterComponent} from './rerouter/rerouter.component'; // [5]

const routes: Routes = [
  {path : '', component: TodosComponent},
  {path: 'edit/:id/:title', component: EditTodoComponent}, // [4.1b]
  {path: 'rerouter/:destination', component: RerouterComponent}, // [5]
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
