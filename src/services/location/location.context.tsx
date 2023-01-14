import React, { createContext, useContext, useEffect, useState } from 'react';

import { NortheastOrSouthwestOrLocation } from '../../utils/camelizeTypes';
import { locationRequest } from './location.service';

type ContextType = {
  location: NortheastOrSouthwestOrLocation | null;
  searchLocation: (key: string) => void;
  isLoading: boolean;
  error: string | null;
};
const defaultValue: ContextType | null = {
  location: { lat: 0, lng: 0 },
  searchLocation: (_: string) => {},
  isLoading: false,
  error: null,
};
export const LocationContext = createContext<ContextType | null>(defaultValue);

export const LocationContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [location, setLocation] =
    useState<NortheastOrSouthwestOrLocation | null>({
      lat: 0,
      lng: 0,
    });
  const [keyword, setKeyword] = useState<string>('san francisco');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const onSearch = (key: string) => {
    setKeyword(key);
    setIsLoading(true);
    locationRequest(key)
      .then((result: NortheastOrSouthwestOrLocation | null) => {
        setError(null);
        setIsLoading(false);
        setLocation(result);
      })
      .catch(err => {
        setError(err);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    onSearch(keyword);
  }, [keyword]);

  return (
    <LocationContext.Provider
      value={{ location, searchLocation: onSearch, isLoading, error }}>
      {children}
    </LocationContext.Provider>
  );
};

export const useLocationContext = () => useContext(LocationContext);
