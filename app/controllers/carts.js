import { $, $$ } from '../utils/basic.js';
import { renderListCarts } from '../utils/render.js';
import { handleOrder } from '../utils/order.js';
import User from '../models/User.js';
import { setCartsQty } from '../utils/carts.js';
import { checkLogIn } from '../utils/logIn.js';

window.onload = async () => {
    setCartsQty();
    checkLogIn();
    const user = User.getLocalStorage();
    if (user.carts.length) {
        renderListCarts(user.carts);
    }

    $('.carts__buy-btn').addEventListener('click', handleOrder);
};