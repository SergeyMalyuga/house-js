import {SectionID} from '../../constants/consts.ts';
import styles from './Team.module.scss';

export class Team {
  public render(): string {
    return `
    <section id="${SectionID.TEAM}" class="${styles.team}">
    <div class="container">
        <picture class="${styles.wrapperImage}">
 <source srcset="/images/raster/team-hand-tablet.png" media="(max-width: 768px)">
 <source srcset="/images/raster/team-hand-tablet-mini.png" media="(max-width: 576px)">
 <source srcset="/images/raster/team-hand-mobile.png" media="(max-width: 480px)">
 <img src="/images/raster/team-hand-desktop.png" alt="" loading="lazy">
</picture>
</div>
</section>
    `
  }
}
