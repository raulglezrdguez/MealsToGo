import React from 'react';
import { Card } from 'react-native-paper';
import styled from '../../../styled';

type RestaurantInfoProps = {
  name: string;
  icon?: string;
  photos: string[];
  address?: string;
  openingHours?: string;
  rating?: number;
  isClosedTemporarily?: boolean;
};

const CardCover = styled(Card.Cover)`
  margin: ${props => props.theme.spacing.sm}px;
  border-radius: 5px;
`;

export const RestaurantInfo = (restaurant: RestaurantInfoProps) => {
  const { name } = restaurant;

  return (
    <Card elevation={5}>
      <Card.Title title={name} />
      <CardCover
        key={name}
        source={require('./../../../assets/restaurant-foods.jpg')}
      />
    </Card>
  );
};
