import { Tutorial } from './models/tutorial.model';

export interface AppState {
    readonly tutorialState: Tutorial[];
}
