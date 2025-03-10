import { Component } from "@angular/core";
import { HousingLocationComponent } from "./housinglocation/housinglocation.component";
import { Housinglocation } from "src/interfaces/housinglocation";

@Component({
  selector: "app-home",
  imports: [HousingLocationComponent],
  template: `<section>
    <form>
      <input type="text" placeholder="Filter by city" />
      <button class="primary" type="button">Search</button>
    </form>
    <section class="results">
      <app-housingLocation></app-housingLocation>
    </section>
  </section> `,
  styleUrls: ["./home.component.css"],
})
export class HomeComponent {
  readonly baseUrl = "https://angular.dev/assets/images/tutorials/common";

  housingLocation: Housinglocation = {
    id: 9999,
    name: "Test Home",
    city: "Test city",
    state: "ST",
    photo: `${this.baseUrl}/example-house.jpg`,
    availableUnits: 99,
    wifi: true,
    laundry: false,
  };
}
