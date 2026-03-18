import { Header } from '../../components/header/Header.ts';
import { Hero } from '../../components/hero/Hero.ts';
import type { DataHook } from '../../types/DataHook.type.ts';
import { Hooks } from '../../constants/consts.ts';
import { Gallery } from '../../components/gallery/Gallery.ts';
import type { MainProps } from '../../models/MainProps.model.ts';
import type { NewCollection } from '../../components/new-collection/NewCollection.ts';

export class MainPage {
  private container: HTMLElement;
  private header: Header;
  private hero: Hero;
  private gallery: Gallery;
  private newCollection: NewCollection;

  constructor(container: HTMLElement, props: MainProps) {
    this.container = container;
    this.header = props.header;
    this.hero = props.hero;
    this.gallery = props.gallery;
    this.newCollection = props.newCollection;
  }

  public render() {
    this.container.innerHTML = `
    ${this.header.render()}
    <main role="main">
    <div data-hook="hero"></div>
    <div data-hook="gallery"></div>
    <div data-hook="new-collection"></div>
</main>
    `;
    this.mount(this.hero.render(), Hooks.HERO);
    this.mount(this.gallery.render(), Hooks.GALLERY);
    this.mount(this.newCollection.render(), Hooks.NEW_COLLECTION);
  }

  private mount(element: HTMLElement, data: DataHook) {
    const container = this.container.querySelector<HTMLElement>(data);
    container?.appendChild(element);
  }
}
