import styles from './Gallery.module.scss'
import {SectionID} from '../../constants/consts.ts';

export class Gallery {
  public render(): HTMLElement {
    const section = document.createElement('section');
    section.setAttribute('id', SectionID.GALLERY);
    section.innerHTML = `
    <div class="container">
    <ul class="${styles.list}">
    <li></li>
</ul>
</div>
    `
    return section;
  }
}
