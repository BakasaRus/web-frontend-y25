// alert('Hello World!');

console.log('Boolean:', true);
console.log('String:', 'Hello World!');
console.log('Number:', 0.1 + 0.2);
console.log('Number:', Number.MAX_SAFE_INTEGER);
console.log('BigInt:', 12345678901234567890n);
console.log('Null:', null);
console.log('Undefined:', undefined);
console.log('Symbol:', Symbol('test'));

{
    var oldFasioned = 'Hello!';
    let coolStyle = 'World!';
    const PI = 3;
}

console.log(oldFasioned);
// console.log(PI);
// console.log(coolStyle);

let info = {
    name: 'Nikolay',
    age: 25
};

console.log(info.name);
console.log(info['age']);

let data = [1, 2, 3, 'hello', false];
console.log(data);
console.log(data[2]);

if (info.age >= 18) {
    console.log('Всё хорошо');
} else {
    console.log('Не всё хорошо :(');
}

switch (info.age) {
    case 45:
        console.log('Всё прям хорошо');
        break;
    case 18:
        console.log('Всё как-то уже не совсем хорошо');
        break;
    default:
        console.log('Всё нормально');
        break;
}

for (let i = 0; i < data.length; i++) {
    const element = data[i];
    console.log(`Element ${i}: ${element}`);
}

for (const key in info) {
    console.log(key);
}

for (const item of data) {
    console.log(item);
}

while (info.age < 45) {
    info.age += 10;
    console.log('Another decade');
}

do {
    info.age -= 10;
    console.log('Back to the past');
} while (info.age > 25);

try {
    console.log(test);
} catch (error) {
    console.log(error);
} finally {
    console.log('Finally!');
}

function sum(a, b) {
    return a + b;
}

// 13
console.log(sum(5, 8));
// 58
console.log(sum('5', '8'));
// -3 -> 5-8
console.log(sum('5', -8));
// -3
console.log(sum(+'5', -8));
// null -> 5null
console.log(sum('5', null));
// ??? -> NaN
console.log(sum(null, undefined));

let product = function(a, b) {
    return a * b;
}

// 40
console.log(product(5, 8));
// 40
console.log(product('5', '8'));
// -40
console.log(product('5', -8));
// -40
console.log(product(+'5', -8));
// 0
console.log(product('5', null));
// NaN
console.log(product(null, undefined));

let divide = (a, b) => a / b;

// 0.625
console.log(divide(5, 8));
// 0.625
console.log(divide('5', '8'));
// -0.625
console.log(divide('5', -8));
// -0.625
console.log(divide(+'5', -8));
// Infinity
console.log(divide('5', null));
// NaN
console.log(divide(null, undefined));