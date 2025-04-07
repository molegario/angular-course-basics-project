import { Task } from './task.model';
import { DUMMY_TASKS } from '../../assets/dummy-tasks';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private allTasks: Task[] = [];

  initAllTasks(): void {
    const storedTasksString = localStorage.getItem('tasks');
    if(storedTasksString ?? undefined) {
      const storedTasks: Task[] = JSON.parse(storedTasksString ?? '[]');
      this.allTasks = [...storedTasks];
    } else {
      this.allTasks = DUMMY_TASKS.map((task) => ({
        ...task,
        completed: false,
      }));
    }
  }

  getUserTasks(userId: string | undefined): Task[] {
    return this.allTasks.filter((task) => task.userId === userId);
  }

  getAllTasks(): Task[] {
    return [...this.allTasks];
  }

  removeTask(deletedId: string): void {
    this.allTasks = this.allTasks.filter((task) => task.id !== deletedId);
    localStorage.setItem('tasks', JSON.stringify(this.allTasks));
  }

  addTask(task: Task): void {
    this.allTasks = [...this.allTasks, task];
    localStorage.setItem('tasks', JSON.stringify(this.allTasks));
  }
}
