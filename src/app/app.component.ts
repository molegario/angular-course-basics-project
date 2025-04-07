import { Component, computed, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from '../assets/dummy-users';
import { TaskslistComponent } from './taskslist/tasks.component';
import { type User } from './user/user.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    UserComponent,
    TaskslistComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = signal<User[]>(DUMMY_USERS);
  selected = signal<string | undefined>(undefined);
  selectedUser = computed<User | undefined>(() => this.users().find((user) => user.id === this.selected()));

  onSelected(selectedId: string) {
    this.selected.set(selectedId);
  }
}