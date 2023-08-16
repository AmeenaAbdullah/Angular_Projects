import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './Components/todo/todo.component';
import { TodoitemComponent } from './Components/todoitem/todoitem.component';
import { FormsModule } from '@angular/forms';
import { TaskFormComponent } from './Components/task-form/task-form.component';
import { RouterModule, Routes } from '@angular/router';
import { UpdatetaskComponent } from './Components/update-task/updatetask.component';
@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoitemComponent,
    TaskFormComponent,
    UpdatetaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
