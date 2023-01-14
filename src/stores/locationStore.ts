import { create } from 'zustand';

import { locationRequest } from '../services/location/location.service';
import { NortheastOrSouthwestOrLocation } from '../utils/camelizeTypes';

type LocationState = {
  keyword: string;
  location: NortheastOrSouthwestOrLocation | null;
  loading: boolean;
  error: string;
};

type LocationActions = {
  setLocation: (newLocation: NortheastOrSouthwestOrLocation) => void;
  fetchLocation: (keyword: string) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string) => void;
};

export const useLocationStore = create<LocationState & LocationActions>(
  set => ({
    keyword: 'san francisco',
    location: { lat: 0, lng: 0 },
    loading: false,
    error: '',
    setLocation: location => set(() => ({ location })),
    fetchLocation: keyword => {
      set(() => ({ loading: true, keyword }));
      locationRequest(keyword)
        .then(location => set(() => ({ location, loading: false })))
        .catch(error =>
          set(() => ({ loading: false, error, location: { lat: 0, lng: 0 } })),
        );
    },
    setLoading: loading => set(() => ({ loading })),
    setError: error => set(() => ({ error })),
  }),
);
