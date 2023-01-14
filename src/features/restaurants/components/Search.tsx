import React, { useEffect, useState } from 'react';
import { Searchbar } from 'react-native-paper';
import { useLocationStore } from '../../../stores/locationStore';
import { useRestaurantsStore } from '../../../stores/restaurantsStore';
import { StyledSearchContainer } from '../screens/Restaurants.screen.styled';

export const Search = () => {
  const fetchLocation = useLocationStore(state => state.fetchLocation);
  const fetchRestaurants = useRestaurantsStore(state => state.fetchRestaurants);
  const location = useLocationStore(state => state.location);
  const keyword = useLocationStore(state => state.keyword);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    fetchLocation(keyword);
  }, [fetchLocation, keyword]);

  useEffect(() => {
    const loc = `${location?.lat},${location?.lng}`;
    fetchRestaurants(loc);
  }, [location, fetchRestaurants]);

  return (
    <StyledSearchContainer>
      <Searchbar
        value={searchKeyword}
        placeholder={'Search for a location'}
        onSubmitEditing={() => {
          fetchLocation(searchKeyword.toLowerCase());
        }}
        onChangeText={setSearchKeyword}
      />
    </StyledSearchContainer>
  );
};
