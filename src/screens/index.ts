import { Screen } from '../navigation'
import { Splash } from './splashScreen/Splash';

import { createScreen } from 'navigation';
import { Home } from './home/Home';
import { Favourite } from './favourite/Favourtite';

export const screens: Screen[] = [
  { name: "splash", component: Splash },
  { name: "home", component: Home },
  { name: "favourite", component: Favourite },  
];


//// register fun
export const registerScreens = () => {
  screens.forEach((screen) => createScreen(screen));
};
