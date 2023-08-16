import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../models/task.model';
import { Router } from '@angular/router';
import { TaskCommunicationService } from '../../services/task-communication.service';

@Component({
  selector: 'app-todoitem',
  templateUrl: './todoitem.component.html',
  styleUrls: ['./todoitem.component.css']
})
export class TodoitemComponent {
  constructor(private _taskCommunicationService: TaskCommunicationService, private _router: Router) {
  }
  @Input() task: Task = this._taskCommunicationService.initializeTask();
  @Output() remove: EventEmitter<void> = new EventEmitter<void>();
  clickButton(path: string) {
    console.log("move")
    this._router.navigate([path]);
  }
}
