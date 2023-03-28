import { $, $$ } from '../utils/basic.js';
import { renderListCarts } from '../utils/render.js';
import { handleOrder } from '../utils/order.js';
import User from '../models/User.js';

window.onload = async () => {
    const { carts } = new User();
    renderListCarts(carts);

    $('.carts__buy-btn').addEventListener('click', handleOrder);
};