import './style.scss';
import {MainPage} from './pages/main/Main.ts';
import styles from './components/header/Header.module.scss'
import {ToggleNavMenu} from './modules/ToggleNavMenu.ts';
import {ArtsService} from './services/ArtsService.ts';
import {Header} from './components/header/Header.ts';
import {Hero} from './components/hero/Hero.ts';
import {Gallery} from './components/gallery/Gallery.ts';
import {NewCollection} from './components/new-collection/NewCollection.ts';

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app') as HTMLElement;
  const artsService = new ArtsService();

  const header = new Header();
  const hero = new Hero();
  const gallery = new Gallery(artsService);
  const newCollection = new NewCollection();

  const mainPage = new MainPage(app, {header, hero, gallery, newCollection});
  mainPage.render();

  const navMenu = document.querySelector(`.${styles.nav}`) as HTMLElement;
  const toggleBtn = document.querySelector(`.${styles.buttonBurger}`) as HTMLButtonElement;

  if (navMenu && toggleBtn) {
    new ToggleNavMenu(toggleBtn, navMenu);
  } else {
    console.error(
      'ToggleNavMenu: не найдены элементы .%s или .%s',
      styles.nav,
      styles.buttonBurger
    );
  }
});
