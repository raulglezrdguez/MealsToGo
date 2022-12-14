export interface IRestaurants {
  htmlAttributions?: null[] | null;
  nextPageToken: string;
  results?: RestaurantsEntity[] | null;
  status: string;
}

export const Offers = [
  'Beer',
  'Coffee',
  'Dessert',
  'Pizza',
  'Salad',
  'Sandwich',
  'Soup',
  'Spaqhetti',
  'Tea',
  'Wine',
] as const;
export type OffersType = typeof Offers[number];

export interface RestaurantsEntity {
  businessStatus?: string;
  geometry?: Geometry;
  icon?: string;
  name?: string;
  openingHours?: OpeningHours | null;
  photos?: PhotosEntity[] | null;
  placeId?: string;
  plusCode?: PlusCode;
  priceLevel?: number;
  rating?: number;
  reference?: string;
  scope?: string;
  types?: string[] | null;
  userRatingsTotal?: number;
  vicinity?: string;
  permanentlyClosed?: boolean | null;
  isClosedTemporarily?: boolean | null;
  isOpenNow?: boolean | null;
  photosList?: any[] | null;
  offers?: OffersType[] | null;
}
export interface Geometry {
  location: NortheastOrSouthwestOrLocation;
  viewport: Viewport;
}
export interface NortheastOrSouthwestOrLocation {
  lat: number;
  lng: number;
}
export interface Viewport {
  northeast: NortheastOrSouthwestOrLocation;
  southwest: NortheastOrSouthwestOrLocation;
}
export interface OpeningHours {
  openNow: boolean;
}
export interface PhotosEntity {
  height: number;
  htmlAttributions?: string[] | null;
  photoReference: string;
  width: number;
}
export interface PlusCode {
  compoundCode: string;
  globalCode: string;
}
