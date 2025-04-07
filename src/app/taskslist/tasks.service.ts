import { Task } from './task.model';
import { DUMMY_TASKS } from '../../assets/dummy-tasks';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private allTasks: Task[] = DUMMY_TASKS.map((task) => ({
    ...task,
    completed: false,
  }));

  getUserTasks(userId: string | undefined): Task[] {
    return this.allTasks.filter((task) => task.userId === userId);
  }

  getAllTasks(): Task[] {
    return [...this.allTasks];
  }

  removeTask(deletedId: string): void {
    this.allTasks = this.allTasks.filter((task) => task.id !== deletedId);
  }

  addTask(task: Task): void {
    this.allTasks = [...this.allTasks, task];
  }
}
