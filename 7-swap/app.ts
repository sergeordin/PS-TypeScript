const obj: Record<string, number> = {
    a: 1,
    b: 2,
};

function swapKeysValues(obj: Record<string, number>): Record<number, string> {
    const result: Record<number, string> = {};
    Object.entries(obj).forEach(([key, value]) => {
        result[value] = key;
    });
    return result;
}

const res = swapKeysValues(obj);

console.log(res);
