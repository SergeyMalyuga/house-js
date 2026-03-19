import styles from './Footer.module.scss';

export class Footer {
  public render(): HTMLElement {
    const footer = document.createElement('footer') as HTMLElement;
    footer.className = `${styles.footer}`;
    footer.innerHTML = `
    <div class="container">
    <div class="${styles.wrapperCommunication}">
    <a class="${styles.linkLogo}" href="/">
      <img src="/images/vector/logo.svg" width="143" height="35" alt="Логотип компании 'House'">
    </a>
    <div class="${styles.wrapperContacts}">
    <a class="${styles.linkPhone}" aria-label="Позвонить нам" href="tel:+79995435454">+7 (999) 543-54-54</a>
    <span class="${styles.labelWorkshop}">Мастерская</span>
</div>
</div>
</div>
    `;

    return footer;
  }
}
