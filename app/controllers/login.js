import { hoverLineMenu } from '../utils/basic.js';
import { checkLogIn } from '../utils/logIn.js';
import { handleLogIn } from '../utils/logIn.js';
import { $, $$ } from '../utils/basic.js';
import { setCartsQty } from '../utils/carts.js';

window.onload = async () => {
    checkLogIn();
    hoverLineMenu();
    setCartsQty();

    $(".btn-register.login").addEventListener('click', handleLogIn);
};