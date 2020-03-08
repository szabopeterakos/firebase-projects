import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ToDoComponent } from "./ToDo/to-do/to-do.component";
import { StoreModule } from "@ngrx/store";
import { ToDoReducer } from "./todo.reducer";
import { EffectsModule } from "@ngrx/effects";
import { ToDoEffects } from "./todo.effects";
import { HttpClientModule } from "@angular/common/http";
import { fakeBackendProvider } from "./fake-backend";

@NgModule({
  declarations: [AppComponent, ToDoComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({ todos: ToDoReducer }),
    EffectsModule.forRoot([ToDoEffects])
  ],
  providers: [fakeBackendProvider],
  bootstrap: [AppComponent]
})
export class AppModule {}
