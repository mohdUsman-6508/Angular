import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../interface/user';

@Component({
  selector: 'app-add-user',
  standalone: false,
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css',
})
export class AddUserComponent {
  user: User = { name: '', email: '' };

  constructor(private userService: UserService) {}

  addUser() {
    this.userService.addUser(this.user).subscribe(() => {
      alert('User added successfully!');
    });
  }
}
