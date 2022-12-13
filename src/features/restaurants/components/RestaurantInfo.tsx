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
  // IconBeer,
  // IconCoffee,
  // IconDessert,
  // IconPizza,
  // IconSalad,
  // IconSandwich,
  // IconSoup,
  // IconSpaghetti,
  // IconTea,
  // IconWine,
} from '../../../components/icons';
import { RestaurantsEntity } from '../../../utils/camelizeTypes';
import { SlideDelay } from '../../../utils/consts';

import { textStyle } from '../../../utils/styles';
import {
  StyledCard,
  StyledCardCover,
  StyledCol,
  StyledInfo,
  // StyledOffers,
  StyledRating,
  StyledRow,
} from './RestaurantInfo.styled';

// type OffersType =
//   | 'Beer'
//   | 'Coffee'
//   | 'Dessert'
//   | 'Pizza'
//   | 'Salad'
//   | 'Sandwich'
//   | 'Soup'
//   | 'Spaqhetti'
//   | 'Tea'
//   | 'Wine';

export const RestaurantInfo = (restaurant: RestaurantsEntity) => {
  const {
    name,
    vicinity,
    rating = 0,
    isOpenNow = false,
    // offers = [],
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

  // const offersIcons = offers.map(offer => {
  //   switch (offer) {
  //     case 'Beer':
  //       return (
  //         <IconBeer
  //           key={'beer'}
  //           color={theme.colors.accent}
  //           size={theme.fontsSize.body}
  //         />
  //       );
  //     case 'Coffee':
  //       return (
  //         <IconCoffee
  //           key={'coffee'}
  //           color={theme.colors.accent}
  //           size={theme.fontsSize.body}
  //         />
  //       );
  //     case 'Dessert':
  //       return (
  //         <IconDessert
  //           key={'dessert'}
  //           color={theme.colors.accent}
  //           size={theme.fontsSize.body}
  //         />
  //       );
  //     case 'Pizza':
  //       return (
  //         <IconPizza
  //           key={'pizza'}
  //           color={theme.colors.accent}
  //           size={theme.fontsSize.body}
  //         />
  //       );
  //     case 'Salad':
  //       return (
  //         <IconSalad
  //           key={'salad'}
  //           color={theme.colors.accent}
  //           size={theme.fontsSize.body}
  //         />
  //       );
  //     case 'Sandwich':
  //       return (
  //         <IconSandwich
  //           key={'sandwich'}
  //           color={theme.colors.accent}
  //           size={theme.fontsSize.body}
  //         />
  //       );
  //     case 'Soup':
  //       return (
  //         <IconSoup
  //           key={'soup'}
  //           color={theme.colors.accent}
  //           size={theme.fontsSize.body}
  //         />
  //       );
  //     case 'Spaqhetti':
  //       return (
  //         <IconSpaghetti
  //           key={'spaghetti'}
  //           color={theme.colors.accent}
  //           size={theme.fontsSize.body}
  //         />
  //       );
  //     case 'Tea':
  //       return (
  //         <IconTea
  //           key={'tea'}
  //           color={theme.colors.accent}
  //           size={theme.fontsSize.body}
  //         />
  //       );
  //     case 'Wine':
  //       return (
  //         <IconWine
  //           key={'wine'}
  //           color={theme.colors.accent}
  //           size={theme.fontsSize.body}
  //         />
  //       );

  //     default:
  //       return null;
  //   }
  // });

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
              <Text style={textStyle('caption', theme)}>{vicinity}</Text>
            </StyledCol>
            {isOpenNow && (
              <IconOpen color={theme.colors.accent} size={theme.spacing.xxl} />
            )}
          </StyledRow>
          {/* <StyledOffers>{offersIcons}</StyledOffers> */}
        </StyledInfo>
      </StyledCard>
    </Reanimated.View>
  );
};
