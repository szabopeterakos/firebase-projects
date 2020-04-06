import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { UserComponent } from "./user/user.component";
import { SingupComponent } from "./user/singup/singup.component";
import { LoginComponent } from "./user/login/login.component";

export const routes: Routes = [
  { path: "home", component: HomeComponent },
  {
    path: "signup",
    component: UserComponent,
    children: [{ path: "", component: SingupComponent }]
  },
  {
    path: "login",
    component: UserComponent,
    children: [{ path: "", component: LoginComponent }]
  },
  {
    path: "",
    redirectTo: "/login",
    pathMatch: "full"
  }
];
