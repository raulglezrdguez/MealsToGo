import React from 'react';
import { Text, useTheme } from 'react-native-paper';
import Reanimated, {
  Layout,
  SlideInLeft,
  SlideInRight,
} from 'react-native-reanimated';

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
import { RestaurantsEntity } from '../../../utils/camelizeTypes';
import { SlideDelay } from '../../../utils/consts';

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

export const RestaurantInfo = (restaurant: RestaurantsEntity) => {
  const {
    name,
    vicinity,
    rating = 0,
    isOpenNow = false,
    photosList = [],
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

  const offersIcons = offers?.map(offer => {
    switch (offer) {
      case 'Beer':
        return (
          <IconBeer
            key={'beer'}
            color={theme.colors.accent}
            size={theme.fontsSize.h4}
          />
        );
      case 'Coffee':
        return (
          <IconCoffee
            key={'coffee'}
            color={theme.colors.accent}
            size={theme.fontsSize.h4}
          />
        );
      case 'Dessert':
        return (
          <IconDessert
            key={'dessert'}
            color={theme.colors.accent}
            size={theme.fontsSize.h4}
          />
        );
      case 'Pizza':
        return (
          <IconPizza
            key={'pizza'}
            color={theme.colors.accent}
            size={theme.fontsSize.h4}
          />
        );
      case 'Salad':
        return (
          <IconSalad
            key={'salad'}
            color={theme.colors.accent}
            size={theme.fontsSize.h4}
          />
        );
      case 'Sandwich':
        return (
          <IconSandwich
            key={'sandwich'}
            color={theme.colors.accent}
            size={theme.fontsSize.h4}
          />
        );
      case 'Soup':
        return (
          <IconSoup
            key={'soup'}
            color={theme.colors.accent}
            size={theme.fontsSize.h4}
          />
        );
      case 'Spaqhetti':
        return (
          <IconSpaghetti
            key={'spaghetti'}
            color={theme.colors.accent}
            size={theme.fontsSize.h4}
          />
        );
      case 'Tea':
        return (
          <IconTea
            key={'tea'}
            color={theme.colors.accent}
            size={theme.fontsSize.h4}
          />
        );
      case 'Wine':
        return (
          <IconWine
            key={'wine'}
            color={theme.colors.accent}
            size={theme.fontsSize.h4}
          />
        );

      default:
        return null;
    }
  });

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
      layout={Layout.springify()}>
      <StyledCard elevation={5}>
        {photosList && photosList.length > 0 && (
          <StyledCardCover key={name} source={photosList[0]} />
        )}

        <StyledInfo>
          <Text style={textStyle('title', theme)}>{name}</Text>

          <StyledRow>
            <StyledCol>
              <StyledRow>
                <StyledRating>
                  {stars}
                  {restStar}
                </StyledRating>
                {offersIcons && <StyledOffers>{offersIcons}</StyledOffers>}
              </StyledRow>
              <Text style={textStyle('caption', theme)}>{vicinity}</Text>
            </StyledCol>
            {isOpenNow && (
              <IconOpen color={theme.colors.accent} size={theme.spacing.xxl} />
            )}
          </StyledRow>
        </StyledInfo>
      </StyledCard>
    </Reanimated.View>
  );
};
