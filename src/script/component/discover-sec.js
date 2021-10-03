const template = document.createElement('template');
template.innerHTML = `
<div class="discover-detail">
  <img src="./images/Group 23.svg" alt="" class="discover-detail-acc" />
  <h3>Save 20% for today!</h3>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  <button class="discover-btn">
    Enter your email to get discount 20%
    <span class="discover-btn-icon"
      ><i class="fas fa-arrow-right"></i
    ></span>
  </button>
</div>
<div class="discover-img">
  <img src="./images/Group 36.svg" alt="" class="discover-img-back" />
  <img src="./images/bed.png" alt="" class="discover-img-item" />
  <img src="./images/Group 35.svg" alt="" class="discover-img-disc" />
</div>
`;

class DiscoverSec extends HTMLElement {
  constructor() {
    super();
    this.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define('discover-sec', DiscoverSec);
