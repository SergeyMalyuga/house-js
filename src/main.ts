import './style.scss';
import {MainPage} from './pages/main/main.ts';

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app') as HTMLElement;
  const mainPage = new MainPage(app);
  mainPage.render();
});
