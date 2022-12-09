import React, { useEffect } from 'react';
import Reanimated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { IconsAnimationDuration } from '../../utils/consts';

type ReanimatedIconProps = {
  isFocused: boolean;
  children: React.ReactNode;
};
export const ReanimatedIcon: React.FC<ReanimatedIconProps> = ({
  isFocused,
  children,
}) => {
  const animatedSize = useSharedValue(1);
  const animatedRotation = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        scale: animatedSize.value,
      },
      {
        rotate: `${animatedRotation.value}deg`,
      },
    ],
  }));

  useEffect(() => {
    animatedSize.value = isFocused
      ? withTiming(1, {
          duration: IconsAnimationDuration,
          easing: Easing.bezier(0.44, 0.23, 0.44, 1.76),
        })
      : withTiming(0.5, {
          duration: IconsAnimationDuration,
          easing: Easing.bezier(0.44, 0.23, 0.44, 1.76),
        });
    animatedRotation.value = isFocused
      ? withTiming(360, {
          duration: IconsAnimationDuration,
          easing: Easing.bezier(0.44, 0.23, 0.44, 1.76),
        })
      : withTiming(0, {
          duration: IconsAnimationDuration,
          easing: Easing.bezier(0.44, 0.23, 0.44, 1.76),
        });
  }, [isFocused, animatedRotation, animatedSize]);

  return <Reanimated.View style={[animatedStyle]}>{children}</Reanimated.View>;
};
