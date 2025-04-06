import { Component, input, } from "@angular/core";
import { TaskslistHeaderComponent } from "./tasksheader.component";
import { TaskComponent } from "./task.component";

export interface Task {
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string;
}

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
  userTasks = input.required<Task[]>();
  selectedUserId = input.required<string | undefined>();
  selectedUserName = input.required<string | undefined>();
}