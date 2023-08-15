import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task } from '../../models/task.model'; 
import { Router} from '@angular/router';
import { TaskCommunicationService } from '../../services/task-communication.service'; 
@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {

  newTask: Task = { id: "", title: '', description: '', dueDate: new Date(), completed: false };
  showTitleWarning: boolean = false;
  constructor(private taskCommunicationService: TaskCommunicationService, private router: Router) {} 
  onSubmit(form: NgForm) {
    if (!this.newTask.title) {
      this.showTitleWarning = true; 
      return;
    }
    if (form.valid) {
    this.router.navigate(['/']);
    this.taskCommunicationService.addTask(this.newTask);
    this.newTask ={ id: "", title: '', description: '', dueDate: new Date(), completed: false };
    form.resetForm();
    this.showTitleWarning = false;
    }
  }
}
