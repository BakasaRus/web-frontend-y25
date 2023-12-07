// Обнаружение модуля
let module = () => {
    let alertHello = () => {
        alert('Hello World!');
    }

    return {
        alertHello,
    }
};

module().alertHello();
