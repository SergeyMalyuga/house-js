import styles from './NewCollection.module.scss';
import {Button} from '../button/Button.ts';
import {BUTTON_TYPE} from '../../constants/consts.ts';

export class NewCollection {
  public render() {
    const section = document.createElement('section');
    const button = new Button({text: 'Ознакомиться', classType: BUTTON_TYPE.NEW});
    section.setAttribute('id', 'new-collection');
    section.className = `${styles.newCollection}`;
    section.innerHTML = `
    <div class="container">
    <h2 class="${styles.title}">Новая коллекция французских авторов</h2>
    <div class="${styles.wrapperText}">
    <p class="${styles.text}">Сложно сказать, почему акционеры крупнейших компаний призывают нас к
    новым свершениям, которые, в свою очередь, должны быть заблокированы в рамках своих собственных
    рациональных ограничений.</p>
    <p class="${styles.text}"><Принимая во внимание показатели успешности, граница обучения кадров предопределяет
высокую востребованность направлений прогрессивного развития.</p>
</div>
</div>
    `;

    const container = section.querySelector('.container') as HTMLElement;
    console.log(container)
    container.appendChild(button.render());

    return section;
  }
}
