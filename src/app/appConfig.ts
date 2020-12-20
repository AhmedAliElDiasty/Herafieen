import {registerScreens} from 'screens';
import {setNavigationDefaultOptions} from 'navigation';
import {Lang, langConfig} from 'translation';
import {getTheme} from './themeConfig';
import {onModeChange} from 'slices';
import {getLang} from './langConfig';
import { rootStore } from 'store';

//general app configeration
export const appConfig = async () => {
  //register screens
  registerScreens();

  const theme = await getTheme();
  rootStore.dispatch(theme === 'DARK_MODE' ? onModeChange(true) : onModeChange(false));

  // langauges and local config
  const lang = await getLang();
  if (lang == 'ar') {
    langConfig(Lang.ar);
  } else langConfig(Lang.en);

  //navigation config
  setNavigationDefaultOptions();
};
