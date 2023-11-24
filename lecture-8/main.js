// Функция для вывода всплывающего окна с сообщением (а-ля MessageBox)
// alert('Hello World!');

// Различные типы данных
// P.S. На самом деле null - это объект, но пусть будет отдельно
console.log('Boolean:', true);
console.log('String:', 'Hello World!');
console.log('Number:', 0.1 + 0.2);
console.log('Number:', Number.MAX_SAFE_INTEGER);
console.log('BigInt:', 12345678901234567890n);
console.log('Null:', null);
console.log('Undefined:', undefined);
console.log('Symbol:', Symbol('test'));

// Объявим несколько переменных...
{
    var oldFasioned = 'Hello!';
    let coolStyle = 'World!';
    const PI = 3;
}

// var будет виден вне блока, а let и const - нет
// В целом var виден либо до конца функции, либо глобально,
// а let и const только внутри блока
console.log(oldFasioned);
// console.log(PI);
// console.log(coolStyle);

// Объект - ещё один тип, в первом приближении работающий
// как ассоциативный массив или словарь
let info = {
    name: 'Nikolay',
    age: 25
};

// Поля объекта можно получать через точку или через индексы
// (первый способ напоминает объекты в других языках, второй - словари)
console.log(info.name);
console.log(info['age']);

// Массив - как бы ещё один тип данных, но по факту это объект,
// ключами которого являются числа
let data = [1, 2, 3, 'hello', false];
console.log(data);
console.log(data[2]);

// Ключами объекта могут быть строки (или то, что к ним приводится)
// и символы (Symbol). Поэтому мы можем в массивах использовать
// не только числа, но и строки

// Условный оператор работает как ожидается
if (info.age >= 18) {
    console.log('Всё хорошо');
} else {
    console.log('Не всё хорошо :(');
}

// Есть оператор множественного ветвления (switch-case)
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

// Классический цикл со счётчиком из C-подобных языков
for (let i = 0; i < data.length; i++) {
    const element = data[i];
    console.log(`Element ${i}: ${element}`);
}

// Перебор ключей объекта
for (const key in info) {
    console.log(key);
}

// Перебор значений объекта (в том числе массива)
for (const item of data) {
    console.log(item);
}

// Цикл с предусловием
while (info.age < 45) {
    info.age += 10;
    console.log('Another decade');
}

// Цикл с постусловием
do {
    info.age -= 10;
    console.log('Back to the past');
} while (info.age > 25);

// Обработка исключений
try {
    console.log(test);
} catch (error) {
    console.log(error);
} finally {
    console.log('Finally!');
}

// Обычное объявление функций
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

// Функции - ещё один тип в JS (в этом контексте их ещё называют 
// объектами первого класса) Это позволяет присваивать функции
// переменным, передавать их в качестве параметров и возвращать 
// как результат работы другой функции
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

// Стрелочные функции - более лаконичный способ создать функцию
// У них есть свой прикол, который будет обсуждаться позже
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