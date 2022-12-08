import React from 'react';
import { Text, useTheme } from 'react-native-paper';

import {
  IconStar,
  IconOpen,
  IconBeer,
  IconCoffee,
  IconDessert,
  IconPizza,
  IconSalad,
  IconSandwich,
  IconSoup,
  IconSpaghetti,
  IconTea,
  IconWine,
} from '../../../components/icons';

import { textStyle } from '../../../utils/styles';
import {
  StyledCard,
  StyledCardCover,
  StyledCol,
  StyledInfo,
  StyledOffers,
  StyledRating,
  StyledRow,
} from './RestaurantInfo.styled';

type OffersType =
  | 'Beer'
  | 'Coffee'
  | 'Dessert'
  | 'Pizza'
  | 'Salad'
  | 'Sandwich'
  | 'Soup'
  | 'Spaqhetti'
  | 'Tea'
  | 'Wine';
export type RestaurantInfoProps = {
  name: string;
  icon?: string;
  photos: string[];
  address?: string;
  openingHours?: string;
  rating?: number;
  isOpenNow?: boolean;
  offers?: OffersType[];
};

export const RestaurantInfo = (restaurant: RestaurantInfoProps) => {
  const {
    name,
    address,
    rating = 0,
    isOpenNow = false,
    offers = [],
  } = restaurant;

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

  const offersIcons = offers.map(offer => {
    switch (offer) {
      case 'Beer':
        return (
          <IconBeer color={theme.colors.accent} size={theme.fontsSize.body} />
        );
      case 'Coffee':
        return (
          <IconCoffee color={theme.colors.accent} size={theme.fontsSize.body} />
        );
      case 'Dessert':
        return (
          <IconDessert
            color={theme.colors.accent}
            size={theme.fontsSize.body}
          />
        );
      case 'Pizza':
        return (
          <IconPizza color={theme.colors.accent} size={theme.fontsSize.body} />
        );
      case 'Salad':
        return (
          <IconSalad color={theme.colors.accent} size={theme.fontsSize.body} />
        );
      case 'Sandwich':
        return (
          <IconSandwich
            color={theme.colors.accent}
            size={theme.fontsSize.body}
          />
        );
      case 'Soup':
        return (
          <IconSoup color={theme.colors.accent} size={theme.fontsSize.body} />
        );
      case 'Spaqhetti':
        return (
          <IconSpaghetti
            color={theme.colors.accent}
            size={theme.fontsSize.body}
          />
        );
      case 'Tea':
        return (
          <IconTea color={theme.colors.accent} size={theme.fontsSize.body} />
        );
      case 'Wine':
        return (
          <IconWine color={theme.colors.accent} size={theme.fontsSize.body} />
        );

      default:
        return null;
    }
  });

  return (
    <StyledCard elevation={5}>
      <StyledCardCover
        key={name}
        source={require('./../../../assets/restaurant-foods.jpg')}
      />
      <StyledInfo>
        <Text style={textStyle('title', theme)}>{name}</Text>

        <StyledRow>
          <StyledCol>
            <StyledRating>
              {stars}
              {restStar}
            </StyledRating>
            <Text style={textStyle('caption', theme)}>{address}</Text>
          </StyledCol>
          {isOpenNow && (
            <IconOpen color={theme.colors.accent} size={theme.spacing.xxl} />
          )}
        </StyledRow>
        <StyledOffers>{offersIcons}</StyledOffers>
      </StyledInfo>
    </StyledCard>
  );
};
