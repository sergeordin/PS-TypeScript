"use strict";
/*
    Необходимо сделать тип для результата валидации формы, основываясь на типе формы
*/
const form = {
    name: 'Vasya',
    password: '123',
};
const formValidation = {
    name: { isValid: true },
    password: { isValid: false, errorMessage: 'Must be longer than 5 symbols' },
};
