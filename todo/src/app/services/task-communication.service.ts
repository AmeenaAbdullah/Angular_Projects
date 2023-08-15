import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task } from '../models/task.model';
import { v4 as uuidv4 } from 'uuid';
@Injectable({
  providedIn: 'root'
})
export class TaskCommunicationService {
  private tasks: Task[] = []; 

  // Create a BehaviorSubject to observe changes in tasks
  private tasksSubject = new BehaviorSubject<Task[]>(this.tasks);

  // Observable to subscribe to changes in tasks
  tasks$ = this.tasksSubject.asObservable();

  constructor() {}

  // Get the array of tasks
  getTasks(): Task[] {
    return this.tasks;
  }

  // Get a specific task by ID
  getTask(id:string): Task {
    const index = this.tasks.findIndex(t => t.id === id);
    return this.tasks[index];
  }

  // Add a new task to the tasks array
  addTask(task: Task) {
    // Generate a random UUID as the task ID
    const taskId = uuidv4();
    // Assign the generated task ID to the task
    task.id = taskId;
    this.tasks.push(task);
    this.tasksSubject.next(this.tasks); // Notify subscribers about the change
  }

  // Remove a task from the tasks array by index
  removeTask(index: number) {
    this.tasks.splice(index, 1);
    this.tasksSubject.next(this.tasks); // Notify subscribers about the change
  }

  // Update an existing task in the tasks array
  updateTask(updatedTask: Task) {
    const index = this.tasks.findIndex(t => t.id === updatedTask.id);
    if (index !== -1) {
      this.tasks[index] = updatedTask;
      this.tasksSubject.next(this.tasks); // Notify subscribers about the change
    }
  }
}
