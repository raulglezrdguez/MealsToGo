import React from 'react';
import { Text } from 'react-native-paper';
import Reanimated, {
  Layout,
  SlideInLeft,
  SlideInRight,
} from 'react-native-reanimated';
import { SlideDelay } from '../../../utils/consts';

export const Map = () => {
  return (
    <Reanimated.View
      entering={
        Math.random() > 0.5
          ? SlideInRight.delay(SlideDelay)
          : SlideInLeft.delay(SlideDelay)
      }
      exiting={
        Math.random() > 0.5
          ? SlideInRight.delay(SlideDelay)
          : SlideInLeft.delay(SlideDelay)
      }
      layout={Layout.springify()}>
      <Text>Map.screen</Text>
    </Reanimated.View>
  );
};
