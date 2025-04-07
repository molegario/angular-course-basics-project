import { Component, computed, input, signal, } from "@angular/core";
import { TaskslistHeaderComponent } from "./tasksheader.component";
import { TaskComponent } from "./task.component";
import { DUMMY_TASKS } from "../../assets/dummy-tasks";
import { type Task } from "./task.model";

@Component({
  selector: "tasks-list",
  standalone: true,
  imports: [
    TaskslistHeaderComponent,
    TaskComponent,
  ],
  templateUrl: "./tasks.component.html",
  styleUrls: ["./tasks.component.css"],
})
export class TaskslistComponent {
  allTasks = signal<Task[]>(DUMMY_TASKS.map((task) => ({ ...task, completed: false })));
  selectedUserId = input.required<string | undefined>();
  selectedUserName = input.required<string | undefined>();
  userTasks = computed<Task[]>(() => this.allTasks().filter((task) => task.userId === this.selectedUserId()));
  onCompleted(deletedId: string) {
    this.allTasks.set(this.allTasks().filter(task => task.id !== deletedId));
  }
}