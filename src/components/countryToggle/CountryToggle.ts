import type {Country} from '../../constants/consts.ts';
import type {CountryToggleProps} from '../../models/CountryToggleProps.ts';

export class CountryToggle {
  private readonly text: string;
  private readonly country: Country;
  private readonly onCountryChange: (country: Country) => void;

  constructor(props: CountryToggleProps) {
    this.text = props.countryToggle.text;
    this.country = props.countryToggle.country;
    this.onCountryChange = props.onCountryChange;
  }

  public render(): HTMLButtonElement {
    const button = document.createElement("button");
    button.textContent = this.text;
    button.addEventListener("click", () => this.onCountryChange(this.country));
    return button;
  }
}
