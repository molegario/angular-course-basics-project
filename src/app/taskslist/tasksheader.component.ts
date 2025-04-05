import { Component, computed, input } from "@angular/core";

@Component({
  selector: "tasks-header",
  standalone: true,
  imports: [],
  templateUrl: "./tasksheader.component.html",
  styleUrls: ["./tasksheader.component.css"],
})
export class TaskslistHeaderComponent {
  selectedUserName = input.required<string | undefined>();

  tasksTitle = computed(() => this.selectedUserName() ? this.selectedUserName() + "'s Tasks" : 'Unknown user');
  disabledBtn = computed(() => this.selectedUserName() ? false : true);
}