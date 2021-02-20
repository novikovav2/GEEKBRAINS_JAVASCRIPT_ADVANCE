class Catalog {
    _products = []; // массив объектов класса Product
    _placeForRender = '';

    constructor(placeForRender) {
        this._placeForRender = placeForRender;
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
    }

    addProduct(product) {
        this._products.push(product);
    }
}
