import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task } from '../../models/task.model';
import { Router } from '@angular/router';
import { titles, messages } from '../../../assets/utilities/constants';
import { TaskCommunicationService } from '../../services/task-communication.service';
@Component({
  selector: 'app-task-form',
  templateUrl: '../common-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  formtitle: string;
  validatemsg: string;
  newTask: Task;
  showTitleWarning: boolean;
  btntitle: string;
  constructor(private _taskCommunicationService: TaskCommunicationService, private _router: Router) { }
  ngOnInit(): void {
    this.newTask = this._taskCommunicationService.initializeTask();
    this.formtitle = titles.addTask;
    this.validatemsg = messages.validatemsg;
    this.showTitleWarning = false;
    this.btntitle = "Add";
  }
  onSubmit(form: NgForm) {
    if (!this.newTask.title) {
      this.showTitleWarning = true;
      return;
    }
    if (form.valid) {
      this._router.navigate(['/']);
      this._taskCommunicationService.addTask(this.newTask);
      this.newTask = this._taskCommunicationService.initializeTask();
      form.resetForm();
      this.showTitleWarning = false;
    }
  }
}