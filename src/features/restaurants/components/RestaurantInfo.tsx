import React from 'react';
import { Card, useTheme } from 'react-native-paper';
import styled from '../../../theme/styled';

type RestaurantInfoProps = {
  name: string;
  icon?: string;
  photos: string[];
  address?: string;
  openingHours?: string;
  rating?: number;
  isClosedTemporarily?: boolean;
};

const CardTitle = styled(Card.Title)``;

const CardCover = styled(Card.Cover)`
  margin: ${props => props.theme.spacing.sm}px;
  border-radius: 5px;
`;

export const RestaurantInfo = (restaurant: RestaurantInfoProps) => {
  const { name } = restaurant;
  const theme = useTheme();

  return (
    <Card elevation={5}>
      <CardTitle
        title={name}
        titleStyle={{ fontFamily: theme.fontsFamily.bold }}
      />
      <CardCover
        key={name}
        source={require('./../../../assets/restaurant-foods.jpg')}
      />
    </Card>
  );
};
