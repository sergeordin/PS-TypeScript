const URI: string = 'https://dummyjson.com/users';

interface Hair {
    color: string;
    type: string;
}

interface Coordinates {
    lat: number;
    lng: number;
}

interface Address {
    address: string;
    city: string;
    coordinates: Coordinates;
    postalCode: string;
    state: string;
}

interface Bank {
    cardExpire: string;
    cardNumber: string;
    cardType: string;
    currency: string;
    iban: string;
}

interface Company {
    address: {
        address: string;
        city?: string;
        coordinates: Coordinates;
        postalCode: string;
        state: string;
    };
    department: string;
    name: string;
    title: string;
}

interface Users {
    id: number;
    firstName: string;
    lastName: string;
    maidenName: string;
    age: number;
    gender: string;
    email: string;
    phone: string;
    username: string;
    password: string;
    birthDate: string;
    image: string;
    bloodGroup: string;
    height: number;
    weight: number;
    eyeColor: string;
    hair: Hair;
    domain: string;
    ip: string;
    address: Address;
    macAddress: string;
    university: string;
    bank: Bank;
    company: Company;
    ein: string;
    ssn: string;
    userAgent: string;
}

interface UsersJSONResponse {
    users: Users;
    total: number;
    skip: number;
    limit: number;
}

async function getUsers(url: string): Promise<void | Users> {
    try {
        const data = await fetch(url);
        const { users }: UsersJSONResponse = await data.json();
        return users;
    } catch (error) {
        console.log(error as Error);
    }
}

getUsers(URI);
