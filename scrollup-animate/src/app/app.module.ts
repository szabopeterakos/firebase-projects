import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ScrollupComponent } from './scrollup/scrollup.component';
import { GreatingComponent } from './greating/greating.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ScrollupComponent,
    GreatingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
