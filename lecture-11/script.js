window.addEventListener('load', () => {
    console.log('Loaded!');
    document.getElementById('btn').addEventListener('click', () => {
        console.log('Clicked!');
        let el = document.createElement('div');
        el.innerHTML = 'Hello World!';
        el.style.width = '100px';
        el.style.height = '100px';
        el.style.backgroundColor = 'blue';
        el.style.color = 'white';
        document.body.appendChild(el);
        el.addEventListener('click', () => {
            console.log('Div Clicked!');
        });
    });
});

fetch('https://pokeapi.co/api/v2/pokemon/ditto')
.then(value => value.json())
.then(value => console.log(value))
.catch(error => console.error(error));

let delayWithLog = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Hello!');
        resolve();
    }, 3000);
});

console.log('Start at', Date.now());
delayWithLog().then(() => {
    console.log('Middle at', Date.now());
    return delayWithLog();
})
.then(() => {
    console.log('Finish at', Date.now());
});

/*
    Promise.all();
    Promise.allSettled();
    Promise.any();
    Promise.race();
*/

async function f() {
    return 1;
}

let func = async () => {   
    let result = await f();
    console.log(result);
}

func();
