"use strict";
const groupData = [
    { group: 1, name: 'a' },
    { group: 1, name: 'b' },
    { group: 2, name: 'c' },
];
function groupUsers(array, key) {
    return array.reduce((map, item) => {
        const itemKey = item[key];
        let curEl = map[itemKey];
        if (Array.isArray(curEl)) {
            curEl.push(item);
        }
        else {
            curEl = [item];
        }
        map[itemKey] = curEl;
        return map;
    }, {});
}
const res = groupUsers(groupData, 'group');
console.log(res);
