import { Component, computed, input, output, signal } from '@angular/core';
import { Task } from './task.model';
import { NewTaskComponent } from './newtask.component';

@Component({
  selector: 'tasks-header',
  standalone: true,
  imports: [NewTaskComponent],
  templateUrl: './tasksheader.component.html',
  styleUrls: ['./tasksheader.component.css'],
})
export class TaskslistHeaderComponent {
  selectedUserName = input.required<string>();
  selectedUserId = input.required<string | undefined>();
  tasksTitle = computed(() => this.selectedUserName() + "'s Tasks");
  isAddingTask = signal(false);

  addTaskRequested = output<Task>();

  onStartAddTask() {
    this.isAddingTask.set(true);
  }

  onStopAddTask() {
    this.isAddingTask.set(false);
  }

  onAddTask(task: Task) {
    this.addTaskRequested.emit(task);
    // this.isAddingTask.set(false);
  }



}
