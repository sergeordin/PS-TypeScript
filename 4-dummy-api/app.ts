const URI: string = 'https://dummyjson.com/users';

interface User {
    users: {
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
        hair: {
            color: string;
            type: string;
        };
        domain: string;
        ip: string;
        address: {
            address: string;
            city: string;
            coordinates: {
                lat: number;
                lng: number;
            };
            postalCode: string;
            state: string;
        };
        macAddress: string;
        university: string;
        bank: {
            cardExpire: string;
            cardNumber: string;
            cardType: string;
            currency: string;
            iban: string;
        };
        company: {
            address: {
                address: string;
                city?: string;
                coordinates: {
                    lat: number;
                    lng: number;
                };
                postalCode: string;
                state: string;
            };
            department: string;
            name: string;
            title: string;
        };
        ein: string;
        ssn: string;
        userAgent: string;
    };
    total: number;
    skip: number;
    limit: number;
}

async function getUsers(url: string) {
    try {
        const data = await fetch(url)
            .then((res) => res.json())
            .then(console.log);
        return data as unknown as User;
    } catch (error) {
        console.log(error as Error);
    }
}

getUsers(URI);
