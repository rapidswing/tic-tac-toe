import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';

import appReducer from 'features/appSlice';
import gameReducer from 'features/gameSlice';

// export const store = configureStore({
//   reducer: {
//     app: appReducer,
//     game: gameReducer
//   },
// });

const reducers = combineReducers({
  app: appReducer,
  game: gameReducer
});

const persistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTool: process.env.NODE_ENV !== 'production',
  middleware: [thunk]
});

export default store;