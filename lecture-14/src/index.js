import usersService from "./users.js";
import { users as usersList } from "./users.js";

usersService.loadUsers().then(() => {
    console.log(usersService.getUserById(1));
    console.log(usersList);
});
