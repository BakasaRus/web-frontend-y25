let x: number = 0;
let y = 'Hello World!';

console.log(x);
console.log(y);

let yes_no: boolean;
yes_no = false;

let numbers: number[] = [1, 2, 3, 5];

for (const a of numbers) {
    console.log(a);
}

let junk: any = 5;
junk = 'Test';
console.log(junk.toUpperCase());

let trash: unknown = 5;
trash = 'Test';
console.log(trash.toUpperCase());

let someParam: string | number = 5;
someParam = 'test';
someParam = false;

type Person = { name: string, age: number };
type Product = { name: string, price: number };
type WithName = Person | Product;

interface IPerson {
    name: string;
    age: number;
};

let user: Person = {
    name: 'Nick',
    age: 25,
};

let apple: Product = {
    name: 'An apple',
    price: 109_000,
}

for (const item of [user, apple]) {
    console.log(item.name);
}

let handler = (item: string | number) => {
    if (typeof item === 'string') {
        console.log(item.toLowerCase());
    }
    else {
        console.log(item.toFixed(2));
    }
}

[1, 'Test', 'Hello', 8].forEach(handler);

let personHandler = (person: Person) => {
    console.log(person.name);
    console.log(person.age);
}

personHandler({ name: 'Test', age: 34 });

type Status = 'CREATED' | 'UPDATED' | 'REMOVED';
let userStatus: Status = 'CREATED';

