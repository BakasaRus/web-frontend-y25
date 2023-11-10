'use strict';

let hasAccess = function() {
    return this.age >= 18;
}

let arrow = () => this;

let user = {
    firstName: 'Nick',
    lastName: 'Andreev',
    age: 25,
    hasAccess,
    arrow,
    fullName: () => this,
}

console.log(user.hasAccess());
console.log(user.arrow());
console.log(user.fullName());

let anotherExample = function() {
    return this;
}

// Создаём новую функцию с изменённым this
let modifiedExample = anotherExample.bind(user);
console.log(anotherExample());
console.log(modifiedExample());
console.log(this);

// Вызываем функцию один раз с изменённым this
console.log(anotherExample.call(user));

document.getElementById('blue').addEventListener('click', function(event) {
    console.log(this);
});
