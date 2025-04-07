import { Component, computed, input, } from "@angular/core";

@Component({
  selector: 'tasks-header',
  standalone: true,
  imports: [],
  templateUrl: './tasksheader.component.html',
  styleUrls: ['./tasksheader.component.css'],
})
export class TaskslistHeaderComponent {
  selectedUserName = input.required<string>();
  tasksTitle = computed(() => this.selectedUserName() + "'s Tasks");
  addTask(event: SubmitEvent) {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    console.log("event name::", formData.get("taskName"));
    console.log("event description::", formData.get("taskSummary"));
    console.log("event date::", formData.get("taskDueDate"));
  }
}