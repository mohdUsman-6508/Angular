import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  imports: [],
  template: `
    <p>
      <button
        (click)="buttonClicked()"
        class="bg-blue-600 text-white px-3 py-2 rounded-md w-full"
      >
        {{ label() }}
      </button>
    </p>
  `,
  styles: ``,
})
export class PrimaryButtonComponent {
  label = input('');
  btnClicked = output();

  buttonClicked() {
    this.btnClicked.emit();
  }
}
