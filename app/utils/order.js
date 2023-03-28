import { $, $$, delay } from '../utils/basic.js';
import { orderApi, deleteOrderApi } from '../services/api.js';
import { checkLogIn } from '../utils/logIn.js';
import User from '../models/User.js';

export const handleOrder = async () => {
    const user = new User();
    const { email, carts } = user;

    const data = carts.map((cart) => {
        return {
            productId: cart.id,
            quantity: 1
        };
    });

    await orderApi(email, data);
    user.emptyCarts();
    await delay(1000);
    window.location.replace('../views/index.html');
};

export const handleDeleteOrder = (e) => {
    const id = e.target.getAttribute('data-id');
    const { accessToken } = checkLogIn();

    deleteOrderApi(id, accessToken);

    const div = e.target.closest('.accordion-item');
    $('#accordionOrders').removeChild(div);
};

