import { Component, computed, inject } from '@angular/core';
import { CartService } from '../../../app/services/cart.service';
import { PrimaryButtonComponent } from '../../../app/components/primary-button/primary-button.component';

@Component({
  selector: 'app-order-summary',
  imports: [PrimaryButtonComponent],
  template: `
    <div class="flex flex-col gap-1 shadow-md p-6">
      <span class="text-2xl capitalize"> Order Summary </span>
      <div class="flex gap-1">
        <span>Total</span>
        <span class="font-bold">{{ '$' + total() }}</span>
      </div>
      <app-primary-button label="Proceed to Pay" />
    </div>
  `,
  styles: ``,
})
export class OrderSummaryComponent {
  cartService = inject(CartService);
  total = computed(() => {
    let total = 0;
    for (const item of this.cartService.cart()) {
      total += item.price;
    }
    return total;
  });
}
