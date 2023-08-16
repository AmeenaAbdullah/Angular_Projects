import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task } from 'src/app/models/task.model';
@Component({
  selector: 'app-common-form',
  templateUrl: './common-form.component.html',
  styleUrls: ['./common-form.component.css']
})
export class CommonFormComponent {
  @Input() formTitle: string;
  @Input() submitButtonLabel: string;
  @Input() validatemsg: string;
  @Input() model: Task;

  @Output() formSubmit: EventEmitter<any> = new EventEmitter<any>();

  showTitleWarning: boolean = false;

  onSubmit(form: NgForm): void {
    if (!this.model.title) {
      this.showTitleWarning = true;
      return;
    }

    if (form.valid) {
      this.formSubmit.emit(this.model);

    }
  }
}
