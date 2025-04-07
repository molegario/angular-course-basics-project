import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TaskslistComponent } from './taskslist/tasks.component';
import { type User } from './user/user.model';
import { UsersService } from './user/users.service';
import { TasksService } from './taskslist/tasks.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TaskslistComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(private usersService: UsersService, private tasksService: TasksService) {
    this.tasksService.initAllTasks();
  }

  get users(): User[] {
    return this.usersService.getUsers();
  }

  get selected(): string | undefined {
    return this.usersService.getSelectedUserId();
  }

  get selectedUser(): User | undefined {
    return this.usersService.getUserById(this.selected);
  }
}
