import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../interface/user';
import { Role } from '../../enums/role';

@Component({
  selector: 'app-add-user',
  standalone: false,
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css',
})
export class AddUserComponent {
  user: User = { name: '', email: '', password: '', role: Role.user };

  constructor(private userService: UserService) {}

  addUser() {
    this.userService.addUser(this.user).subscribe(() => {
      alert('User added successfully!');
    });
  }

  updateUser(user: User, email: string) {
    this.userService.updateUser(user, email).subscribe((response) => {
      alert('User updated successfully!');
      console.log(response);
    });
  }
}
