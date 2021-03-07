export default class Cart {
     _products = [];  // Массив объектов вида {"product": Product, "count": 0}
     _placeForRender = ''

    constructor(placeForRednder) {
        this._placeForRender = placeForRednder;
    }

    render() {
        let totalPrice = 0;
        this._placeForRender.innerHTML = "<h2>Cart</h2> <br>"
        if (this._products.length === 0 ) {
            this._placeForRender.insertAdjacentHTML('beforeend', 'Cart is empty')
        } else {
            this._products.forEach((productObj) => {
                totalPrice += productObj.product.getPrice() * productObj.count;

                const productElement = document.createElement("div");
                productElement.innerHTML = `
                <h4>${productObj.product.getName()}</h4>
                <img src=\"${productObj.product.getImg()}\" class="cart_img">
                Price: \$${productObj.product.getPrice()}
                Count: ${productObj.count}
                <button data-id=\"${productObj.product.getId()}\" class="cart_btn-countdown">-</button>
                <button data-id=\"${productObj.product.getId()}\" class="cart_btn-countup">+</button> 
                <button data-id=\"${productObj.product.getId()}\" class="cart_btn-remove">Remove</button>
            `;
                this._placeForRender.appendChild(productElement);
            });
            this._placeForRender.insertAdjacentHTML('beforeend', `Total price: \$${totalPrice}`);
        }
        this.addClickListener();
    }

    addProduct(product) {
         const existItem = this._products.find(item => item.product === product);
        if (existItem) {
            existItem.count++
        } else {
            this._products.push({
                "product": product,
                "count": 1
            });
        }
    }

    addClickListener() {
        document.querySelectorAll('.cart_btn-countdown')
            .forEach((button) => {
               button.addEventListener('click', (event) => {
                   this.countDown(event.target.dataset.id);
                   this.render();
               })
            });

        document.querySelectorAll('.cart_btn-countup')
            .forEach((button) => {
                button.addEventListener('click', (event) => {
                    this.countUp(event.target.dataset.id);
                    this.render();
                })
            });

        document.querySelectorAll('.cart_btn-remove')
            .forEach((button) => {
                button.addEventListener('click', (event) => {
                    this.removeProduct(event.target.dataset.id);
                    this.render();
                })
            });

    }

    countDown(id) {
        for (let i = 0; i < this._products.length; i++) {
            if (this._products[i].product.getId() === id) {
                this._products[i].count--;
                if (this._products[i].count === 0) {
                    this._products.splice(i, 1);
                }
            }
        }
    }

    countUp(id) {
        for (let i = 0; i < this._products.length; i++) {
            if (this._products[i].product.getId() === id) {
                this._products[i].count++;
            }
        }
    }

    removeProduct(id) {
        for (let i = 0; i < this._products.length; i++) {
            if (this._products[i].product.getId() === id) {
                this._products.splice(i, 1);
            }
        }
    }

}
