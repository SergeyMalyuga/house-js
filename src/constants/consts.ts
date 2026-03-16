import type {NavLink} from '../models/NavLink.model.ts';
import type {LinkType} from '../types/LinkType.type.ts';
import buttonStyles from '../components/button/Button.module.scss'

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
  FR = 'France',
  DE = 'Germany',
  GB = 'England'
}

export const SectionID = {
  HERO: 'hero',
  GALLERY: 'gallery',
} as const;

export const BUTTON_TYPE = {
  CARD: `${buttonStyles.buttonCard}`,
  GENERAL: `${buttonStyles.buttonGeneral}`,
} as const;

