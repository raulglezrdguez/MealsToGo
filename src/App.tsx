import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';

import { BottomTabsNavigator } from './screens/BottomTabs.navigator';

export const App: React.FC = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return <BottomTabsNavigator />;
};
