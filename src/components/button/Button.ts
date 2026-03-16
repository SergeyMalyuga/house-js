import type {ButtonProps} from '../../models/ButtonProps.model.ts';
import styles from './Button.module.scss'
import type {ButtonType} from '../../types/Button.type.ts';

export class Button {
  private readonly text: string;
  private readonly classType: ButtonType;

  constructor(props: ButtonProps) {
    this.text = props.text;
    this.classType = props.classType;
  }

  public render() {
    const button = document.createElement('button');
    button.className = styles.button;
    button.classList.add(this.classType);
    button.textContent = this.text;
    return button;
  }
}
