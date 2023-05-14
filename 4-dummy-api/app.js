"use strict";
const URI = 'https://dummyjson.com/users';
async function getUsers(url) {
    try {
        const data = await fetch(url)
            .then((res) => res.json())
            .then(console.log);
        return data;
    }
    catch (error) {
        console.log(error);
    }
}
getUsers(URI);
