import type {NavLink} from '../types/NavLink.ts';
import type {LinkType} from '../types/LinkType.ts';

export const LINK_TYPE = {
  HEADER: 'linkHeader' as LinkType,
  FOOTER: 'linkFooter' as LinkType,
}

export const LINKS_NAV_HEADER: NavLink[] = [
  {
    text: 'Репродукции',
    url: '#',
    type: LINK_TYPE.HEADER
  },
  {
    text: 'Новинки',
    url: '#',
    type: LINK_TYPE.HEADER
  },
  {
    text: 'О нас',
    url: '#',
    type: LINK_TYPE.HEADER
  },
];

export const Hooks = {
  HEADER: '[data-hook="header"]',
  HERO: '[data-hook="hero"]',
  GALLERY: '[data-hook="gallery"]',
} as const;

export enum Country {
  FRANCE = 'Франция',
  GERMANY = 'Германия',
  ENGLAND = 'Англия'
}

export const SectionID = {
  HERO: 'hero',
  GALLERY: 'gallery',
} as const;

