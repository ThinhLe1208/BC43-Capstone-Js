import { $, $$, delay, backToTop, hoverLineMenu, checkLogIn, setCartsQty, numberWithCommas } from '../utils/basic.js';
import { getById } from '../services/api.js';
import { renderDetail, renderRelated } from '../utils/render.js';
import { DELAY_NETWORK } from '../configs/configs.js';
import User from '../models/User.js';

// Tăng giảm giá trị ô input
const interactInput = () => {
    const input = $('.detail__number');
    const priceEle = $('.detail__price');
    const basePrice = +$('.detail__price').textContent.replace('$', '');
    let number = +input.value;

    $('.detail__increase-btn').onclick = () => {
        ++number;
        input.value = number;
        priceEle.innerHTML = numberWithCommas(basePrice * number) + '$';
    };

    $('.detail__decrease-btn').onclick = () => {
        if (number > 1) {
            --number;
            input.value = number;
            priceEle.innerHTML = numberWithCommas(basePrice * number) + '$';
        }
    };

    input.oninput = () => {
        if (+input.value >= 1) {
            number = +input.value;
            priceEle.innerHTML = numberWithCommas(basePrice * number) + '$';

        } else {
            input.value = 1;
            priceEle.innerHTML = numberWithCommas(basePrice * number) + '$';
        }
    };
};

// Tính năng phóng to hình ảnh
const zoomFeature = () => {
    if (window.innerWidth > 576) {
        const detailImg = document.querySelector('.detail__img > img');
        const detailImgZoomCon = document.querySelector('.detail__img-zoom-container');
        const detailImgZoom = document.querySelector('.detail__img-zoom');

        detailImg.onmousemove = (e) => {
            detailImgZoomCon.style.display = 'block';
            detailImgZoom.style.objectPosition = `${-e.offsetX}px ${-e.offsetY}px`;
        };

        detailImg.onmouseout = () => {
            detailImgZoomCon.style.display = 'none';
        };
    }
};

// Xử lý khi nhấn nút thêm hàng vào giỏ hàng
const handleAddCart = async () => {
    const param = new URLSearchParams(window.location.search);
    const myParam = param.get('id');
    const data = await getById(myParam);
    if (!data) {
        return;
    }

    const user = User.getLocalStorage();
    if (!user) {
        return;
    }

    const qty = $('.detail__number').value;
    for (let i = 1; i <= qty; i++) {
        user.addCart(data);
    }

    user.setLocalStorage();
    setCartsQty();
};

window.onload = async () => {
    checkLogIn();
    hoverLineMenu();
    setCartsQty();
    backToTop();

    // var param = new URL(window.location.href or path)
    const URLparam = new URLSearchParams(window.location.search);
    const myParam = URLparam.get('id');
    const data = await getById(myParam);

    // Giả lập mạng yếu
    await delay(DELAY_NETWORK);

    if (data) {
        renderDetail(data);
        renderRelated(data);
    }

    zoomFeature();
    interactInput();

    $('.detail__add-btn').addEventListener('click', handleAddCart);
};