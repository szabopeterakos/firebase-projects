import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { StoreModule } from '@ngrx/store'
import { reducers, metaReducers } from './reducers';
import { LoginComponent } from './login/login.component'
import { ScoreboardModule } from './login/scoreboard.module';
import * as fromScoreboard from './login/scoreboard.reducer';

@NgModule({
    declarations: [AppComponent, LoginComponent],
    imports: [
        BrowserModule,
        StoreModule.forRoot({ game: fromScoreboard.reducer }),
        ScoreboardModule
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
