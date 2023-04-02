import { $, $$, backToTop, checkLogIn, setCartsQty } from '../utils/basic.js';
import { getProfileApi, deleteOrderApi } from '../services/api.js';
import { renderProfile, renderOrders } from '../utils/render.js';
import User from '../models/User.js';

// Xử lý đăng xuất
const handleLogOut = () => {
    new User().removeLocalStorage();
    window.location.replace('../../index.html');
};

// Xử lý xóa lịch sử đơn hàng
const handleDeleteOrder = (e) => {
    const id = e.target.getAttribute('data-id');
    const { accessToken } = checkLogIn();

    deleteOrderApi(id, accessToken);

    const div = e.target.closest('.accordion-item');
    $('#accordionOrders').removeChild(div);
};

window.onload = async () => {
    setCartsQty();
    backToTop();

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