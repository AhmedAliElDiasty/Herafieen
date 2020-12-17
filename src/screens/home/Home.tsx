import React from 'react';
import { NavigationFunctionComponent } from 'react-native-navigation';
import { Menu } from 'components';
import ScalingDrawer from 'react-native-scaling-drawer';
import { HomeComponent } from 'components/home/HomeComponent';

export const Home: NavigationFunctionComponent = (props) => {
  const drawerRef = React.createRef();
  return (
    <ScalingDrawer
      ref={drawerRef}
      content={<Menu componentId={props.componentId} />}
      scalingFactor={0.75}
    >
      <HomeComponent componentId={props.componentId} drawerRef={drawerRef} />
    </ScalingDrawer>
  );
};
