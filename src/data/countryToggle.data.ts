import { Country } from '../constants/consts.ts';
import type { CountryToggleModel } from '../models/CountryToggle.model.ts';

export const getCountriesToggle = (): CountryToggleModel[] => [
  {
    text: 'Франция',
    country: Country.FR,
  },
  {
    text: 'Германия',
    country: Country.DE,
  },
  {
    text: 'Англия',
    country: Country.GB,
  },
];
