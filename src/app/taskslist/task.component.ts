import { Component, Input, output } from "@angular/core";
import { type Task } from "./task.model";
import { CardComponent } from "../shared/card/card.component";
import { DatePipe } from "@angular/common";
import { TasksService } from "./tasks.service";

@Component({
  selector: "task-item",
  standalone: true,
  templateUrl: "./task.component.html",
  styleUrls: ["./task.component.css"],
  imports: [CardComponent, DatePipe],
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;

  constructor(private tasksService: TasksService) {}

  onClickedCompleted() {
    this.tasksService.removeTask(this.task.id);
  }
}