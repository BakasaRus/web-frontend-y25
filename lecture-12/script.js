// window.cookieStore.set('myCookie', 'Hello World!')

window.localStorage.setItem('Makar', 'Roma');
console.log(window.localStorage.getItem('Makar'));
console.log(window.localStorage.getItem('Makaronich'));

// window.localStorage.removeItem('Makar');

let get_pokemon = async (name) => {
    let pokemons = window.localStorage.getItem('pokemons');
    pokemons = JSON.parse(pokemons) ?? {};

    if (!Object.hasOwnProperty(pokemons, name)) {
        let result = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        result = await result.json();
        pokemons[name] = result;
        window.localStorage.setItem('pokemons', JSON.stringify(pokemons));
    }

    return pokemons[name];
}

// Warning!
get_pokemon('eevee');
get_pokemon('pikachu');
get_pokemon('ditto');

let openRequest = indexedDB.open('pokemons', 1);

openRequest.onupgradeneeded = () => {
    let db = openRequest.result;
    if (!db.objectStoreNames.contains['pokemons']) {
        db.createObjectStore('pokemons', {keyPath: 'id'});
    }
}

openRequest.onsuccess = () => {
    let db = openRequest.result;

    let transaction = db.transaction('pokemons', 'readwrite');
    let pokemons = transaction.objectStore('pokemons');

    let pokemonsData = window.localStorage.getItem('pokemons');
    pokemonsData = JSON.parse(pokemonsData) ?? {};

    for (const key in pokemonsData) {
        if (Object.hasOwnProperty.call(pokemonsData, key)) {
            const element = pokemonsData[key];
            let request = pokemons.add(element);
            request.onsuccess = () => {
                console.log(`${key} is added to IndexedDB`);
            }
        }
    }



}
