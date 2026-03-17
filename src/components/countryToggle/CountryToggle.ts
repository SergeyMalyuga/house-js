import type {Country} from '../../constants/consts.ts';
import type {CountryToggleProps} from '../../models/CountryToggleProps.model.ts';
import styles from './CountryToggle.module.scss';

export class CountryToggle {
  private readonly text: string;
  private readonly country: Country;
  private readonly isActive: boolean;
  private readonly onCountryChange: (country: Country) => void;

  constructor(props: CountryToggleProps) {
    this.text = props.countryToggle.text;
    this.country = props.countryToggle.country;
    this.onCountryChange = props.onCountryChange;
    this.isActive = props.isActive;
  }

  public render(): HTMLButtonElement {
    const button = document.createElement("button");
    button.className = styles.button;
    button.textContent = this.text;
    button.addEventListener("click", () => this.onCountryChange(this.country));
    if(this.isActive) {
      button.classList.add(`${styles.buttonActive}`);
    }
    return button;
  }
}
