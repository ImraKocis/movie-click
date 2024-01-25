import { configureStore } from '@reduxjs/toolkit';
import localStorageReducer from './features/localStorage/localStorageSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      localStorage: localStorageReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
