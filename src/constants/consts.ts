import type {NavLinkModel} from '../models/NavLink.model.ts';
import type {LinkTypeType} from '../types/LinkType.type.ts';

export const LINK_TYPE = {
  HEADER: 'linkHeader' as LinkTypeType,
  FOOTER: 'linkFooter' as LinkTypeType,
}

export const LINKS_NAV_HEADER: NavLinkModel[] = [
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
  FR = 'Франция',
  DE = 'Германия',
  GB = 'Англия'
}

export const SectionID = {
  HERO: 'hero',
  GALLERY: 'gallery',
} as const;

