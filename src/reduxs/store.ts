import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistStore,
} from 'redux-persist';
import storage from '@/utils/storage';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import RegisterSlice from './RegisterSlice';
import LoginSlice from './LoginSlice';
import UserSlice from './UserSlice';
import HomeSlice from './HomeSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [''],
};
const rootReducer = combineReducers({
  register: RegisterSlice,
  login: LoginSlice,
  user: UserSlice,
  home: HomeSlice,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
