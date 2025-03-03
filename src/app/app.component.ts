import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <div class="p-4 bg-slate-50 shadow-md flex justify-between">
      <p class="text-xl font-bold" routerLink="login">Lineup</p>
    </div>
    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'lineup';
}
