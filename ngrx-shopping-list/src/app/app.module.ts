import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";

import { FormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";
import { HttpClientModule } from "@angular/common/http";

import { ShoppingReducer } from "./store/reducers/shopping.reducer";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "../environments/environment";
import { CounterReducer } from "./store/reducers/counter.reducer";
import { EffectsModule } from "@ngrx/effects";
import { ShoppingEffects } from "./store/effects/shopping.effects";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({
      shopping: ShoppingReducer,
      counter: CounterReducer,
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([ShoppingEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
