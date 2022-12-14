import React, { createContext, useContext, useEffect, useState } from 'react';

import { RestaurantsEntity } from '../../utils/camelizeTypes';
import { restaurantRequest } from './restaurants.services';

const defaultValue: RestaurantsEntity[] = [];
export const RestaurantContext = createContext<RestaurantsEntity[] | null>(
  defaultValue,
);

export const RestaurantContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [restaurants, setRestaurants] = useState<RestaurantsEntity[]>([]);

  useEffect(() => {
    restaurantRequest().then(res => setRestaurants(res));
  }, []);

  return (
    <RestaurantContext.Provider value={restaurants}>
      {children}
    </RestaurantContext.Provider>
  );
};

export const useRestaurantContext = () => useContext(RestaurantContext);
