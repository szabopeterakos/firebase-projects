import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { AppState } from './../app.state';
import { Tutorial } from './../models/tutorial.model';
import * as TutorialActions from './../actions/tutorial.action';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.less']
})
export class CreateComponent implements OnInit {
    constructor(private store: Store<AppState>) {}

    addTutorial(name: string, url: string) {
        const tutorial: Tutorial = { name: name, url: url };
        this.store.dispatch(new TutorialActions.AddTutorial(tutorial));
    }

    ngOnInit() {}
}
