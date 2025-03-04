import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <div class="p-4 bg-slate-50 shadow-md flex justify-between">
      <p class="text-xl font-bold" (click)="goToHome()">Lineup</p>
    </div>
    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'lineup';

  router = inject(Router);
  goToHome() {
    this.router.navigate(['/']);
  }
}
