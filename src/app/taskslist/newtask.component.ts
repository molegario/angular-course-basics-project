import { Component, input, output, } from "@angular/core";
import { Task } from "./task.model";


@Component({
  selector: "new-task",
  standalone: true,
  templateUrl: "./newtask.component.html",
  styleUrls: ["./newtask.component.css"],
})
export class NewTaskComponent {
  selectedUserId = input.required<string | undefined>();
  selectedUserName = input.required<string | undefined>();
  modalIsOpened = input.required<boolean>();
  close = output<void>();
  addtask = output<Task>();

  onClose() {
    this.close.emit();
  }

  addTask(event: SubmitEvent) {
    event.preventDefault();
    const formObject = event.target as HTMLFormElement;
    const formData = new FormData(formObject);
    this.addtask.emit({
      id: Math.random().toString(36).substring(2, 9),
      title: formData.get('taskName') as string,
      summary: formData.get('taskSummary') as string,
      dueDate: formData.get('taskDueDate') as string,
      userId: this.selectedUserId()!,
      completed: false,
    });
    this.close.emit();
  }
}