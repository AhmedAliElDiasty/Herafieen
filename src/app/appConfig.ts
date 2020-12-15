
import { registerScreens } from 'screens';
import { setNavigationDefaultOptions } from 'navigation';
import { Lang, langConfig } from 'translation';

//general app configeration
export const appConfig = async () => {
  //register screens 
  registerScreens();
  //langauges and local config
  langConfig(Lang.en);

  //navigation config
  setNavigationDefaultOptions();
}