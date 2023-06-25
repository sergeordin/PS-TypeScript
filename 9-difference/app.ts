function difference<T extends object>(
    a: T,
    b: Partial<T>
): Omit<T, keyof typeof b> {
    const keysToRemove = Object.keys(b) as Array<keyof T>;
    const filteredKeys = Object.keys(a).filter(
        (key) => !keysToRemove.includes(key)
    ) as Array<keyof T>;
    return filteredKeys.reduce((obj, key) => {
        obj[key] = a[key];
        return obj;
    }, {} as Omit<T, keyof typeof b>);
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

type Diff = { b: string };

let v0: Diff = difference<A, 'a'>(a, b);
console.log(v0); // { b: '' }
