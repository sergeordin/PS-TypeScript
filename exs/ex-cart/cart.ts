class Product {
    constructor(
        public id: number,
        public title: string,
        public price: number
    ) {}
}

class Delivery {
    constructor(public date: Date) {}
}

class HomeDelivery extends Delivery {
    constructor(date: Date, public address: string) {
        super(date);
    }
}

class ShopDelivery extends Delivery {
    constructor(public shopId: number) {
        super(new Date());
    }
}

type DeliveryOptions = HomeDelivery | ShopDelivery;

class Cart {
    private products: Product[] = [];
    private delivery: DeliveryOptions;

    public addProduct(product: Product) {
        this.products.push(product);
    }

    public deleteProduct(productId: number) {
        this.products = this.products.filter(
            (p: Product) => p.id !== productId
        );
    }

    public getSum(): number {
        return this.products
            .map((p: Product) => p.price)
            .reduce((p1: number, p2: number) => p1 + p2);
    }

    public setDelivery(delivery: DeliveryOptions): void {
        this.delivery = delivery;
    }

    public checkOut() {
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

export default Cart;
