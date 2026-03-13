import type {NavLinkModel} from '../../models/NavLink.model.ts';
import style from './ListNav.module.scss'
import {LINK_TYPE} from '../../constants/consts.ts';
import type {LinkTypeType} from '../../types/LinkType.type.ts';

export class ListNav {
  private links: NavLinkModel[];

  constructor(links: NavLinkModel[]) {
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

  private getLinkModifier(type: LinkTypeType) {
    return type === LINK_TYPE.HEADER ? style.linkHeader : style.linkFooter
  }
}
