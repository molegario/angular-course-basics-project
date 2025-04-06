import { Component, computed, input, output, } from '@angular/core';

export interface User {
  id: string;
  name: string;
  avatar: string;
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  user = input.required<User>();
  selected = input.required<string | undefined>();
  select = output<string>();
  imagePath = computed(() => 'assets/users/' + this.user().avatar);
  btnClass = computed(() => (this.selected() === this.user().id ? 'active' : undefined));

  onSelectUser() {
    this.select.emit(this.user().id);
  }
}
