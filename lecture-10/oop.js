class User {
    constructor(firstName, lastName, age) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._age = age;
    }

    get fullName() {
        return `${this._firstName} ${this._lastName}`;
    }

    isValid() {
        return this._age >= 18;
    }
};

class Admin extends User {
    static availableRoles = ['MODERATOR', 'ADMIN'];

    #role = '';

    constructor(firstName, lastName, age, role) {
        // this отсутствует
        super(firstName, lastName, age);
        // this появился
        this.#role = role;
    }

    isValid() {
        const availableRoles = ['MODERATOR', 'ADMIN'];
        return availableRoles.includes(this.#role);
    }

    static getRoles() {
        return this.availableRoles;
    }
}

const user = new User("Nick", "Andreev", 25);
console.log(user);
console.log('user: ', user.isValid());

const admin = new Admin("Ivan", "Petrov", 35, 'ADMIN');
console.log(admin);
console.log('admin: ', admin.isValid());

// console.log(admin.#role);
