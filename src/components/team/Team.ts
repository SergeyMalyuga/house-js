import {SectionID} from '../../constants/consts.ts';
import styles from './Team.module.scss';

export class Team {
  public render(): string {
    return `
    <section id="${SectionID.TEAM}" class="${styles.team}">
    <div class="${styles.content} container">
    <div class="${styles.wrapperInfo}">
<h2 class="${styles.title}">Наша команда</h2>
<p class="${styles.text}">Значимость этих проблем настолько очевидна, что базовый вектор развития позволяет оценить значение
экспериментов, поражающих по&nbsp;своей масштабности и грандиозности.
Мы вынуждены отталкиваться от того, что консультация с широким активом.</p>
<ul class="${styles.listTeam}">
<li class="${styles.itemStaff}">
<img src="/images/raster/team-avatar-1.png" width="80" height="80" loading="lazy" alt="Дизайнер">
</li>
<li class="${styles.itemStaff}">
<img src="/images/raster/team-avatar-2.png" width="80" height="80" loading="lazy" alt="Художник">
</li>
<li class="${styles.itemStaff}">
<img src="/images/raster/team-avatar-3.png" width="80" height="80" loading="lazy" alt="Аниматор">
</li>
</ul>
</div>
        <picture class="${styles.wrapperImage}">
         <source srcset="/images/raster/team-hand-mobile.png" media="(max-width: 480px)">
          <source srcset="/images/raster/team-hand-tablet-mini.png" media="(max-width: 576px)">
 <source srcset="/images/raster/team-hand-tablet.png" media="(max-width: 768px)">


 <img src="/images/raster/team-hand-desktop.png" alt="" loading="lazy">
</picture>
</div>
</section>
    `
  }
}
