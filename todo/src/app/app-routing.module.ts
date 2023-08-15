import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TaskFormComponent } from './Components/task-form/task-form.component';
import { TodoComponent } from './Components/todo/todo.component';
import { UpdatetaskComponent } from './Components/update-task/updatetask.component';

const routes: Routes = [
  { path: '', component: TodoComponent},
  { path: 'task-form', component: TaskFormComponent},
  { path: 'update-task', component:UpdatetaskComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
