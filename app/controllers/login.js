import { hoverLineMenu } from '../utils/basic.js';
import { checkLogIn } from '../utils/logIn.js';
import { handleLogIn } from '../utils/logIn.js';
import { $, $$ } from '../utils/basic.js';


window.onload = async () => {
    checkLogIn();
    hoverLineMenu();

    $(".btn-register.login").addEventListener('click', handleLogIn);
};