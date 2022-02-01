import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import appReducer from 'features/appSlice';
import gameReducer from 'features/gameSlice';

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