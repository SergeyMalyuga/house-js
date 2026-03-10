import style from './Header.module.scss';
import {ListNav} from '../listNav/ListNav.ts';
import {LINKS_NAV_HEADER} from '../../constants/consts.ts';

export class Header {
  private listNav = new ListNav(LINKS_NAV_HEADER);

  public render() {
    return `
    <header class="${style.header}" role="banner">
  <div class="${style.content} container">
    <a class="${style.link}" href="/">
      <img src="/images/vector/logo.svg" width="143" height="35" alt="Логотип компании 'House'">
    </a>
    <div class="${style.wrapperNav}">
        <nav class="${style.nav}" aria-label="Основная навигация">
 ${this.listNav.render()}
    </nav>
    <div class="${style.actions}">
    <button class="${style.buttonBurger} focus" type="button">
    <svg width="20" height="16">
    <use href="/images/vector/burger.svg#burger"/>
</svg>
</button>
    <a class="${style.link} ${style.linkCart} focus" href="#">
    <svg width="24" height="24">
    <use href="/images/vector/header-cart.svg#cart"/>
</svg>
</a>
</div>
</div>
  </div>
</header>
    `;
  }
}
