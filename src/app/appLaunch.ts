import { getWalkthrough } from 'cache/WalktrhroughCache';
import { AppNavigation } from 'navigation';
import { rootStore } from 'store';



export const onAppLaunch = async() => {
  // console.log("app");
  const noWalkthrough = await getWalkthrough();
  if (noWalkthrough) {
    AppNavigation.setRootScreen('home');
  } else {
    AppNavigation.setRootScreen('walkthrough');
  }
  
}