import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {LIGHT_COLORS, DARK_COLORS, LIGHT_FONTS, DARK_FONTS} from 'common';
import {useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {RootStore} from 'store';
import {getTheme} from 'app/themeConfig';

interface ThemeState {
  isDarkMode: boolean;
  colors: typeof DARK_COLORS | typeof LIGHT_COLORS;
  fonts: typeof LIGHT_FONTS | typeof DARK_FONTS;
}

const initialState: ThemeState = 
    {
      isDarkMode: false,
      colors: LIGHT_COLORS,
      fonts: LIGHT_FONTS,
};
const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    onModeChange(state, isDarkMode: PayloadAction<boolean>) {
      console.log('jjjjjjjjjjjjjj', isDarkMode, state.isDarkMode);

      if (isDarkMode) {
        state.isDarkMode = true;
        state.colors = DARK_COLORS;
        state.fonts = DARK_FONTS;
      } else {
        state.isDarkMode = false;
        state.colors = LIGHT_COLORS;
        state.fonts = LIGHT_FONTS;
      }
    },
  },
});

export const {onModeChange} = themeSlice.actions;

export const themeReducer = themeSlice.reducer;

export const useTheme = () => {
  const theme = useSelector((state: RootStore) => state.theme);

  return theme;
};
