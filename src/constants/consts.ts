import type { NavLink } from '../types/NavLink.ts';
import type {LinkType} from '../types/LinkType.ts';

export const LINKS_NAV_HEADER: NavLink[] = [
  {
    text: 'Репродукции',
    url: '#',
  },
  {
    text: 'Новинки',
    url: '#',
  },
  {
    text: 'О нас',
    url: '#',
  },
];

export const LINK_TYPE = {
  HEADER: 'header' as LinkType,
  FOOTER: 'footer'  as LinkType,
}
