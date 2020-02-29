import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NavigationbarComponent } from "./navigationbar/navigationbar.component";
import { TutorialComponent } from "./tutorial/tutorial.component";
import { FormComponent } from "./form/form.component";
import { TestDialogComponent } from "./test-dialog/test-dialog.component";

const routes: Routes = [
  {
    path: "nav",
    component: NavigationbarComponent
  },
  {
    path: "tutorial",
    component: TutorialComponent
  },
  { path: "form", component: FormComponent },
  { path: "dialog", component: TestDialogComponent },
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
