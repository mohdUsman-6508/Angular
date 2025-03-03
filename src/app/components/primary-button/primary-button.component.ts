import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  imports: [],
  template: `
    <button
      (click)="buttonClicked()"
      class="bg-blue-600 text-white px-3 py-2 rounded-md w-full"
    >
      {{ label() }}
    </button>
  `,
  styles: ``,
})
export class PrimaryButtonComponent {
  label = input();
  buttonOutput = output();

  buttonClicked() {
    this.buttonOutput.emit();
  }
}
