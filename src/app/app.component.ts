import { Component, computed, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from '../dummy-users';
import { TaskslistHeaderComponent } from './taskslist/tasksheader.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    UserComponent,
    TaskslistHeaderComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  // users = DUMMY_USERS;
  // selected = DUMMY_USERS[0].id;

  // get selectedUser() {
  //   return this.users.find((user) => user.id === this.selected);
  // }

  // onSelected(selectedId:  string) {
  //   this.selected = selectedId;
  // }
  users = signal(DUMMY_USERS);
  selected = signal(DUMMY_USERS[0].id);
  selectedUser = computed(() => this.users().find((user) => user.id === this.selected()));
  onSelected(selectedId: string) {
    this.selected.set(selectedId);
  }
}