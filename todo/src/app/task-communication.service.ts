

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task } from './models/task.model';
@Injectable({
  providedIn: 'root'
})
export class TaskCommunicationService {
  private tasks: Task[] = []; 
  private tasksSubject = new BehaviorSubject<Task[]>(this.tasks);
  tasks$ = this.tasksSubject.asObservable();
  constructor() {}
  getTasks(): Task[] {
    return this.tasks;
  }
  getTask(task:Task):Task{
    const index = this.tasks.findIndex(task => task.id === task.id);
    return  this.tasks[index];

  }
  addTask(task: Task) {
    this.tasks.push(task);
    this.tasksSubject.next(this.tasks);
  }
  removeTask(index: number) {
    this.tasks.splice(index, 1);
    this.tasksSubject.next(this.tasks);
  }
  updateTask(updatedTask: Task) {
    const index = this.tasks.findIndex(task => task.id === updatedTask.id);
    if (index !== -1) {
      this.tasks[index] = updatedTask;
      this.tasksSubject.next(this.tasks);
    }
  }
}
