import { Component, inject, signal } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/products.models';
import { PrimaryButtonComponent } from '../../components/primary-button/primary-button.component';
import { SecondaryButtonComponent } from '../../components/secondary-button/secondary-button.component';
import { OrderSummaryComponent } from '../../../pages/cart/order-summary/order-summary.component';

@Component({
  selector: 'app-cart',
  imports: [SecondaryButtonComponent, OrderSummaryComponent],
  template: ` <p class="text-2xl m-3">Shopping Cart</p>
    <div class="p-8 mt-3 flex flex-col w-[700px] m-auto gap-4">
      @for (product of products(); track product.id) {
      <div
        class="flex justify-between items-center p-6 mt-3 rounded-md shadow-md bg-white gap-8"
      >
        <img
          [src]="product.image"
          class="w-[200px] h-[100px] object-contain"
          alt=""
        />
        <div class="flex flex-col gap-2">
          <span class="text-md font-bold">
            {{ product.title }}
          </span>
          <span class="text-sm">
            {{ '$' + product.price }}
          </span>
        </div>
        <app-secondary-button
          label="Remove"
          (btnClicked)="cartService.removeItem(product.id)"
        />
      </div>
      }

      <app-order-summary />
    </div>`,
  styles: ``,
})
export class CartComponent {
  products = signal<Product[]>([]);
  cartService = inject(CartService);

  ngOnInit() {
    this.products = this.cartService.cart;
  }
}
