// import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';

export const App: React.FC = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <GestureHandlerRootView style={styles.gestureHandler}>
      {/* <NavigationContainer></NavigationContainer> */}
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  gestureHandler: { flex: 1 },
});
