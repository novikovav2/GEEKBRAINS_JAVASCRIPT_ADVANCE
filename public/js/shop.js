class Shop {
    _cart = '';
    _catalog = '';
    _products = [];


    constructor(placeForRender) {
        const cartElement = document.createElement("div");
        cartElement.classList.add('cart');
        placeForRender.appendChild(cartElement);

        const catalogElement = document.createElement("div");
        catalogElement.classList.add('catalog');
        placeForRender.appendChild(catalogElement);


        this._products = this.generateProducts()
        this._catalog = new Catalog(catalogElement);
        this._cart = new Cart(cartElement);

        this.initialLoadProductsToCatalog(this._products, this._catalog);

        this.render();

        this.addListenerAddToCard();
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

    render() {
        this._cart.render();
        this._catalog.render();
    }

    generateProducts() {
        return [
            new Product('Product 1', 10, '/img/product1.png'),
            new Product('Product 2', 20, '/img/product2.png'),
            new Product('Product 3', 30, '/img/product3.png'),
            new Product('Product 4', 40, '/img/product4.png'),
            new Product('Product 5', 50, '/img/product5.png'),
            new Product('Product 6', 60, '/img/product6.png'),
            new Product('Product 7', 70, '/img/product7.png'),
            new Product('Product 8', 80, '/img/product8.png'),
            new Product('Product 9', 90, '/img/product9.png'),
        ];
    }

    initialLoadProductsToCatalog(products, catalog) {
        products.forEach((product) => {
            catalog.addProduct(product);
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

const shopElement = document.querySelector('.shop')
const shop = new Shop(shopElement);


