
import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task.model';
import { Router } from '@angular/router';
import { titles } from '../../../assets/utilities/constants';
import { TaskCommunicationService } from '../../services/task-communication.service'; // Import the TaskCommunicationService
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  tasks: Task[];
  todoapp: string;
  constructor(private _taskService: TaskCommunicationService, private _router: Router) { }
  ngOnInit() {
    this.todoapp = titles.todoList;
    this.tasks = [];
    this._taskService.tasks$.subscribe(tasks => {
      this.tasks = tasks;
    });
  }
  removeTask(index: number) {
    this._taskService.removeTask(index);
  }
  clickButton(path: string) {
    console.log("move")
    this._router.navigate([path]);
  }
}

