class User {
    @allowFunc((a: number) => a > 0)
    age: number = 30;
}

const person = new User();
console.log(person.age);

person.age = 0;
console.log(person.age);

person.age = 20;
console.log(person.age);

function allowFunc(checkFunc: (value: any) => boolean) {
    return function (target: any, propertyKey: string) {
        let value = target[propertyKey];

        const setter = function (newVal: any) {
            if (checkFunc(newVal)) {
                value = newVal;
            } else {
                console.log('Error');
            }
        };

        const getter = function () {
            return value;
        };

        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true,
        });
    };
}
