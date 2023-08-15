import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../models/task.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todoitem',
  templateUrl: './todoitem.component.html',
  styleUrls: ['./todoitem.component.css']
})
export class TodoitemComponent {
  constructor(private router: Router){
  }
  @Input() task: Task = { id: 0, title: '', description: '', dueDate: new Date(), completed: false };
  @Output() remove: EventEmitter<void> = new EventEmitter<void>();
  clickButton(path: string) {
    console.log("move")
    this.router.navigate([path]);
} 
}
