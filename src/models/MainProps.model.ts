import type { Hero } from '../components/hero/Hero.ts';
import type { Header } from '../components/header/Header.ts';
import type { Gallery } from '../components/gallery/Gallery.ts';
import type { NewCollection } from '../components/new-collection/NewCollection.ts';
import type {Team} from '../components/team/Team.ts';
import type {Footer} from '../components/footer/Footer.ts';

export interface MainProps {
  header: Header;
  hero: Hero;
  gallery: Gallery;
  newCollection: NewCollection;
  team: Team;
  footer: Footer;
}
