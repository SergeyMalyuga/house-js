import { Header } from '../../components/header/Header.ts';
import {Hero} from '../../components/hero/Hero.ts';

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
    ${this.hero.render()}
</main>
    `;
  }
}
