import type {NavLink} from '../../types/NavLink.ts';
import style from './ListNav.module.scss'
import {LINK_TYPE} from '../../constants/consts.ts';
import type {LinkType} from '../../types/LinkType.ts';

export class ListNav {
  private links: NavLink[];

  constructor(links: NavLink[]) {
    this.links = links;
  }

  public render() {
    return `
          <ul class="${style.list}">
          ${this.links
      .map(
        (link) =>
          `<li>
          <a class="${style.link} linkFocus ${this.getLinkModifier(link.type)}" href="${link.url}">${link.text}</a>
        </li>`,
      )
      .join('')}
      </ul>
    `;
  }

  private getLinkModifier(type: LinkType) {
    return type === LINK_TYPE.HEADER ? style.linkHeader : style.linkFooter
  }
}
