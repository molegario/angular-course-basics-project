import { Component, input } from "@angular/core";
import { type Task } from "./task.model";


@Component({
  selector: "task-item",
  standalone: true,
  templateUrl: "./task.component.html",
  styleUrls: ["./task.component.css"],
})
export class TaskComponent {
  task = input.required<Task>();
}