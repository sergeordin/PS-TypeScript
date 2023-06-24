"use strict";
class UserA {
    githubToken;
    jwtToken;
}
class Auth {
    strategy;
    constructor(strategy) {
        this.strategy = strategy;
    }
    setStrategy(strategy) {
        this.strategy = strategy;
    }
    authUser(user) {
        return this.strategy.auth(user);
    }
}
class JWTStrategy {
    auth(user) {
        if (user.jwtToken) {
            return true;
        }
        return false;
    }
}
class GHStrategy {
    auth(user) {
        if (user.githubToken) {
            return true;
        }
        return false;
    }
}
const userA = new UserA();
userA.jwtToken = 'token';
const authJ = new Auth(new JWTStrategy());
console.log(authJ.authUser(userA));
authJ.setStrategy(new GHStrategy());
console.log(authJ.authUser(userA));
