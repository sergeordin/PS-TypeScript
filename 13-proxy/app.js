"use strict";
class RealAPI {
    async get(id) {
        const response = await fetch(`https://dummyjson.com/products/${id}`)
            .then((data) => data.json())
            .then((json) => console.log(json))
            .catch((error) => console.log(error));
    }
}
class APIProxy {
    realAPI = new RealAPI();
    async get(id) {
        if (id < 10) {
            return await this.realAPI.get(id);
        }
        else {
            throw new Error('Неверный id продукта.');
        }
    }
}
const api = new APIProxy();
api.get(5); //ok
api.get(10); //error
