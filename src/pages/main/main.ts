import {Header} from '../../components/header/Header.ts';

export class MainPage {
  private header = new Header();
  private container: HTMLElement;

  constructor(container: HTMLElement) {
    this.container = container
  }

  public render() {
    this.container.innerHTML = `
    ${this.header.render()}
    <main role="main"></main>
    `;
  }
}
