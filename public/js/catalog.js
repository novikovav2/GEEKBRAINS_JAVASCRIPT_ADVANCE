import Product from './product';

export default class Catalog {
    _products = []; // массив объектов класса Product
    _placeForRender = '';
    _cart = null;
    _numData = 1;

    constructor(placeForRender, cart) {
        this._placeForRender = placeForRender;
        this._cart = cart;

        this.fetchProducts(this._numData);
    }

    render() {
        this._placeForRender.innerHTML = "<h2>Catalog</h2><br>";
        this._products.forEach((product) => {
            const productElement = document.createElement("div");
            productElement.innerHTML = `
                <h3>${product.getName()}</h3>
                <img src=\"${product.getImg()}\" class=\"catalog_img\">
                Price: \$${product.getPrice()} 
                <button data-id=\"${product.getId()}\" class="catalog_add-to-card-button">
                    Add to cart
                </button>
            `;
            this._placeForRender.appendChild(productElement);
        });

        if (this._numData < 3) {
            this._placeForRender.insertAdjacentHTML('beforeend',
                "<button id=\"loadData\">Load more data</button>");
            this.addListenerLoadData();
        }
        this.addListenerAddToCard();
    }

    addProducts(products) {
        this._products = products;
    }

    fetchProducts(num) {
        const url = `/db/data${num}.json`;
        return fetch(url)
            .then(response => response.json())
            .then((data) => {
                let fetchProducts = [];
                fetchProducts = data.data.map(item => {
                    return new Product(item);
                });
                this._products = this._products.concat(fetchProducts);
                this.render();
            });
    }

    addListenerAddToCard() {
        document.querySelectorAll('.catalog_add-to-card-button')
            .forEach((button) => {
                button.addEventListener('click', (event) => {
                    const product = this.findProductById(event.target.dataset.id, this._products)
                    if (product) {
                        this._cart.addProduct(product);
                        this._cart.render();
                    }
                })
            })
    }

    addListenerLoadData() {
        document.querySelector('#loadData')
            .addEventListener('click', () => {
                this._numData++;
                this.fetchProducts(this._numData);
            })
    }

    findProductById(id, products) {
        for (let i=0; i< products.length; i++) {
            if (products[i].getId() === id) {
                return products[i];
            }
        }
    }
}
