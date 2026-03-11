import {Header} from '../../components/header/Header.ts';
import {Hero} from '../../components/hero/Hero.ts';
import type {DataHook} from '../../types/DataHook.ts';
import {Hooks} from '../../constants/consts.ts';

export class MainPage {
  private container: HTMLElement;
  private header = new Header();
  private hero = new Hero();

  constructor(container: HTMLElement) {
    this.container = container;
  }

  public render() {
    this.container.innerHTML = `
    ${this.header.render()}
    <main role="main">
    <div data-hook="hero"></div>
</main>
    `;
    this.mount(this.hero.render(), Hooks.HERO);
  }

  private mount(element: HTMLElement, data: DataHook) {
    const container = this.container.querySelector<HTMLElement>(data);
    container?.appendChild(element);

  }
}
