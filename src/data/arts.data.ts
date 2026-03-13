import type {ArtCard} from '../models/ArtCard.model.ts';
import {nanoid} from '@reduxjs/toolkit';
import {Country} from '../constants/consts.ts';

export const getArts = (): ArtCard[] =>
  [
    {
      id: nanoid(),
      image: {desktop: '', tablet: '', tabletMini: '', mobile: ''},
      author: '',
      name: '',
      details: '',
      country: Country.FR,
      price: 120
    }
  ]
