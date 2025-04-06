import { Component, input } from "@angular/core";
import { Task } from "./tasks.component";


@Component({
  selector: "task-item",
  standalone: true,
  templateUrl: "./task.component.html",
  styleUrls: ["./task.component.css"],
})
export class TaskComponent {
  task = input.required<Task>();
}