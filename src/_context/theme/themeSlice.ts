import { createSlice } from '@reduxjs/toolkit';

const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
  ? 'dark'
  : 'light';

interface ThemeState {
  value: string;
}

const initialState: ThemeState = {
  value: systemTheme,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setToLight: (state) => {
      state.value = 'light';
    },
    setToDark: (state) => {
      state.value = 'dark';
    },
    setToSystem: (state) => {
      const preferredTheme = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;

      state.value = preferredTheme ? 'dark' : 'light';
    },
  },
});

export const { setToLight, setToDark, setToSystem } = themeSlice.actions;

export default themeSlice.reducer;
