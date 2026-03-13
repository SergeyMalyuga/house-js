import type {Country} from '../constants/consts.ts';

export interface ArtCard {
  id: string;
  image: string;
  author: string;
  name: string;
  details: string;
  country: Country;
  price: number;
}
