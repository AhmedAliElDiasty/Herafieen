import {registerScreens} from 'screens';
import {setNavigationDefaultOptions} from 'navigation';
import {Lang, langConfig} from 'translation';
import {getIsDarkMode, storeData} from './themeConfig';
import {onModeChange} from 'slices';

//general app configeration
export const appConfig = async () => {
  //register screens
  registerScreens();

  const theme = await getIsDarkMode();
    storeData(theme);
    theme === 'DARK_MODE' ? onModeChange(true) : onModeChange(false);

  //langauges and local config
  langConfig(Lang.en);

  //navigation config
  setNavigationDefaultOptions();
};
