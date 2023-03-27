import { getProfile } from '../services/api.js';
import { renderProfile, renderOrders } from '../utils/render.js';
import { delay } from '../utils/basic.js';
import { $, $$ } from '../utils/basic.js';
import checkLogIn from '../utils/checkLogIn.js';

// 1243asdzxc@gmail.com
// 123

const logout = () => {
    console.log(1);
    localStorage.removeItem('user');
    window.location.replace('../views/index.html');
};

window.onload = async () => {
    // check log in
    const { accessToken } = checkLogIn();
    const data = await getProfile(accessToken);

    // Giả lập mạng yếu
    await delay(2000);

    if (!data) {
        return;
    }

    console.log(data);
    renderProfile(data);
    renderOrders(data);

    $('.profile__logout-btn').addEventListener('click', logout);
};