'use strict';

let obj = {
    name: 'Nick',
    age: 25
};

const obj3 = {};
for (const key in obj) {
    obj3[key] = obj[key];
}

let obj2 = obj;
obj2.age = 88;

console.log(obj);
console.log(obj2.name);
console.log(obj3['age']);

// obj3 = {};

let empty = {};
console.log(empty?.name?.toUpperCase());

// let fullName = prompt('Введите имя');
// let age = prompt('Введите возраст');

// let short = { fullName, age };

let info = {
    firstName: 'Nick',
    lastName: 'Andreev',
    age: 25,
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(value) {
        [this.firstName, this.lastName] = value.split(' ', 2);
    }
};
console.log(info);
info.fullName = 'Roman Makarevich';
console.log(info);

Object.defineProperty(info, 'gender', { 
    value: 'TEST', 
    writable: false, 
    configurable: false, 
    enumerable: true 
});

console.log(info);
// info.gender = 'NOT TEST';
// console.log(info);
