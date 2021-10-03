import './script/component/nav-bar.js';
import './script/component/categories-sec.js';
import './script/component/discover-sec.js';
import './script/component/footer-bar.js';
import Products from './script/data/products.js';
import UI from './script/view/main.js';
import Storage from './script/data/storage.js';

document.addEventListener('DOMContentLoaded', () => {
  const ui = new UI();
  const products = new Products();
  // setup app
  ui.setupApp();
  // get all products
  products
    .getProducts()
    .then((products) => {
      ui.displayProducts(products);
      Storage.saveProducts(products);
    })
    .then(() => {
      ui.getBagBtns();
      ui.cartLogic();
    });
});
