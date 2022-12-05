import React from 'react';
import { View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import styled from '../../../theme/styled';
import { RestaurantInfo } from '../components/RestaurantInfo';

const Container = styled(View)`
  flex: 1;
  justify-content: flex-start;
`;

const SearchContainer = styled.View`
  margin: ${props => props.theme.spacing.sm}px;
`;

const RestaurantsContainer = styled(View)`
  margin: ${props => props.theme.spacing.sm}px;
`;

export const Restaurants = () => {
  return (
    <Container>
      <SearchContainer>
        <Searchbar value="" />
      </SearchContainer>
      <RestaurantsContainer>
        <RestaurantInfo
          name="test"
          photos={['./../../../assets/restaurant-foods.jpg']}
          address="Address: some random address"
          rating={3.5}
        />
      </RestaurantsContainer>
    </Container>
  );
};
