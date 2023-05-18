const URI: string = 'https://dummyjson.com/users';

interface IHair {
    color: string;
    type: string;
}

interface ICoordinates {
    lat: number;
    lng: number;
}

interface IAddress {
    address: string;
    city: string;
    coordinates: ICoordinates;
    postalCode: string;
    state: string;
}

interface IBank {
    cardExpire: string;
    cardNumber: string;
    cardType: string;
    currency: string;
    iban: string;
}

interface ICompany {
    address: {
        address: string;
        city?: string;
        coordinates: ICoordinates;
        postalCode: string;
        state: string;
    };
    department: string;
    name: string;
    title: string;
}

interface IUsers {
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
    hair: IHair;
    domain: string;
    ip: string;
    address: IAddress;
    macAddress: string;
    university: string;
    bank: IBank;
    company: ICompany;
    ein: string;
    ssn: string;
    userAgent: string;
}

interface IUser {
    users: IUsers;
    total: number;
    skip: number;
    limit: number;
}

async function getUsers(url: string): Promise<void | IUser> {
    try {
        const data = await fetch(url)
            .then((res) => res.json())
            .then(console.log);
        return data;
    } catch (error) {
        console.log(error as Error);
    }
}

getUsers(URI);
