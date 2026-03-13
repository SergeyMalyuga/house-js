import type {Hero} from '../components/hero/Hero.ts';
import type {Header} from '../components/header/Header.ts';
import type {Gallery} from '../components/gallery/Gallery.ts';

export interface MainProps {
  header: Header;
  hero: Hero;
  gallery: Gallery;
}
