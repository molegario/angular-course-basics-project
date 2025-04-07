import { Component, Input } from '@angular/core';
import { NewTaskComponent } from './newtask.component';

@Component({
  selector: 'tasks-header',
  standalone: true,
  imports: [NewTaskComponent],
  templateUrl: './tasksheader.component.html',
  styleUrls: ['./tasksheader.component.css'],
})
export class TaskslistHeaderComponent {
  @Input({ required: true }) selectedUserName: string | undefined;
  @Input({ required: true }) selectedUserId: string | undefined;

  get tasksTitle(): string {
    return this.selectedUserName + "'s Tasks";
  }

  isAddingTask = false;

  // addTaskRequested = output<Task>();

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onStopAddTask() {
    this.isAddingTask = false;
  }

  // onAddTask(task: Task) {
  //   this.addTaskRequested.emit(task);
  //   this.isAddingTask = false;
  // }
}
