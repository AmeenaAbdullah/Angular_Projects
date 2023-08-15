
import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task.model';
import { Router } from '@angular/router';
import { TaskCommunicationService } from '../../task-communication.service'; // Import the TaskCommunicationService
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  tasks: Task[] = [];
  constructor(private taskService: TaskCommunicationService,private router: Router) {}
  ngOnInit() {
    this.taskService.tasks$.subscribe(tasks => {
      this.tasks = tasks;
    });
  }
  removeTask(index: number) {
    this.taskService.removeTask(index);
  }
 clickButton(path: string) {
    console.log("move")
    this.router.navigate([path]);
} 
}

