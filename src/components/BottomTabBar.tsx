/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Pressable, View } from 'react-native';
import { useTheme } from 'react-native-paper';

import { ReanimatedIcon } from './icons/ReanimatedIcon';
import { IconMap, IconRestaurant, IconSettings } from './icons';

export const BottomTabBar: React.FC<BottomTabBarProps /* & CustomProps */> = ({
  state,
  descriptors,
  navigation,
}) => {
  const theme = useTheme();

  return (
    <View
      style={{
        flexDirection: 'row',
        position: 'absolute',
        height: theme.spacing.xxl,
        right: theme.spacing.sm,
        left: theme.spacing.sm,
        bottom: theme.spacing.sm,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: theme.spacing.sm,
        borderWidth: 1,
        borderColor: theme.colors.accent,
        backgroundColor: theme.colors.background,
      }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({
              name: route.name,
              params: {},
              merge: true,
            });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        let touchableContent = null;

        if (route.name === 'Restaurants') {
          touchableContent = (
            <ReanimatedIcon isFocused={isFocused}>
              <IconRestaurant
                color={isFocused ? theme.colors.accent : theme.colors.text}
                size={theme.fontsSize.h4}
              />
            </ReanimatedIcon>
          );
        }

        if (route.name === 'Map') {
          touchableContent = (
            <ReanimatedIcon isFocused={isFocused}>
              <IconMap
                color={isFocused ? theme.colors.accent : theme.colors.text}
                size={theme.fontsSize.h4}
              />
            </ReanimatedIcon>
          );
        }

        if (route.name === 'Settings') {
          touchableContent = (
            <ReanimatedIcon isFocused={isFocused}>
              <IconSettings
                color={isFocused ? theme.colors.accent : theme.colors.text}
                size={theme.fontsSize.h4}
              />
            </ReanimatedIcon>
          );
        }

        return (
          <Pressable
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {touchableContent}
          </Pressable>
        );
      })}
    </View>
  );
};
