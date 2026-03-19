export class Footer {
  public render(): HTMLElement {
    const footer = document.createElement('footer') as HTMLElement;
    footer.innerHTML = `
    <div class="container">
</div>
    `;

    return footer;
  }
}
