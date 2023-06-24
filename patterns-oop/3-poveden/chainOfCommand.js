"use strict";
class AbstractMiddleware {
    nextMiddleware;
    next(mid) {
        this.nextMiddleware = mid;
        return mid;
    }
    handle(req) {
        if (this.nextMiddleware) {
            return this.nextMiddleware.handle(req);
        }
        return;
    }
}
class AuthMiddleware extends AbstractMiddleware {
    handle(req) {
        console.log('AuthMiddleware');
        if (req.userId === 1) {
            return super.handle(req);
        }
        return { error: 'Not Auth' };
    }
}
class ValidateMiddleware extends AbstractMiddleware {
    handle(req) {
        console.log('ValidateMiddleware');
        if (req.body) {
            return super.handle(req);
        }
        return { error: 'Not Body' };
    }
}
class Controller extends AbstractMiddleware {
    handle(req) {
        console.log('Success');
        return { success: req };
    }
}
const controller = new Controller();
const validate = new ValidateMiddleware();
const auth = new AuthMiddleware();
auth.next(validate).next(controller);
console.log(auth.handle({ userId: 2 }));
console.log(auth.handle({ userId: 1 }));
console.log(auth.handle({ userId: 1, body: 'Ok' }));
