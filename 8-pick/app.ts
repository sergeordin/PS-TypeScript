/*
	Написать функцию получения нужных данных из объектов
*/

interface User {
    name: string;
    age: number;
    skills: string[];
}

const user: User = {
    name: 'Vasiliy',
    age: 8,
    skills: ['typescript', 'javascript'],
};

function pickObjectKeys<T extends Record<string, any>, K extends keyof T>(
    obj: T,
    keys: K[]
): Pick<T, K> {
    return keys.reduce((acc, key) => {
        if (obj.hasOwnProperty(key)) {
            acc[key] = obj[key];
        }
        return acc;
    }, {} as Pick<T, K>);
}

const result = pickObjectKeys(user, ['age', 'skills']);
console.log(result);
