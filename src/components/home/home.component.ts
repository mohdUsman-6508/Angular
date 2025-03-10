import { Component, inject } from "@angular/core";
import { HousingLocationComponent } from "./housinglocation/housinglocation.component";
import { Housinglocation } from "src/interfaces/housinglocation";
import { HousingService } from "src/services/housing.service";

@Component({
  selector: "app-home",
  imports: [HousingLocationComponent],
  template: `<section>
    <form>
      <input type="text" placeholder="Filter by city" />
      <button class="primary" type="button">Search</button>
    </form>
    <section class="results">
      @for (housinglocation of housingLocationList; track housinglocation.id) {
      <app-housingLocation
        [housingLocation]="housinglocation"
      ></app-housingLocation>
      }
    </section>
  </section> `,
  styleUrls: ["./home.component.css"],
})
export class HomeComponent {
  housingService = inject(HousingService);
  housingLocationList: Housinglocation[] = [];

  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }
}
