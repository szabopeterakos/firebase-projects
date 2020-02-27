import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NavigationbarComponent } from "./navigationbar/navigationbar.component";
import { TutorialComponent } from "./tutorial/tutorial.component";

const routes: Routes = [
  {
    path: "nav",
    component: NavigationbarComponent
  },
  {
    path: "tutorial",
    component: TutorialComponent
  },
  {
    path: "",
    redirectTo: "/tutorial",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
