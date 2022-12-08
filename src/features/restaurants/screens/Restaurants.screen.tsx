import React from 'react';
import { ListRenderItem } from 'react-native';
import { Searchbar } from 'react-native-paper';

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
    name={item.name}
    photos={item.photos}
    address={item.address}
    rating={item.rating}
    isOpenNow={item.isOpenNow}
    offers={item.offers}
  />
);

export const Restaurants = () => {
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
    </StyledContainer>
  );
};
