// Декоратор, который добавляет свойство createdAt в класс, фиксируя дату создания

interface UserService {
    users: number;
    getusersInDB(): number;
}

@CreatedAt
class UserService implements UserService {
    users: number = 1000;

    getusersInDB(): number {
        return this.users;
    }
}

function CreatedAt<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        createdAt = new Date();
    };
}

type CreatedAt = {
    createdAt: Date;
};

console.log((new UserService() as UserService & CreatedAt).createdAt);
