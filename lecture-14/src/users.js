export let users = [];

let load = async () => {
    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    users = await response.json();
}

let getById = (id) => {
    console.log(this);
    return users.filter(user => user.id === id)[0];
}

export default {
    loadUsers: load,
    getUserById: getById,
}
