import React from 'react';
import { ListRenderItem, StyleSheet } from 'react-native';
import { Searchbar, useTheme } from 'react-native-paper';
import { Spacer } from '../../../components/Spacer';
import Reanimated, {
  Layout,
  SlideInLeft,
  SlideInRight,
} from 'react-native-reanimated';

import {
  RestaurantInfo,
  RestaurantInfoProps,
} from '../components/RestaurantInfo';
import {
  StyledRestaurantList,
  StyledSearchContainer,
} from './Restaurants.screen.styled';
import { SlideDelay } from '../../../utils/consts';

const DATA: RestaurantInfoProps[] = [
  {
    name: 'Test',
    photos: ['./../../../assets/restaurant-foods.jpg'],
    address: 'this is the address',
    icon: '',
    isOpenNow: true,
    offers: ['Beer', 'Dessert', 'Pizza'],
    openingHours: '',
    rating: 2.4,
  },
  {
    name: 'Test1',
    photos: ['./../../../assets/restaurant-foods.jpg'],
    address: 'this is the address',
    icon: '',
    isOpenNow: false,
    offers: ['Coffee', 'Sandwich', 'Wine'],
    openingHours: '',
    rating: 2.4,
  },
];

const renderItem: ListRenderItem<RestaurantInfoProps> = ({ item }) => (
  <RestaurantInfo
    key={item.name}
    name={item.name}
    photos={item.photos}
    address={item.address}
    rating={item.rating}
    isOpenNow={item.isOpenNow}
    offers={item.offers}
  />
);

export const Restaurants = () => {
  const { spacing } = useTheme();
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
      layout={Layout.springify()}
      style={styles.container}>
      <StyledSearchContainer>
        <Searchbar value="" />
      </StyledSearchContainer>
      <StyledRestaurantList
        data={DATA}
        keyExtractor={(item: RestaurantInfoProps) => item.name}
        renderItem={renderItem}
      />
      <Spacer from="top" size={spacing.xxl} />
    </Reanimated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
});
