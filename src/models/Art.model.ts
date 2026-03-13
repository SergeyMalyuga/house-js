import type {Country} from '../constants/consts.ts';
import type {ImageResolutions} from './ImageResolutions.model.ts';

export interface Art {
  id: string;
  image: ImageResolutions;
  author: string;
  name: string;
  details: string;
  country: Country;
  price: number;
}
