import { $, $$ } from '../utils/basic.js';
import { getProfileApi } from '../services/api.js';
import { renderProfile, renderOrders } from '../utils/render.js';
import { checkLogIn, handleLogOut } from '../utils/logIn.js';
import { handleDeleteOrder } from '../utils/order.js';

window.onload = async () => {
    const { accessToken } = checkLogIn();
    const data = await getProfileApi(accessToken);

    if (!data) {
        return;
    }

    renderProfile(data);
    renderOrders(data);

    $('.profile__logout-btn').addEventListener('click', handleLogOut);
    $$('.profile__remove-order-btn').forEach((ele) => {
        ele.addEventListener('click', handleDeleteOrder);
    });
};