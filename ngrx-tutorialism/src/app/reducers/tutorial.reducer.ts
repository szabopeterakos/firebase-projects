import { Tutorial } from '../models/tutorial.model';
import * as TutorialActions from './../actions/tutorial.action';

const initState: Tutorial[] = [
    {
        name: 'google',
        url: 'http://www.google.com'
    },
    {
        name: 'youtube',
        url: 'http://www.youtube.com'
    }
];

export function reducer(state: Tutorial[] = initState, action: TutorialActions.Actions) {
    switch (action.type) {
        case TutorialActions.ADD_TUTORIAL:
            return [...state, action.payload];

        // Add this case:
        case TutorialActions.REMOVE_TUTORIAL:
            state.splice(action.payload, 1);
            return state;

        default:
            return state;
    }
}
