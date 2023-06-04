interface IUserService {
    users: number;
    getUsersInDB(): number;
}

class UserService2 implements IUserService {
    users: number = 1000;

    @Catch({ rethrow: true })
    getUsersInDB(): number {
        throw new Error('Error');
    }
}

function Catch({ rethrow }: { rethrow: boolean } = { rethrow: true }) {
    return (
        target: Object,
        _: string | symbol,
        descriptor: TypedPropertyDescriptor<(...args: any[]) => any>
    ): TypedPropertyDescriptor<(...args: any[]) => any> | void => {
        const method = descriptor.value;
        descriptor.value = async (...args: any[]) => {
            try {
                return await method?.apply(target, args);
            } catch (error) {
                if (error instanceof Error) {
                    console.log(error.message);
                    if (rethrow) {
                        throw error;
                    }
                }
            }
        };
    };
}

console.log(new UserService2().getUsersInDB());
