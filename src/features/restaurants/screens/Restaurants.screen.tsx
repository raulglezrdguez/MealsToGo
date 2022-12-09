import React from 'react';
import { ListRenderItem } from 'react-native';
import { Searchbar, useTheme } from 'react-native-paper';
import { Spacer } from '../../../components/Spacer';

import {
  RestaurantInfo,
  RestaurantInfoProps,
} from '../components/RestaurantInfo';
import {
  StyledContainer,
  StyledRestaurantList,
  StyledSearchContainer,
} from './Restaurants.screen.styled';

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
    <StyledContainer>
      <StyledSearchContainer>
        <Searchbar value="" />
      </StyledSearchContainer>
      <StyledRestaurantList
        data={DATA}
        keyExtractor={(item: RestaurantInfoProps) => item.name}
        renderItem={renderItem}
      />
      <Spacer from="bottom" size={spacing.xxl} />
    </StyledContainer>
  );
};
