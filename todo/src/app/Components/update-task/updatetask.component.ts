import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task } from '../../models/task.model'; // Import the Task model
import { Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { TaskCommunicationService } from '../../services/task-communication.service'; // Import the TaskCommunicationService

@Component({
  selector: 'app-updatetask',
  templateUrl: './updatetask.component.html',
  styleUrls: ['./updatetask.component.css']
})
export class UpdatetaskComponent {
  
  newTask: Task = { id: '', title: '', description: '', dueDate: new Date(), completed: false };// Initialize a new Task instance
 
  constructor(private route: ActivatedRoute,private taskCommunicationService: TaskCommunicationService, private router: Router) {} // Inject the service
  
 
  ngOnInit() {
    this.route.params.subscribe(params => {
      const taskId = params['id']; // This is the task ID from the route parameter
      this.newTask= this.taskCommunicationService.getTask(taskId);
    });
  
  }
  onSubmit(form: NgForm) {
    if (form.valid) {
      // Call the updateTask method of the service
      this.taskCommunicationService.updateTask(this.newTask);
      this.router.navigate(['/']);
    
      // Clear the form after submission
      this.newTask ={ id: '', title: '', description: '', dueDate: new Date(), completed: false };
      form.resetForm();
    }
  }
}
