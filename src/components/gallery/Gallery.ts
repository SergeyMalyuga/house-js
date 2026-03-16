import styles from './Gallery.module.scss'
import {Country, SectionID} from '../../constants/consts.ts';
import type {Art} from '../../models/Art.model.ts';
import {ArtCard} from '../artCard/ArtCard.ts';
import type {ArtsService} from '../../services/ArtsService.ts';

export class Gallery {
  private arts: Art[];
  private element: HTMLElement | null = null;
  private artsService: ArtsService;
  private artCard = new ArtCard();
  private currentCountry = Country.FR;

  constructor(artsService: ArtsService) {
    this.artsService = artsService;
    this.arts = this.artsService.getByCountry(this.currentCountry);
  }

  public render(): HTMLElement {
    if (this.element) {
      return this.element;
    }

    const section = document.createElement('section');
    section.setAttribute('id', SectionID.GALLERY);
    section.innerHTML = `
    <div class="container">
    <ul class="${styles.list}">
</ul>
</div>
    `
    this.element = section;
    this.renderCards();

    return section;
  }

/*  private refresh(arts: Art[]) {
    this.arts = this.artsService.getByCountry(this.currentCountry);
    this.renderCards();
  }*/

  private renderCards() {
    const list = this.element?.querySelector(`.${styles.list}`) as HTMLElement;
    if (!list) return;
    list.innerHTML = '';
    for (let art of this.arts) {
      const item = document.createElement('li');
      const card = this.artCard.render(art);
      item.appendChild(card);
      list.appendChild(item);
    }
  }
}
