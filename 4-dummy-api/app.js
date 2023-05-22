"use strict";
const URI = 'https://dummyjson.com/users';
async function getUsers(url) {
    try {
        const data = await fetch(url);
        const { users } = await data.json();
        return users;
    }
    catch (error) {
        console.log(error);
    }
}
getUsers(URI);
