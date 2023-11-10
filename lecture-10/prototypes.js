function User(firstName, lastName, age) {
    // this = {};
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.getFullName = () => `${this.firstName} ${this.lastName}`;
    // return this;
}
User.prototype = {
    constructor: User,
    email: 'test@example.com',
}

let user = new User('Nick', 'Andreev', 25);
console.log(user);
user.email = 'me@bakasa.dev';
console.log(user.email);
console.log(user.getFullName());

let plain = {
    firstName: 'Ivan',
    lastName: 'Petrov',
    age: 22,
};
console.log(plain);

console.log(String.prototype);
String.prototype.firstLetter = function() {
    return this[0];
};

let greeting = 'Hello World!';
console.log(greeting.firstLetter());

let prototyped = Object.create({
    email: 'me@bakasa.dev',
    password: '12345678'
});

console.log(prototyped);
console.log(prototyped.email);
console.log(prototyped.password);
