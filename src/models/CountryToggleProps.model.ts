import type {CountryToggleModel} from './CountryToggle.model.ts';
import type {Country} from '../constants/consts.ts';

export interface CountryToggleProps {
  countryToggle: CountryToggleModel,
  onCountryChange: (country: Country) => void,
  isActive: boolean,
}
