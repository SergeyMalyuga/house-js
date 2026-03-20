import styles from './Footer.module.scss';
import {ListNav} from '../listNav/ListNav.ts';
import {LINKS_NAV_ABOUT, LINKS_NAV_NEW, LINKS_NAV_REPRODUCTIONS} from '../../constants/consts.ts';

export class Footer {
  private navReproductions = new ListNav(LINKS_NAV_REPRODUCTIONS);
  private navNew = new ListNav(LINKS_NAV_NEW);
  private navAbout = new ListNav(LINKS_NAV_ABOUT);

  public render(): HTMLElement {
    const footer = document.createElement('footer') as HTMLElement;
    footer.className = `${styles.footer}`;
    footer.innerHTML = `
    <div class="${styles.content} container">
    <div class="${styles.wrapperCommunication}">
    <a class="${styles.linkLogo}" href="/">
      <img src="/images/vector/logo.svg" width="143" height="35" alt="Логотип компании 'House'">
    </a>
    <div class="${styles.wrapperContacts}">
    <a class="${styles.linkPhone}" aria-label="Позвонить нам" href="tel:+79995435454">+7 (999) 543-54-54</a>
    <span class="${styles.labelWorkshop}">Мастерская</span>
</div>
</div>
<nav class="${styles.nav}" aria-label="Навигация по сайту">
<div>
<h2 class="${styles.title}">Репродукции</h2>
${this.navReproductions.render()}
</div>
<div>
<h2 class="${styles.title}">Новинки</h2>
${this.navNew.render()}
</div>
<div>
<h2 class="${styles.title}">О нас</h2>
${this.navAbout.render()}
</div>
</nav>
<div class="${styles.wrapperSocialCopyright}">
<ul class="${styles.listSocial}">
<li>
<a class="${styles.linkSocial}" href="#" aria-label="Facebook">
<svg width="24" height="24">
<use href="/images/vector/facebook-icon.svg#facebook-icon"/>
</svg>
</a>
</li>
<li>
<a class="${styles.linkSocial}" href="#" aria-label="Instagram">
<svg width="24" height="24">
<use href="/images/vector/instagram-icon.svg#instagram-icon"/>
</svg>
</a>
</li>
<li>
<a class="${styles.linkSocial}" href="#" aria-label="Youtube">
<svg width="24" height="24">
<use href="/images/vector/youtube-icon.svg#youtube-icon"/>
</svg>
</a>
</li>
</ul>
<small class="${styles.copyright}">
Ink. House<sup>®</sup>
<span>All rights reserved</span>
</small>
</div>
</div>
    `;
    return footer;
  }
}
