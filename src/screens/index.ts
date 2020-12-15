import { Screen } from '../navigation'
import { Splash } from './splashScreen/Splash';

import { createScreen } from 'navigation';

export const screens: Screen[] = [
  { name: "splash", component: Splash },
];


//// register fun
export const registerScreens = () => {
  screens.forEach((screen) => createScreen(screen));
};
