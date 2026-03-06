import style from './Header.module.scss';
import {ListNav} from '../listNav/ListNav.ts';
import {LINKS_NAV_HEADER} from '../../constants/consts.ts';

export class Header {
  private listNav = new ListNav(LINKS_NAV_HEADER);

  public render() {
    return `
    <header class="${style.header}" role="banner">
  <div class="${style.content} container">
    <a class="${style.linkLogo}" href="/">
      <img src="/images/vector/logo.svg" width="143" height="35" alt="Логотип компании 'House'">
    </a>
    <nav class="nav" aria-label="Основная навигация">
 ${this.listNav.render()}
    </nav>
  </div>
</header>
    `;
  }
}
