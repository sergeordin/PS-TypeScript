declare function difference<T, U>(
    a: T,
    b: U
): Pick<T, Exclude<keyof T, keyof U>>;

interface IA {
    a: number;
    b: string;
}
interface IB {
    a: number;
    c: boolean;
}

let a: IA = { a: 5, b: '' };
let b: IB = { a: 10, c: true };

interface IDifference {
    b: string;
}

let v0: IDifference = difference(a, b);
