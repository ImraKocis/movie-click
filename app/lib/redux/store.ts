import { configureStore } from '@reduxjs/toolkit';
import localStorageReducer from './features/localStorage/localStorageSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      localStorage: localStorageReducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
