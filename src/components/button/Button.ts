import type {ButtonProps} from '../../types/ButtonProps.ts';
import styles from './Button.module.scss'

export class Button {
  private readonly text: string;
  private readonly classType: string = styles.buttonGeneral;

  constructor(props: ButtonProps) {
    this.text = props.text;
    if (props.classType) {
      this.classType = props.classType;
    }
  }

  public render() {
    const button = document.createElement('button');
    button.className = styles.button;
    button.classList.add(this.classType);
    button.textContent = this.text;
    return button;
  }
}
