import { $, $$ } from '../utils/basic.js';
import { getById } from '../services/api.js';
import User from '../models/User.js';

// Tăng giảm giá trị ô input
export const interactInput = () => {
    const input = $('.detail__number');
    let number = +input.value;

    $('.detail__increase-btn').onclick = () => {
        ++number;
        input.value = number;
    };

    $('.detail__decrease-btn').onclick = () => {
        if (number > 1) {
            --number;
            input.value = number;
        }
    };

    input.oninput = () => {
        if (+input.value >= 1) {
            number = +input.value;
        } else {
            input.value = 1;
        }
    };
};

export const handleAddCart = async () => {
    const qty = $('.detail__number').value;
    const param = new URLSearchParams(window.location.search);
    const myParam = param.get('id');
    const data = await getById(myParam);

    if (!data) {
        return;
    }

    const user = new User();

    if (!user.email) {
        return;
    }

    for (let i = 1; i <= qty; i++) {
        user.addCart(data);
    }
    user.setUser();
};
