import { AppNavigation } from 'navigation';
import { rootStore } from 'store';



export const onAppLaunch = () => {
  // console.log("app");

  AppNavigation.setRootScreen('splash');
}