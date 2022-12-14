import React from 'react';
import { ListRenderItem, StyleSheet } from 'react-native';
import { ActivityIndicator, Searchbar, useTheme } from 'react-native-paper';
import { Spacer } from '../../../components/Spacer';
import Reanimated, {
  Layout,
  SlideInLeft,
  SlideInRight,
} from 'react-native-reanimated';

import { RestaurantInfo } from '../components/RestaurantInfo';
import {
  StyledActivityIndicatorContainer,
  StyledRestaurantList,
  StyledSearchContainer,
} from './Restaurants.screen.styled';
import { SlideDelay } from '../../../utils/consts';
import { RestaurantsEntity } from '../../../utils/camelizeTypes';
// import { useRestaurantContext } from '../../../services/restaurants/restaurants.context';
import { useRestaurantsStore } from '../../../stores/restaurantsStore';

const renderItem: ListRenderItem<RestaurantsEntity> = ({ item }) => (
  <RestaurantInfo
    key={item.name}
    name={item.name || ''}
    photosList={item.photosList}
    vicinity={item.vicinity}
    rating={item.rating}
    isOpenNow={item.isOpenNow}
    offers={item.offers}
  />
);

export const Restaurants = () => {
  const { spacing, colors } = useTheme();
  // const restaurants = useRestaurantContext();
  const restaurants = useRestaurantsStore(state => state.restaurants);
  const loading = useRestaurantsStore(state => state.loading);
  console.log(loading);
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
      {loading ? (
        <StyledActivityIndicatorContainer>
          <ActivityIndicator
            animating={true}
            size={spacing.xxxl}
            color={colors.accent}
          />
        </StyledActivityIndicatorContainer>
      ) : (
        <StyledRestaurantList
          data={restaurants}
          keyExtractor={(item: RestaurantsEntity) =>
            item.name || Math.floor(Math.random() * 1000).toString()
          }
          renderItem={renderItem}
        />
      )}

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
