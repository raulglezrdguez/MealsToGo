import { create } from 'zustand';

import { restaurantRequest } from '../services/restaurants/restaurants.services';
import { RestaurantsEntity } from '../utils/camelizeTypes';

type RestaurantsState = {
  restaurants: RestaurantsEntity[];
  loading: boolean;
  error: string;
};

type RestaurantsActions = {
  setRestaurants: (newRestaurants: RestaurantsEntity[]) => void;
  fetchRestaurants: (location: string) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string) => void;
};

export const useRestaurantsStore = create<
  RestaurantsState & RestaurantsActions
>(set => ({
  restaurants: [],
  loading: false,
  error: '',
  setRestaurants: restaurants => set(() => ({ restaurants })),
  fetchRestaurants: location => {
    set(() => ({ loading: true }));
    restaurantRequest(location)
      .then(restaurants => set(() => ({ restaurants, loading: false })))
      .catch(error => set(() => ({ loading: false, error, restaurants: [] })));
  },
  setLoading: loading => set(() => ({ loading })),
  setError: error => set(() => ({ error })),
}));
