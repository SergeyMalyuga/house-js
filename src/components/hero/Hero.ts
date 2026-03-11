import styles from './Hero.module.scss';

export class Hero {
  public render() {
    return `
    <section>
    <div class="${styles.content} container">
    <div class="${styles.blockImage}">
    <picture>
    <source srcset="/images/raster/hero-bird-1440.png" media="(min-width: 769px)"/>
    <source srcset="/images/raster/hero-bird-768.png" media="(min-width: 569px)"/>
    <img src="/images/raster/hero-bird-576.png" alt=""/>
</picture>
</div>
<div class="${styles.blockInfo}">
<h1 class="${styles.title}">Реплики картин от <span>Ink. House</span></h1>
<p class="${styles.text}">Высокое качество отрисовки на плотной бумаге или льняном холсте. Редкие произведения, доступные цены.</p>
</div>
</div>
</section>`
  }
}
