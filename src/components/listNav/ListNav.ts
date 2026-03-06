import type { NavLink } from '../../types/NavLink.ts';

export class ListNav {
  private links: NavLink[];

  constructor(links: NavLink[]) {
    this.links = links;
  }

  public render() {
    return `
          <ul class="list">
          ${this.links
            .map(
              (link) =>
                `<li class="item">
          <a class="link" href="${link.url}">${link.text}</a>
        </li>`,
            )
            .join('')}
      </ul>
    `;
  }
}
