import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-secondary-button',
  imports: [],
  template: `
    <button
      (click)="buttonClicked()"
      class="bg-slate-300 font-bold shadow-sm text-gray-700 px-3 py-2 rounded-md "
    >
      {{ label() }}
    </button>
  `,
  styles: ``,
})
export class SecondaryButtonComponent {
  label = input('');
  btnClicked = output();

  buttonClicked() {
    this.btnClicked.emit();
  }
}
