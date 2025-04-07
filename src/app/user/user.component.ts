import { Component, Input, output, } from '@angular/core';
import { type User } from './user.model';
import { CardComponent } from '../shared/card/card.component';
import { UsersService } from './users.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected: boolean = false;
  // select = output<string>();

  constructor(private usersService: UsersService) {}

  get imagePath(): string {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    // this.select.emit(this.user.id);
    this.usersService.setSelectedUserId(this.user.id);
  }
}
