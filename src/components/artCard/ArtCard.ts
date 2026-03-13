import styles from './ArtCard.module.scss';
import type {Art} from '../../models/Art.model.ts';

export class ArtCard {
  public render(card: Art): HTMLElement {
    const article = document.createElement('article');
    article.innerHTML = `
      <picture class="${styles.wrapperImage}">
      <source srcset="${card.image.mobile}" media="(max-width: 480px)"/>
      <source srcset="${card.image.tabletMini}" media="(max-width: 768px)"/>
      <source srcset="${card.image.tablet}" media="(max-width: 576px)"/>
      <img src="${card.image.desktop}">
  </picture>
  <span>${card.author}</span>
  <h2>${card.name}</h2>
  <span>${card.details}</span>
  <data value="${card.price}">${card.price} руб.</data>
  `

    return article;
  }
}
