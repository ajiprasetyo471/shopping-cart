const template = document.createElement('template');
template.innerHTML = `
<p>&copy; 2021 Copyright kayu.co</p>
`;

class FooterBar extends HTMLElement {
  constructor() {
    super();
    this.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define('footer-bar', FooterBar);
