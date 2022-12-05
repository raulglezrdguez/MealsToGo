import React from 'react';
import { View } from 'react-native';
import { Card, Text } from 'react-native-paper';
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

const CardTitle = styled(Text)`
  font-family: ${props => props.theme.fontsFamily.bold};
  font-size: ${props => props.theme.fontsSize.title};
`;

const CardCover = styled(Card.Cover)`
  margin: ${props => props.theme.spacing.sm}px;
  border-radius: 5px;
`;

const Info = styled(View)`
  padding: ${props => props.theme.spacing.sm}px;
`;

const Address = styled(Text)`
  font-family: ${props => props.theme.fontsFamily.light};
  font-size: ${props => props.theme.fontsSize.caption};
`;

export const RestaurantInfo = (restaurant: RestaurantInfoProps) => {
  const { name, address } = restaurant;

  return (
    <Card elevation={5}>
      <CardCover
        key={name}
        source={require('./../../../assets/restaurant-foods.jpg')}
      />
      <Info>
        <CardTitle>{name}</CardTitle>
        <Address>{address}</Address>
      </Info>
    </Card>
  );
};
