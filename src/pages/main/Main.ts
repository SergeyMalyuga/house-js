import {Header} from '../../components/header/Header.ts';
import {Hero} from '../../components/hero/Hero.ts';
import type {DataHookType} from '../../types/DataHook.type.ts';
import {Hooks} from '../../constants/consts.ts';
import {Gallery} from '../../components/gallery/Gallery.ts';

export class MainPage {
  private container: HTMLElement;
  private header = new Header();
  private hero = new Hero();
  private gallery = new Gallery();

  constructor(container: HTMLElement) {
    this.container = container;
  }

  public render() {
    this.container.innerHTML = `
    ${this.header.render()}
    <main role="main">
    <div data-hook="hero"></div>
    <div data-hook="gallery"></div>
</main>
    `;
    this.mount(this.hero.render(), Hooks.HERO);
    this.mount(this.gallery.render(), Hooks.GALLERY);
  }

  private mount(element: HTMLElement, data: DataHookType) {
    const container = this.container.querySelector<HTMLElement>(data);
    container?.appendChild(element);

  }
}
