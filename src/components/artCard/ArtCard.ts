import styles from './ArtCard.module.scss';
import type { Art } from '../../models/Art.model.ts';
import { Button } from '../button/Button.ts';
import { BUTTON_TYPE } from '../../constants/consts.ts';

export class ArtCard {
  public render(card: Art): HTMLElement {
    const article = document.createElement('article');
    const button = new Button({ text: 'Купить', classType: BUTTON_TYPE.CARD });
    article.className = `${styles.card}`;
    article.innerHTML = `
      <picture class="${styles.wrapperImage}">
      <source srcset="${card.image.mobile}" media="(max-width: 480px)"/>
      <source srcset="${card.image.tablet}" media="(max-width: 768px)"/>
      <source srcset="${card.image.tabletMini}" media="(max-width: 576px)"/>
      <img src="${card.image.desktop}" alt="${card.name}">
  </picture>
  <div class="${styles.wrapperInfo}">
    <span class="${styles.author}">${card.author}</span>
  <h2 class="${styles.title}">${card.name}</h2>
  <span class="${styles.details}">${card.details}</span>
  <data class="${styles.price}" value="${card.price}">${card.price} руб.</data>
</div>
  `;
    article.appendChild(button.render());

    return article;
  }
}
