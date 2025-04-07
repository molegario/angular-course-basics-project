import { Component, Input } from '@angular/core';
import { TaskslistHeaderComponent } from './tasksheader.component';
import { TaskComponent } from './task.component';
import { type Task } from './task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'tasks-list',
  standalone: true,
  imports: [TaskslistHeaderComponent, TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TaskslistComponent {
  constructor(private tasksService: TasksService) {}

  @Input({ required: true }) selectedUserId: string | undefined;
  @Input({ required: true }) selectedUserName: string | undefined;

  //computed (signal) doesn't work with dependency injection
  get userTasks() {
    return this.tasksService.getUserTasks(this.selectedUserId);
  }

  onCompleted(deletedId: string) {
    this.tasksService.removeTask(deletedId);
  }

  onAddTask(task: Task) {
    this.tasksService.addTask(task);
  }
}
