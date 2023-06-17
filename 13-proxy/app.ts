interface API {
    get(id: number): Object;
}

class RealAPI implements API {
    async get(id: number) {
        const response = await fetch(`https://dummyjson.com/products/${id}`)
            .then((data) => data.json())
            .then((json) => console.log(json))
            .catch((error) => console.log(error));
    }
}

class APIProxy implements API {
    private realAPI: RealAPI = new RealAPI();

    async get(id: number) {
        if (id < 10) {
            return await this.realAPI.get(id);
        } else {
            throw new Error('Неверный id продукта.');
        }
    }
}

const api: API = new APIProxy();
api.get(5); //ok
api.get(10); //error
