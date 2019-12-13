import { Tutorial } from '../models/tutorial.model';
import * as TutorialActions from './../actions/tutorial.action';

const initState: Tutorial = {
    name: 'google',
    url: 'http://www.google.com'
};

export function reducer(state: Tutorial[] = [initState], action: TutorialActions.Actions) {
    switch (action.type) {
        case TutorialActions.ADD_TUTORIAL:
            return [...state, action.payload];
            break;

        default:
            return state;
            break;
    }
}
