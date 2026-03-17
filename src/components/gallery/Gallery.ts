import styles from './Gallery.module.scss'
import {Country, SectionID} from '../../constants/consts.ts';
import type {Art} from '../../models/Art.model.ts';
import {ArtCard} from '../artCard/ArtCard.ts';
import type {ArtsService} from '../../services/ArtsService.ts';
import {getCountriesToggle} from '../../data/countryToggle.data.ts';
import {CountryToggle} from '../countryToggle/CountryToggle.ts';

export class Gallery {
  private arts: Art[];
  private element: HTMLElement | null = null;
  private artsService: ArtsService;
  private artCard = new ArtCard();
  private currentCountry = Country.FR;
  private countries = getCountriesToggle();

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
    <div class="${styles.top}">
<h2 class="${styles.title}">Репродукции</h2>
<ul class="${styles.listCountriesToggle}"></ul>
</div>
    <ul class="${styles.list}">
</ul>
</div>
    `
    this.element = section;
    this.renderCountryToggle();
    this.renderCards();

    return section;
  }

  public refresh(): void {
    this.arts = this.artsService.getByCountry(this.currentCountry);
    this.renderCards();
  }

  private renderCountryToggle() {
    const list = this.element?.querySelector(`.${styles.listCountriesToggle}`) as HTMLElement;
    if (!list) return;
    list.innerHTML = '';
    for (let country of this.countries) {
      const item = document.createElement('li');
      const button = new CountryToggle({
        countryToggle: country,
        onCountryChange: this.onCountryChange,
        isActive: country.country === this.currentCountry
      });
      item.appendChild(button.render());
      list.appendChild(item);
    }
  }

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

  private onCountryChange = (newCountry: Country) => {
    this.currentCountry = newCountry;
    this.renderCountryToggle();
    this.refresh()
  }
}
