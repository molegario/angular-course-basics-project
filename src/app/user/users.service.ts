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

  getUsers(): User[] {
    return [...this.users];
  }

  getUserById(userId: string | undefined): User | undefined {
    return this.users.find((user) => user.id === userId);
  }
}