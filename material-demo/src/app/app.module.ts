import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material/material.module";
import { NavigationbarComponent } from './navigationbar/navigationbar.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { FormComponent } from './form/form.component';
@NgModule({
  declarations: [AppComponent, NavigationbarComponent, TutorialComponent, FormComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
