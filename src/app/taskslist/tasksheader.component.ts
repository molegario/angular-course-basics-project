import { Component, computed, input } from "@angular/core";

@Component({
  selector: "tasks-header",
  standalone: true,
  imports: [],
  templateUrl: "./tasksheader.component.html",
  styleUrls: ["./tasksheader.component.css"],
})
export class TaskslistHeaderComponent {
  selectedUserName = input.required<string>();
  tasksTitle = computed(() => this.selectedUserName() + "'s Tasks");
}