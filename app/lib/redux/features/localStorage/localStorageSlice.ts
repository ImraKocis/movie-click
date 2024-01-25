'use client';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { LocalStorageFavorites } from '@/app/lib/localStorage/types';
import { RootState } from '@/app/lib/redux/store';

export interface LocalStorageSlice {
  localStorage: LocalStorageFavorites[];
}

const initialState: LocalStorageSlice = {
  localStorage: [],
};

export const localStorageSlice = createSlice({
  name: 'localStorage',
  initialState,
  reducers: {
    set: (state, action: PayloadAction<LocalStorageFavorites[]>) => {
      state.localStorage = action.payload;
    },
    addItem: (state, action: PayloadAction<LocalStorageFavorites>) => {
      state.localStorage.push(action.payload);
      localStorage.setItem(
        'favoriteMoviesIds',
        JSON.stringify(state.localStorage)
      );
    },
    deleteItem: (state, action: PayloadAction<LocalStorageFavorites>) => {
      const newState = [...state.localStorage];

      state.localStorage = newState.filter(
        (item) => item.id !== action.payload.id
      );
      localStorage.setItem(
        'favoriteMoviesIds',
        JSON.stringify(state.localStorage)
      );
    },
    clearAll: (state) => {
      state.localStorage = [];
      localStorage.removeItem('favoriteMoviesIds');
    },
  },
});

export const selectLocalStorage = (state: RootState) =>
  state.localStorage.localStorage;

export const { set, addItem, deleteItem, clearAll } = localStorageSlice.actions;
export default localStorageSlice.reducer;
