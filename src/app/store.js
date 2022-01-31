import { configureStore } from '@reduxjs/toolkit';

import appReducer from 'features/appSlice';
import boardReducer from 'features/boardSlice';
import gameReducer from 'features/gameReducer';
import playerSelectReducer from 'features/playerSelectSlice';
import scoreReducer from 'features/scoreSlice';

export const store = configureStore({
  reducer: {
    app: appReducer,
    board: boardReducer,
    game: gameReducer,
    playerSelect: playerSelectReducer,
    score: scoreReducer
  },
});