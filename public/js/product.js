export default class Product {
    _id = '';
    _name = 'Product 1';
    _price = 0;
    _img = '/img/product1.png';

    constructor({id, name, price, img}) {
        this._id = id;
        this._name = name;
        this._price = price;
        this._img = img;
    }

    getName() { return this._name; }

    getId() { return this._id; }

    getPrice() { return this._price; }

    getImg() { return this._img; }

    // generateUuid() {
    //     return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    //         (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    //     );
    // }
}
