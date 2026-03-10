import './style.scss';
import {MainPage} from './pages/main/Main.ts';
import styles from './components/header/Header.module.scss'
import {ToggleNavMenu} from './modules/ToggleNavMenu.ts';

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app') as HTMLElement;
  const mainPage = new MainPage(app);
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
