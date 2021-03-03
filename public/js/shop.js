import Cart from './cart.js';
import Catalog from './catalog';

export default class Shop {
    _cart = '';
    _catalog = '';

    constructor(placeForRender) {
        const cartElement = document.createElement("div");
        cartElement.classList.add('cart');
        placeForRender.appendChild(cartElement);

        const catalogElement = document.createElement("div");
        catalogElement.classList.add('catalog');
        placeForRender.appendChild(catalogElement);

        this._cart = new Cart(cartElement);
        this._catalog = new Catalog(catalogElement, this._cart);
    }
}


