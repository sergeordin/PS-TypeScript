"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Product {
    id;
    title;
    price;
    constructor(id, title, price) {
        this.id = id;
        this.title = title;
        this.price = price;
    }
}
class Delivery {
    date;
    constructor(date) {
        this.date = date;
    }
}
class HomeDelivery extends Delivery {
    address;
    constructor(date, address) {
        super(date);
        this.address = address;
    }
}
class ShopDelivery extends Delivery {
    shopId;
    constructor(shopId) {
        super(new Date());
        this.shopId = shopId;
    }
}
class Cart {
    products = [];
    delivery;
    addProduct(product) {
        this.products.push(product);
    }
    deleteProduct(productId) {
        this.products = this.products.filter((p) => p.id !== productId);
    }
    getSum() {
        return this.products
            .map((p) => p.price)
            .reduce((p1, p2) => p1 + p2);
    }
    setDelivery(delivery) {
        this.delivery = delivery;
    }
    checkOut() {
        if (this.products.length == 0) {
            throw new Error('Нет ни одного товара в корзине');
        }
        if (!this.delivery) {
            throw new Error('Не указан способ доставки');
        }
        return { success: true };
    }
}
const cart = new Cart();
cart.addProduct(new Product(1, 'Kukis', 10));
cart.addProduct(new Product(2, 'Chok', 30));
cart.addProduct(new Product(3, 'Beer', 50));
cart.deleteProduct(3);
cart.setDelivery(new HomeDelivery(new Date(), 'address'));
console.log(cart);
console.log(cart.getSum());
console.log(cart.checkOut());
exports.default = Cart;
