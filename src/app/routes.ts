import { Routes } from "@angular/router";
import { DetailsComponent } from "src/components/details/details.component";
import { HomeComponent } from "src/components/home/home.component";

const routeConfig: Routes = [
  {
    path: "",
    component: HomeComponent,
    title: "Home page",
  },
  {
    path: "details/:id",
    component: DetailsComponent,
    title: "Home details",
  },
];

export default routeConfig;
