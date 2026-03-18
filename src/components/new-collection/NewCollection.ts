export class NewCollection {
  public render() {
    const section = document.createElement('section');
    section.setAttribute('id', 'new-collection');
    section.innerHTML = ``
    return section;
  }
}
