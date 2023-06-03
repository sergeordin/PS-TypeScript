function difference<T extends object, U extends keyof T>(
    a: T,
    b: Pick<T, U>
): Omit<T, U> {
    const keysToRemove = Object.keys(b) as U[];
    const filteredKeys = Object.keys(a).filter(
        (key) => !keysToRemove.includes(key as U)
    ) as Array<keyof T>;
    return filteredKeys.reduce((obj, key) => {
        obj[key] = a[key];
        return obj;
    }, {} as Omit<T, U>);
}

interface A {
    a: number;
    b: string;
}
interface B {
    a: number;
    c: boolean;
}

let a: A = { a: 5, b: '' };
let b: B = { a: 10, c: true };

interface Difference {
    b: string;
}

let v0: Difference = difference<A, 'a'>(a, b);
console.log(v0);
