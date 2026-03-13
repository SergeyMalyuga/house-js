import type {LinkTypeType} from '../types/LinkType.type.ts';

export interface NavLinkModel {
  text: string;
  url: string;
  type: LinkTypeType;
}
