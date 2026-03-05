import style from './Header.module.scss';

export class Header {
  public render() {
    return `
    <header class="${style.header}" role="banner">
  <div class="header container">
    <a class="link-log" href="/">
      <img src="/images/vector/logo.svg" width="143" height="35" alt="Логотип компании 'House'">
    </a>
    <nav class="nav" aria-label="Основная навигация">
      <ul class="list-nav">
        <li class="item-nav-link">
          <a class="header-main__link-nav" href="#">Репродукции</a>
        </li>
        <li class="item-nav-link">
          <a class="link-nav" href="#">Новинки</a>
        </li>
        <li class="item-nav-link">
          <a class="link-nav" href="#">О нас</a>
        </li>
      </ul>
    </nav>
  </div>
</header>
    `;
  }
}
