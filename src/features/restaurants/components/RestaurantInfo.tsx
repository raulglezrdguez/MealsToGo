import React from 'react';
import { Card, Text, useTheme } from 'react-native-paper';

import { IconStar, IconOpen } from '../../../components/icons';

import { textStyle } from '../../../utils/styles';
import { CardCover, Col, Info, Rating, Row } from './RestaurantInfo.styled';

type RestaurantInfoProps = {
  name: string;
  icon?: string;
  photos: string[];
  address?: string;
  openingHours?: string;
  rating?: number;
  isOpenNow?: boolean;
};

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
