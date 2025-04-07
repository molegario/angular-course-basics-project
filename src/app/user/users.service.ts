import { Injectable } from "@angular/core";
import { DUMMY_USERS } from "../../assets/dummy-users";
import { User } from "./user.model";

@Injectable({
  providedIn: "root",
})
export class UsersService {
  private users: User[] = [
    ...DUMMY_USERS
  ];

  private selectedUserId: string | undefined = undefined;

  getSelectedUserId(): string | undefined {
    return this.selectedUserId;
  }

  setSelectedUserId(userId: string | undefined): void {
    this.selectedUserId = userId;
  }

  getUsers(): User[] {
    return [...this.users];
  }

  getUserById(userId: string | undefined): User | undefined {
    return this.users.find((user) => user.id === userId);
  }
}