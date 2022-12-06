import React from 'react';
import { View } from 'react-native';
import { Card, Text, useTheme } from 'react-native-paper';

import { IconStar, IconOpen } from '../../../components/icons';

import styled from '../../../theme/styled';
import { textStyle } from '../../../utils/styles';

type RestaurantInfoProps = {
  name: string;
  icon?: string;
  photos: string[];
  address?: string;
  openingHours?: string;
  rating?: number;
  isOpenNow?: boolean;
};

const CardCover = styled(Card.Cover)`
  margin: ${props => props.theme.spacing.sm}px;
  border-radius: 5px;
`;

const Info = styled(View)`
  padding: ${props => props.theme.spacing.sm}px;
`;

const Rating = styled(View)`
  flex-direction: row;
  padding-top: ${props => props.theme.spacing.sm}px;
  padding-bottom: ${props => props.theme.spacing.sm}px;
`;

const Col = styled(View)`
  flex-direction: column;
  justify-content: flex-start;
`;

const Row = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const RestaurantInfo = (restaurant: RestaurantInfoProps) => {
  const { name, address, rating = 0, isOpenNow = false } = restaurant;

  const theme = useTheme();

  const stars = [...Array(Math.floor(rating))].map((_, i) => (
    <IconStar
      key={i}
      color={theme.colors.accent}
      strokeColor={theme.colors.text}
      size={theme.spacing.md}
    />
  ));
  const restStar = (
    <IconStar
      color={theme.colors.accent}
      strokeColor={theme.colors.text}
      size={theme.spacing.md}
      percent={rating % Math.floor(rating)}
    />
  );

  return (
    <Card elevation={5}>
      <CardCover
        key={name}
        source={require('./../../../assets/restaurant-foods.jpg')}
      />
      <Info>
        <Text style={textStyle('title', theme)}>{name}</Text>

        <Row>
          <Col>
            <Rating>
              {stars}
              {restStar}
            </Rating>
            <Text style={textStyle('caption', theme)}>{address}</Text>
          </Col>
          {isOpenNow && (
            <IconOpen color={theme.colors.accent} size={theme.spacing.xxl} />
          )}
        </Row>
      </Info>
    </Card>
  );
};
