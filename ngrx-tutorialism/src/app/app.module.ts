import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { ReadComponent } from './read/read.component';
import { WriteComponent } from './write/write.component';
import { CreateComponent } from './create/create.component';
import * as fromtutorial from './reducers/tutorial.reducer';

@NgModule({
    declarations: [AppComponent, ReadComponent, WriteComponent, CreateComponent],
    imports: [BrowserModule, AppRoutingModule, StoreModule.forRoot({ tutorialState: fromtutorial.reducer })],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
