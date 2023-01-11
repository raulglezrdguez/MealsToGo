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
  fetchRestaurants: () => void;
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
  fetchRestaurants: () => {
    set(() => ({ loading: true }));
    restaurantRequest()
      .then(restaurants => set(() => ({ restaurants, loading: false })))
      .catch(error => set(() => ({ loading: false, error })));
  },
  setLoading: loading => set(() => ({ loading })),
  setError: error => set(() => ({ error })),
}));
