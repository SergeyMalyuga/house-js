import type {ButtonProps} from '../../types/ButtonProps.ts';
import styles from './Button.module.scss'
import {BUTTON_MEASURE, DEFAULT_BTN_WIDTH} from '../../constants/consts.ts';
import type {ButtonMeasure} from '../../types/ButtonMeasure.ts';

export class Button {
  private readonly text: string;
  private readonly width: number = DEFAULT_BTN_WIDTH;
  private readonly measure: ButtonMeasure = BUTTON_MEASURE.percentages;


  constructor(props: ButtonProps) {
    this.text = props.text;
    if (props.width) {
      this.width = props.width;
      this.measure = BUTTON_MEASURE.pixels
    }
  }

  public render() {
    const button = document.createElement('button');
    button.className = styles.button;
    button.textContent = this.text;
    button.style.width = `${this.width}${this.measure}`;
    return button;
  }
}
