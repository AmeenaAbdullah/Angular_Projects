import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task } from '../../models/task.model'; // Import the Task model
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { titles, messages } from '../../../assets/utilities/constants';
import { TaskCommunicationService } from '../../services/task-communication.service'; // Import the TaskCommunicationService

@Component({
  selector: 'app-updatetask',
  templateUrl: './updatetask.component.html',
  styleUrls: ['./updatetask.component.css']
})
export class UpdatetaskComponent implements OnInit {
  formtitle: string;
  validatemsg: string;
  newTask: Task;
  showTitleWarning: boolean;
  btntitle: string;
  constructor(private _route: ActivatedRoute, private _taskCommunicationService: TaskCommunicationService, private _router: Router) { } // Inject the service
  ngOnInit() {
    this.newTask = this._taskCommunicationService.initializeTask();
    this.formtitle = titles.addTask;
    this.validatemsg = messages.validatemsg;
    this.showTitleWarning = false;
    this.btntitle = "Update";
    this.newTask = this._taskCommunicationService.initializeTask();
    this._route.params.subscribe(params => {
      const taskId = params['id']; // This is the task ID from the route parameter
      this.newTask = this._taskCommunicationService.getTask(taskId);
    });

  }
  onSubmit(form: NgForm) {
    if (!this.newTask.title) {
      this.showTitleWarning = true;
      return;
    }
    if (form.valid) {
      // Call the updateTask method of the service
      this._taskCommunicationService.updateTask(this.newTask);
      this._router.navigate(['/']);

      // Clear the form after submission
      this.newTask = this._taskCommunicationService.initializeTask();
      form.resetForm();
    }
  }
}
