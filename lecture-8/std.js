let matrix = [
    { name: 'Nikolay', age: 25 },
    { name: 'Nikolay', age: 25 },
    { name: 'Nikolay', age: 25, isAdmin: true },
    [0, 1, 2]
];

// console - стандартный объект JS
// Выводить можно разные данные, в том числе таблицы
console.table(matrix);
// Можно менять тип выводимых сообщений
console.error('Something bad is just happened');

// Ниже примеры использования стандартных встроенных объектов
// Это действительно объекты, несмотря на то, что названия 
// похожи на классы, подробнее будет в лекции про ООП
console.log(Date.parse('2020-01-19'));
console.log(Array.isArray(info));
console.log(Math.max(1, 2, 3));
console.log(Number.NaN);
console.log(String.fromCodePoint(8520, 1420));
console.log(RegExp(/d+/g).test('aWFezsgrdxf85weszdfxg'));

// Это примеры использования стандартных объектов,
// составляющих объектную модель браузера
// (иными словами, объекты, стандартные для браузеров)
console.log(document.querySelector('body'));
console.log(history.length);
console.log(window.location.href);
