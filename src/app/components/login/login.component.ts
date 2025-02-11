import { Component, inject, Output } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  // isLoggedIn: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.email, this.password).subscribe((isValid) => {
      isValid ? alert('Login successful!') : alert('Invalid credentials');
      // this.isLoggedIn = true;
      next: () => {
        this.router.navigate(['/add-update-user']);
      };
      error: (err: any) => {
        console.log('Login failed', err);
      };
    });
  }
}
