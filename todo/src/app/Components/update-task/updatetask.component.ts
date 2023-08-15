import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task } from '../../models/task.model'; // Import the Task model
import { Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { TaskCommunicationService } from '../../task-communication.service'; // Import the TaskCommunicationService

@Component({
  selector: 'app-updatetask',
  templateUrl: './updatetask.component.html',
  styleUrls: ['./updatetask.component.css']
})
export class UpdatetaskComponent {
  newTask: Task = { id: 0, title: '', description: '', dueDate: new Date(), completed: false };// Initialize a new Task instance
 
  constructor(private route: ActivatedRoute,private taskCommunicationService: TaskCommunicationService, private router: Router) {} // Inject the service
  
 
  ngOnInit() {
    console.log("Call")
    this.newTask=this.taskCommunicationService.getTask(this.newTask);
   
  
  }
  onSubmit(form: NgForm) {
    if (form.valid) {
      // Call the updateTask method of the service
      this.taskCommunicationService.updateTask(this.newTask);
      this.router.navigate(['/']);
    
      // Clear the form after submission
      this.newTask ={ id: 0, title: '', description: '', dueDate: new Date(), completed: false };
      form.resetForm();
    }
  }
}
