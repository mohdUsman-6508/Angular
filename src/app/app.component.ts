import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'frontend';

  constructor() {
    console.log('this is constructor');
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

  changeTitle() {
    console.log('change title running..');
    this.title = 'FRONTEND';
  }
}
