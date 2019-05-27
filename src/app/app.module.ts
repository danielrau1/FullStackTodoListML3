import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module'; // [4.1c]
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodosComponent } from './todos/todos.component';
import { AddItemComponent } from './add-item/add-item.component';
import { EditTodoComponent } from './edit-todo/edit-todo.component';
import { RerouterComponent } from './rerouter/rerouter.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    AddItemComponent,
    EditTodoComponent,
    RerouterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // [4.1c]
    BrowserAnimationsModule,
      HttpClientModule,
      FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
