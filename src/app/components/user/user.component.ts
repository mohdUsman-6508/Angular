import { Component, inject, signal } from '@angular/core';
import { User } from '../../models/User.models';
import { UserService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';
import { PrimaryButtonComponent } from '../primary-button/primary-button.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [FormsModule, PrimaryButtonComponent],
  template: `
    <div
      class="flex flex-col gap-2 bg-slate-100 shadow-md w-1/3 mx-auto p-8  mt-12"
    >
      <h2 class="text-center font-bold text-xl">Login/Signup</h2>
      <form
        (ngSubmit)="loginOrSignUp(user())"
        #userForm="ngForm"
        class="flex flex-col gap-2 items-stretch mt-2"
      >
        <div class="flex flex-col items-baseline justify-start">
          <label for="username">Username</label>
          <input
            class="p-3 rounded-sm w-full outline-none "
            type="text"
            placeholder="Issac"
            [(ngModel)]="user().username"
            name="username"
          />
        </div>
        <div class="flex flex-col items-baseline justify-start gap-3">
          <label for="email">Email</label>
          <input
            class="p-3 rounded-sm w-full outline-none "
            type="email"
            placeholder="issac@gmail.com"
            [(ngModel)]="user().email"
            name="email"
          />
        </div>
        <div class="flex flex-col items-baseline justify-start">
          <label for="password">Password</label>
          <input
            class="p-3 rounded-sm w-full outline-none  "
            type="password"
            name="password"
            id="password"
            [(ngModel)]="user().password"
            name="password"
          />
        </div>
        <app-primary-button
          class="mt-3"
          label="Login/Signup"
          routerLink="task/"
        />
      </form>
    </div>
  `,
  styles: ``,
})
export class UserComponent {
  user = signal<User>({ username: '', email: '' });
  userService = inject(UserService);
  router = inject(Router);

  ngOnInit() {
    console.log(this.user());
  }

  loginOrSignUp(user: User) {
    this.userService.createUser(user).subscribe((u) => {
      this.user.set(u);
      this.router.navigate(['task', u.id]);
    });
  }
}
