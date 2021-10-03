const template = document.createElement('template');
template.innerHTML = `
<span class="categories-jumbo">Categories</span>
<div class="category-container">
  <div class="category-title">
    <div class="category-title-1">
      <h3>
        Our
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          class="category-title-line"
        >
          %0A%09
          <path d="m 5 0 h 40 " />
          %0A
        </svg>
        Categories
      </h3>
    </div>
    <div class="category-title-2">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
        perferendis qui. Blanditiis illo minima nobis, commodi impedit
        voluptatem ipsum inventore?
      </p>
    </div>
  </div>
  <div class="category-items">
    <div class="category-item">
      <svg viewBox="0 0 500 500" class="item-category-title">
        <path
          id="curve"
          d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97"
        />
        <text width="500">
          <textPath xlink:href="#curve">ALIQUAM</textPath>
        </text>
      </svg>
      <img src="./images/table2.png" alt="" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        class="item-category-line"
      >
        %0A%09
        <path d="m 20 10 c 0 0 25 50 60 0" />
        %0A
      </svg>
    </div>
    <div class="category-item">
      <svg viewBox="0 0 500 500" class="item-category-title">
        <path
          id="curve"
          d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97"
        />
        <text width="500">
          <textPath xlink:href="#curve">ALIQUAM</textPath>
        </text>
      </svg>
      <img src="./images/cupboard2.png" alt="" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        class="item-category-line"
      >
        %0A%09
        <path d="m 20 10 c 0 0 25 50 60 0" />
        %0A
      </svg>
    </div>
    <div class="category-item">
      <svg viewBox="0 0 500 500" class="item-category-title">
        <path
          id="curve"
          d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97"
        />
        <text width="500">
          <textPath xlink:href="#curve">ALIQUAM</textPath>
        </text>
      </svg>
      <img src="./images/chair1.png" alt="" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        class="item-category-line"
      >
        %0A%09
        <path d="m 20 10 c 0 0 25 50 60 0" />
        %0A
      </svg>
    </div>
    <div class="category-item">
      <svg viewBox="0 0 500 500" class="item-category-title">
        <path
          id="curve"
          d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97"
        />
        <text width="500">
          <textPath xlink:href="#curve">ALIQUAM</textPath>
        </text>
      </svg>
      <img src="./images/dresser2.png" alt="" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        class="item-category-line"
      >
        %0A%09
        <path d="m 20 10 c 0 0 25 50 60 0" />
        %0A
      </svg>
    </div>
    <div class="category-item">
      <svg viewBox="0 0 500 500" class="item-category-title">
        <path
          id="curve"
          d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97"
        />
        <text width="500">
          <textPath xlink:href="#curve">ALIQUAM</textPath>
        </text>
      </svg>
      <img src="./images/window.png" alt="" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        class="item-category-line"
      >
        %0A%09
        <path d="m 20 10 c 0 0 25 50 60 0" />
        %0A
      </svg>
    </div>
  </div>
</div>
`;

class CategorySec extends HTMLElement {
  constructor() {
    super();
    this.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define('categories-sec', CategorySec);
