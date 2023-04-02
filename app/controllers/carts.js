import { $, $$, setCartsQty, backToTop, checkLogIn, numberWithCommas, delay } from '../utils/basic.js';
import { renderListCarts } from '../utils/render.js';
import { orderApi } from '../services/api.js';
import User from '../models/User.js';

// Xử lý mua hàng
const handleOrder = async () => {
    const user = User.getLocalStorage();
    if (!user) {
        return;
    }

    const { email, carts } = user;
    if (carts.length === 0) {
        return;
    }

    const data = carts.map((cart) => {
        return {
            productId: cart.id,
            quantity: 1
        };
    });

    await orderApi(email, data);
    user.emptyCarts();
    await delay(1000);
    window.location.replace('../../index.html');
};

// Xử lý khi xóa hàng khỏi giỏ hàng
const handleDeleteCartItem = (index) => {
    const user = User.getLocalStorage();
    user.removeCart(index);

    const totalPrice = user.totalPrice();
    $('.carts__price').innerHTML = numberWithCommas(totalPrice) + ' $';
    renderListCarts(user.carts);
    setCartsQty();
};

window.onload = async () => {
    setCartsQty();
    checkLogIn();
    backToTop();

    const user = User.getLocalStorage();
    if (user) {
        const totalPrice = user.totalPrice();

        $('.carts__price').innerHTML = numberWithCommas(totalPrice) + ' $';
        renderListCarts(user.carts);

        $('.carts__buy-btn').addEventListener('click', handleOrder);
        window.handleDeleteCartItem = handleDeleteCartItem;
    }
};