import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material/material.module";
import { NavigationbarComponent } from "./navigationbar/navigationbar.component";
import { TutorialComponent } from "./tutorial/tutorial.component";
import { FormComponent, PTSnackBar } from "./form/form.component";
import { TestDialogComponent } from "./test-dialog/test-dialog.component";
import { MyDialogComponent } from "./my-dialog/my-dialog.component";
@NgModule({
  declarations: [
    AppComponent,
    NavigationbarComponent,
    TutorialComponent,
    PTSnackBar,
    FormComponent,
    TestDialogComponent,
    MyDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  entryComponents: [PTSnackBar, MyDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
