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

interface firstObj {
    a: number;
    b: string;
}
interface secondObj {
    a: number;
    c: boolean;
}

const a: firstObj = { a: 5, b: '' };
const b: secondObj = { a: 10, c: true };

type Diff = Partial<firstObj>;

const diffObj: Diff = difference<Diff>(a, b);
console.log(diffObj); // { b: '' }
