import type { NavLink } from '../types/NavLink.ts';
import type {LinkType} from '../types/LinkType.ts';

export const LINK_TYPE = {
  HEADER: 'headerLink' as LinkType,
  FOOTER: 'footerLink'  as LinkType,
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


