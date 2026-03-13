import type {Art} from '../models/Art.model.ts';
import {nanoid} from '@reduxjs/toolkit';
import {Country} from '../constants/consts.ts';

export const getArts = (): Art[] =>
  [
    {
      id: nanoid(),
      image: {
        desktop: '/images/raster/fr-cupuds-hunt-desktop.jpg',
        tablet: '/images/raster/fr-cupuds-hunt-tablet.jpg',
        tabletMini: '/images/raster/fr-cupuds-hunt-tablet-mini.jpg',
        mobile: '/images/raster/fr-cupuds-hunt-mobile.jpg',
      },
      author: 'Марсель Руссо',
      name: 'Охота Амура',
      details: 'Холст, масло (50х80)',
      country: Country.FR,
      price: 14500
    },
    {
      id: nanoid(),
      image: {
        desktop: '/images/raster/fr-lady-with-dog-desktop.jpg',
        tablet: '/images/raster/fr-lady-with-dog-tablet.jpg',
        tabletMini: '/images/raster/fr-lady-with-tablet-mini.jpg',
        mobile: '/images/raster/fr-lady-with-dog-mobile.jpg'
      },
      author: 'Анри Селин',
      name: 'Дама с собачкой',
      details: 'Акрил, бумага (50х80)',
      country: Country.FR,
      price: 16500
    },
    {
      id: nanoid(),
      image: {
        desktop: '/images/raster/fr-procedure-desktop.jpg',
        tablet: '/images/raster/fr-procedure-tablet.jpg',
        tabletMini: '/images/raster/fr-procedure-tablet-mini.jpg',
        mobile: '/images/raster/fr-procedure-mobile.jpg'
      },
      author: 'Франсуа Дюпон',
      name: 'Процедура',
      details: 'Цветная литография (40х60)',
      country: Country.FR,
      price: 20300
    },
    {
      id: nanoid(),
      image: {
        desktop: '/images/raster/fr-rose-desktop.jpg',
        tablet: '/images/raster/fr-rose-tablet.jpg',
        tabletMini: '/images/raster/fr-rose-tablet-mini.jpg',
        mobile: '/images/raster/fr-rose-mobile.jpg'
      },
      author: 'Луи Детуш',
      name: 'Роза',
      details: 'Бумага, акрил (50х80)',
      country: Country.FR,
      price: 12000
    },
    {
      id: nanoid(),
      image: {
        desktop: '/images/raster/fr-bird-meal-desktop.jpg',
        tablet: '/images/raster/fr-bird-meal-tablet.jpg',
        tabletMini: '/images/raster/fr-bird-meal-tablet-mini.jpg',
        mobile: '/images/raster/fr-bird-meal-mobile.jpg'
      },
      author: 'Франсуа Дюпон',
      name: 'Птичья трапеза',
      details: 'Цветная литография (40х60) ',
      country: Country.FR,
      price: 22500
    },
    {
      id: nanoid(),
      image: {
        desktop: '/images/raster/fr-landscape-with-fish-desktop.jpg',
        tablet: '/images/raster/fr-landscape-with-fish-tablet.jpg',
        tabletMini: '/images/raster/fr-landscape-with-fish-tablet-mini.jpg',
        mobile: '/images/raster/fr-landscape-with-fish-mobile.jpg'
      },
      author: 'Пьер Моранж',
      name: 'Пейзаж с рыбой',
      details: 'Цветная литография (40х60)',
      country: Country.FR,
      price: 20000
    },

    {
      id: nanoid(),
      image: {
        desktop: '/images/raster/de-above-the-city-desktop.jpg',
        tablet: '/images/raster/de-above-the-city-tablet.jpg',
        tabletMini: '/images/raster/de-above-the-city-tablet-mini.jpg',
        mobile: '/images/raster/de-above-the-city-mobile.jpg'
      },
      author: 'Курт Вернер',
      name: 'Над городом',
      details: 'Цветная литография (40х60)',
      country: Country.DE,
      price: 16000
    },
    {
      id: nanoid(),
      image: {
        desktop: '/images/raster/de-bright-birds-desktop.jpg',
        tablet: '/images/raster/de-bright-birds-desktop.jpg',
        tabletMini: '/images/raster/de-bright-birds-desktop.jpg',
        mobile: '/images/raster/de-bright-birds-desktop.jpg'
      },
      author: 'Макс Рихтер',
      name: 'Птенцы',
      details: 'Холст, масло (50х80)',
      country: Country.DE,
      price: 14500
    },
    {
      id: nanoid(),
      image: {
        desktop: '/images/raster/de-among-leaves-desktop.jpg',
        tablet: '/images/raster/de-among-leaves-tablet.jpg',
        tabletMini: '/images/raster/de-among-leaves-tablet-mini.jpg',
        mobile: '/images/raster/de-among-leaves-mobile.jpg'
      },
      author: 'Мартин Майер',
      name: 'Среди листьев',
      details: 'Цветная литография (40х60)',
      country: Country.DE,
      price: 20000
    },
    {
      id: nanoid(),
      image: {
        desktop: '/images/raster/de-bright-birds-desktop.jpg',
        tablet: '/images/raster/de-bright-birds-tablet.jpg',
        tabletMini: '/images/raster/de-bright-birds-tablet-mini.jpg',
        mobile: '/images/raster/de-bright-birds-mobile.jpg'
      },
      author: 'Герман Беккер',
      name: 'Яркая птица',
      details: 'Цветная литография (40х60)',
      country: Country.DE,
      price: 13000
    },
    {
      id: nanoid(),
      image: {
        desktop: '/images/raster/de-woodpecker-desktop.jpg',
        tablet: '/images/raster/de-woodpecker-tablet.jpg',
        tabletMini: '/images/raster/de-woodpecker-tablet-mini.jpg',
        mobile: '/images/raster/de-woodpecker-mobile.jpg'
      },
      author: 'Вульф Бауэр',
      name: 'Дятлы',
      details: 'Бумага, акрил (50х80)',
      country: Country.DE,
      price: 20000
    },
    {
      id: nanoid(),
      image: {
        desktop: '/images/raster/de-big-waters-desktop.jpg',
        tablet: '/images/raster/de-big-waters-tablet.jpg',
        tabletMini: '/images/raster/de-big-waters-tablet-mini.jpg',
        mobile: '/images/raster/de-big-waters-mobile.jpg'
      },
      author: 'Вальтер Хартманн',
      name: 'Большие воды',
      details: 'Бумага, акрил (50х80)',
      country: Country.DE,
      price: 23000
    },

    {
      id: nanoid(),
      image: {
        desktop: '/images/raster/gb-wild-animal-desktop.jpg',
        tablet: '/images/raster/gb-wild-animal-tablet.jpg',
        tabletMini: '/images/raster/gb-wild-animal-tablet-mini.jpg',
        mobile: '/images/raster/gb-wild-animal-mobile.jpg'
      },
      author: 'Пол Смит',
      name: 'Дикий зверь',
      details: 'Акварель, бумага (50х80)',
      country: Country.GB,
      price: 19500
    },
    {
      id: nanoid(),
      image: {
        desktop: '/images/raster/gb-rocky-coast-desktop.jpg',
        tablet: '/images/raster/gb-rocky-coast-tablet.jpg',
        tabletMini: '/images/raster/gb-rocky-coast-tablet-mini.jpg',
        mobile: '/images/raster/gb-rocky-coast-mobile.jpg'
      },
      author: 'Джон Уайт',
      name: 'Скалистый берег',
      details: 'Цветная литография (40х60)',
      country: Country.GB,
      price: 17500
    },
    {
      id: nanoid(),
      image: {
        desktop: '/images/raster/gb-river-and-mountains-desktop.jpg',
        tablet: '/images/raster/gb-river-and-mountains-tablet.jpg',
        tabletMini: '/images/raster/gb-river-and-mountains-tablet-mini.jpg',
        mobile: '/images/raster/gb-river-and-mountains-mobile.jpg'
      },
      author: 'Джим Уотсон',
      name: 'Река и горы',
      details: 'Акварель, бумага (50х80)',
      country: Country.GB,
      price: 20500
    },
    {
      id: nanoid(),
      image: {
        desktop: '/images/raster/gb-white-parrot-desktop.jpg',
        tablet: '/images/raster/gb-white-parrot-tablet.jpg',
        tabletMini: '/images/raster/gb-white-parrot-tablet-mini.jpg',
        mobile: '/images/raster/gb-white-parrot-mobile.jpg'
      },
      author: 'Юджин Зиллион',
      name: 'Белый попугай',
      details: 'Цветная литография (40х60)',
      country: Country.GB,
      price: 15500
    },
    {
      id: nanoid(),
      image: {
        desktop: '/images/raster/gb-fish-desktop.jpg',
        tablet: '/images/raster/gb-fish-tablet.jpg',
        tabletMini: '/images/raster/gb-fish-tablet-mini.jpg',
        mobile: '/images/raster/gb-fish-mobile.jpg'
      },
      author: 'Эрик Гиллман',
      name: 'Ночная рыба',
      details: 'Бумага, акрил (50х80)',
      country: Country.GB,
      price: 12500
    },
    {
      id: nanoid(),
      image: {
        desktop: '/images/raster/gb-orange-cat-desktop.jpg',
        tablet: '/images/raster/gb-orange-cat-tablet.jpg',
        tabletMini: '/images/raster/gb-orange-cat-tablet-mini.jpg',
        mobile: '/images/raster/gb-orange-cat-mobile.jpg'
      },
      author: 'Альфред Барр',
      name: 'Рыжий кот',
      details: 'Цветная литография (40х60)',
      country: Country.GB,
      price: 21000
    }
  ]
