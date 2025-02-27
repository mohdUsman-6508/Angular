import { Component, inject } from '@angular/core';
import { PrimaryButtonComponent } from '../primary-button/primary-button.component';
import { ProductListComponent } from '../../pages/product-list/product-list.component';
import { CartService } from '../../services/cart.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [PrimaryButtonComponent, RouterLink],
  template: `
    <div class="flex justify-between p-2 shadow-md bg-slate-100 items-center">
      <p class="text-2xl font-bold" routerLink="/">MyApp</p>
      <app-primary-button
        [label]="'Cart(' + cartService.cart().length + ')'"
        (btnClicked)="sayHello()"
        routerLink="/cart"
      />
    </div>
  `,
  styles: ``,
})
export class HeaderComponent {
  sayHello() {
    console.log('cart');
  }

  cartService = inject(CartService);
}
