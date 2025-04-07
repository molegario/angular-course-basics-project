import { Component, Input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from './tasks.service';

@Component({
  selector: 'new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './newtask.component.html',
  styleUrls: ['./newtask.component.css'],
})
export class NewTaskComponent {
  @Input({ required: true }) selectedUserId: string | undefined;
  @Input({ required: true }) selectedUserName: string | undefined;
  @Input({ required: true }) modalIsOpened: boolean = false;
  close = output<void>();

  enteredTitle = signal('');
  enteredSummary = signal('');
  enteredDueDate = signal('');

  constructor(private tasksService: TasksService) {}

  onClose() {
    this.close.emit();
  }

  addTask() {
    this.tasksService.addTask({
      id: Math.random().toString(36).substring(2, 9),
      title: this.enteredTitle(),
      summary: this.enteredSummary(),
      dueDate: this.enteredDueDate(),
      userId: this.selectedUserId!,
      completed: false,
    });
    this.onClose();
  }
}
