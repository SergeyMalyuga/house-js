import type {Hero} from '../components/hero/Hero.ts';
import type {Header} from '../components/header/Header.ts';
import type {Gallery} from '../components/gallery/Gallery.ts';
import type {NewCollection} from '../components/new-collection/NewCollection.ts';

export interface MainProps {
  header: Header;
  hero: Hero;
  gallery: Gallery;
  newCollection: NewCollection;
}
