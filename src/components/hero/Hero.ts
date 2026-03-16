import styles from './Hero.module.scss';
import {Button} from '../button/Button.ts';
import {BUTTON_TYPE, SectionID} from '../../constants/consts.ts';

export class Hero {
  private readonly button = new Button({text: 'Продукция', classType: BUTTON_TYPE.GENERAL});

  public render() {
    const section = document.createElement('section');
    section.setAttribute('id', SectionID.HERO);
    section.innerHTML = `
    <div class="${styles.content} container">
    <div class="${styles.blockImage}">
    <picture>
    <source srcset="/images/raster/hero-bird-1440.png" media="(min-width: 769px)"/>
    <source srcset="/images/raster/hero-bird-768.png" media="(min-width: 569px)"/>
    <img src="/images/raster/hero-bird-576.png" alt=""/>
</picture>
</div>
<div class="${styles.blockInfo} fg">
<h1 class="${styles.title}">Реплики картин от <span>Ink. House</span></h1>
<p class="${styles.text}">Высокое качество отрисовки на плотной бумаге или льняном холсте. Редкие произведения, доступные цены.</p>
</div>
</div>
`

    const blockInfo = section.querySelector(`.${styles.blockInfo}`);
    blockInfo?.appendChild(this.button.render());

    return section;
  }
}
