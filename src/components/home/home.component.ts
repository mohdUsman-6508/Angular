import { Component, inject } from "@angular/core";
import { HousingLocationComponent } from "./housinglocation/housinglocation.component";
import { Housinglocation } from "src/interfaces/housinglocation";
import { HousingService } from "src/services/housing.service";

@Component({
  selector: "app-home",
  imports: [HousingLocationComponent],
  template: `<section>
    <form>
      <input type="text" placeholder="Filter by city" #filter />
      <button
        class="primary"
        type="button"
        (click)="filterResults(filter.value)"
      >
        Search
      </button>
    </form>
    <section class="results">
      @for (housinglocation of filteredLocationList; track housinglocation.id) {
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
  filteredLocationList: Housinglocation[] = [];

  constructor() {
    this.housingService
      .getAllHousingLocations()
      .then((housingLocationList: Housinglocation[]) => {
        this.housingLocationList = housingLocationList;
        this.filteredLocationList = housingLocationList;
      });
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }

    this.filteredLocationList = this.housingLocationList.filter(
      (housingLocation) => {
        return housingLocation?.city.toLowerCase().includes(text.toLowerCase());
      }
    );
  }
}
