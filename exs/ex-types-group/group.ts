interface Data {
    group: number;
    name: string;
}

const groupData: Data[] = [
    { group: 1, name: 'a' },
    { group: 1, name: 'b' },
    { group: 2, name: 'c' },
];

interface Group<T> {
    [key: string]: T[];
}

type key = string | number | symbol;

function groupUsers<T extends Record<key, any>>(
    array: T[],
    key: keyof T
): Group<T> {
    return array.reduce<Group<T>>((map: Group<T>, item) => {
        const itemKey = item[key];
        let curEl = map[itemKey];
        if (Array.isArray(curEl)) {
            curEl.push(item);
        } else {
            curEl = [item];
        }
        map[itemKey] = curEl;
        return map;
    }, {});
}

const res = groupUsers<Data>(groupData, 'group');
console.log(res);
