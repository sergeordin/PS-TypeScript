/*
	Необходимо сделать тип для результата валидации формы, основываясь на типе формы
*/

interface Form {
    name: string;
    password: string;
}

const form: Form = {
    name: 'Vasya',
    password: '123',
};

const formValidation: Validation<Form> = {
    name: { isValid: true },
    password: { isValid: false, errorMessage: 'Must be longer than 5 symbols' },
};

type Validation<T> = {
    [K in keyof T]:
        | { isValid: true }
        | { isValid: false; errorMessage: string };
};
