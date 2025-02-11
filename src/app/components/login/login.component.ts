import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  isLoggedIn: boolean = false;

  constructor(private authService: AuthService) {}

  login() {
    this.authService
      .login(this.email, this.password)
      .subscribe((isValid) =>
        isValid ? alert('Login successful!') : alert('Invalid credentials')
      );
    this.isLoggedIn = true;
  }
}
