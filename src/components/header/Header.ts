import style from './Header.module.scss';

export class Header {
  public render() {
    return `
    <header class="${style.header}" role="banner">
  <div class="${style.content} container">
    <a class="${style.linkLogo}" href="/">
      <img src="/images/vector/logo.svg" width="143" height="35" alt="Логотип компании 'House'">
    </a>
    <nav class="nav" aria-label="Основная навигация">
      <ul class="list">
        <li class="item-nav-link">
          <a class="linkNav" href="#">Репродукции</a>
        </li>
        <li class="item-nav-link">
          <a class="linkNav" href="#">Новинки</a>
        </li>
        <li class="item-nav-link">
          <a class="linkNav" href="#">О нас</a>
        </li>
      </ul>
    </nav>
  </div>
</header>
    `;
  }
}
