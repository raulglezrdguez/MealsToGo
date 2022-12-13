import { Camelize } from './camelize';

export interface IRestaurant {
  html_attributions?: null[] | null;
  next_page_token: string;
  results?: IResultsEntity[] | null;
  status: string;
}
export interface IResultsEntity {
  business_status?: string | null;
  geometry?: IGeometry;
  icon?: string;
  name?: string;
  opening_hours?: OpeningHours | null;
  photos?: PhotosEntity[] | null;
  place_id?: string;
  rating?: number | null;
  reference?: string;
  user_ratings_total?: number | null;
  vicinity?: string;
  plus_code?: PlusCode | null;
  scope?: string | null;
  types?: string[] | null;
  price_level?: number | null;
}
export interface IGeometry {
  location?: INortheastOrSouthwestOrLocation;
  viewport?: Viewport;
}
export interface INortheastOrSouthwestOrLocation {
  lat?: number;
  lng?: number;
}
export interface Viewport {
  northeast?: INortheastOrSouthwestOrLocation;
  southwest?: INortheastOrSouthwestOrLocation;
}
export interface OpeningHours {
  open_now?: boolean;
}
export interface PhotosEntity {
  height?: number;
  html_attributions?: (string | null)[] | null;
  photo_reference?: string;
  width?: number;
}
export interface PlusCode {
  compound_code?: string;
  global_code?: string;
}

export type ICamelizeRestaurant = Camelize<IRestaurant>;
