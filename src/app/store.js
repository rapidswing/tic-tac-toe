import { configureStore } from '@reduxjs/toolkit';

import appReducer from 'features/appSlice';
import gameReducer from 'features/gameSlice';

export const store = configureStore({
  reducer: {
    app: appReducer,
    game: gameReducer
  },
});