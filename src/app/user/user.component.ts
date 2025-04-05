import { Component, computed, input, output, } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // @Input({required: true}) id!:string;
  // @Input({required: true}) name!:string;
  // @Input({required: true}) avatar!:string;
  // @Input({required: true}) selected!: string;
  id = input.required<string>();
  name = input.required<string>();
  avatar = input.required<string>();
  selected = input.required<string>();

  // @Output() select = new EventEmitter();
  select = output<string>();

  // get imagePath() {
  //   return 'assets/users/' + this.avatar;
  // }

  imagePath = computed(() => 'assets/users/' + this.avatar());

  // get btnClass() {
  //   return this.selected === this.id ? 'active' : undefined;
  // }
  btnClass = computed(() => (this.selected() === this.id() ? 'active' : undefined));

  onSelectUser() {
    this.select.emit(this.id());
  }
}
