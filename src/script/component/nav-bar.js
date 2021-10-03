const template = document.createElement('template');
template.innerHTML = `
<div class="navbar-center">
  <a href="" class="nav-logo"><h2>kayu.</h2></a>
  <ul class="nav-link">
    <a href="" class="nav-item"><li class="nav-item">HOME</li></a>
    <a href="" class="nav-item"><li>PRODUCTS</li></a>
    <a href="" class="nav-item"><li class="nav-item">DISCOVER</li></a>
  </ul>
  <div class="menu-toggle">
    <input type="checkbox" />
    <span></span>
    <span></span>
    <span></span>
  </div>
  <div class="cart-btn">
    <span class="nav-icon">
      <a href=""><i class="far fa-user"></i></a>
    </span>
    <span class="nav-icon">
      <i class="fas fa-shopping-cart"></i>
    </span>
    <div class="cart-items">0</div>
  </div>
</div>
`;

class NavBar extends HTMLElement {
  constructor() {
    super();
    this.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    const menuToggle = this.querySelector('.menu-toggle input');
    const navLink = this.querySelector('.nav-link');
    menuToggle.addEventListener('click', function () {
      navLink.classList.toggle('slide');
    });
  }
}

window.customElements.define('nav-bar', NavBar);
