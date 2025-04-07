import { Component, computed, input, output, } from "@angular/core";
import { Task } from "./task.model";

@Component({
  selector: 'tasks-header',
  standalone: true,
  imports: [],
  templateUrl: './tasksheader.component.html',
  styleUrls: ['./tasksheader.component.css'],
})
export class TaskslistHeaderComponent {
  selectedUserName = input.required<string>();
  selectedUserId = input.required<string | undefined>();
  addtask = output<Task>();
  tasksTitle = computed(() => this.selectedUserName() + "'s Tasks");
  opened: HTMLDialogElement | undefined;
  addTask(event: SubmitEvent) {
    event.preventDefault();
    const formObject = event.target as HTMLFormElement;
    const formData = new FormData(formObject);
    // console.log("event name::", formData.get("taskName"));
    // console.log("event description::", formData.get("taskSummary"));
    // console.log("event date::", formData.get("taskDueDate"));
    this.addtask.emit({
      id: Math.random().toString(36).substring(2, 9),
      title: formData.get('taskName') as string,
      summary: formData.get('taskSummary') as string,
      dueDate: formData.get('taskDueDate') as string,
      userId: this.selectedUserId()!,
      completed: false,
    });

    if(this.opened) {
      this.opened?.close();
      formObject.reset();
    }
  }
  openModal(modalRef: HTMLDialogElement) {
    this.opened = modalRef;
    modalRef.showModal();
  }
}