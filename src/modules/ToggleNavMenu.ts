import styles from '../components/header/Header.module.scss'

export class ToggleNavMenu {
  private toggleBtn: HTMLButtonElement;
  private navMenu: HTMLElement;
  private isOpen = false;

  constructor(toggleBtn: HTMLButtonElement, navMenu: HTMLElement) {
    this.toggleBtn = toggleBtn;
    this.navMenu = navMenu;
    this.toggleBtn.addEventListener('click', this.toggle);
  }

  private toggle = () => {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
    this.navMenu.classList.toggle(`${styles.openNav}`);
  }

  public destroy() {
    this.toggleBtn.removeEventListener('click', this.toggle);
  }
}
