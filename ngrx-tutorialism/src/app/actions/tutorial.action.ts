import { Action } from '@ngrx/store';

export const ADD_TUTORIAL = '[tutorial] add';
export const REMOVE_TUTORIAL = '[tutorial] remove';

export class AddTutorial implements Action {
    readonly type = ADD_TUTORIAL;
    constructor(public payload: any) {}
}

export class RemoveTutorial implements Action {
    readonly type = REMOVE_TUTORIAL;
    constructor(public payload: any) {}
}

export type Actions = AddTutorial | RemoveTutorial;
