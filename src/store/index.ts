import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { appReducer, AppState } from './reducers/appReducer';
import { gameReducer, GameState } from './reducers/gameReducer';

export interface RootState {
    app: AppState,
    game: GameState,
}

const rootReducer = combineReducers({
    app: appReducer.reducer,
    game: gameReducer.reducer,
})

const store = configureStore({
    reducer: rootReducer,
});

export default store;
