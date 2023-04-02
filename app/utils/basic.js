import User from '../models/User.js';

export const $ = document.querySelector.bind(document);
export const $$ = document.querySelectorAll.bind(document);

// Giả lập mạng yếu
export const delay = (time) => {
    return new Promise((resolve) => {
        setTimeout(resolve, time);
    });
};

// Lấy ngẫu nhiên phần tử con trong mảng với số lượng nhất định 
export const randomEls = (arr, amount) => {
    const input = [...arr];
    const output = [];

    for (let i = 1; i <= amount; i++) {
        const index = Math.floor(Math.random() * input.length);
        ([output[output.length]] = input.splice(index, 1));
    }

    return output;
};

// Chuyển động gạch dưới khi hover thanh nav trên header
export const hoverLineMenu = () => {
    const links = [...document.querySelectorAll(".menu-link")];
    links.forEach((item) => item.addEventListener("mouseenter", handleHoveerLine));
    const line = document.createElement("div");
    line.className = "line-effect";
    document.body.appendChild(line);
    function handleHoveerLine(e) {
        const { left, width, top, height } = e.target.getBoundingClientRect();
        line.style.width = `${width}px`;
        line.style.left = `${left}px`;
        line.style.top = `${top + height + 5}px`;
    }
    const menu = document.querySelector(".menu");
    menu.addEventListener("mouseleave", function () {
        line.style.width = 0;
    });
};

// Hiển thị số lượng hàng trong giỏ hàng trên icon cart header
export const setCartsQty = () => {
    const user = User.getLocalStorage();
    if (user) {
        if (user.carts.length >= 1) {
            $('.carts-qty').style.display = 'block';
            $('.carts-qty').innerHTML = user.carts.length;
        } else {
            $('.carts-qty').style.display = 'none';
        }
    }
};

// Ẩn loading animation
export const hideLoadingCarousel = () => {
    const loading = document.querySelector('.skeleton-spinner');
    const carousel = document.querySelector('.self-build-carousel');

    loading.style.display = 'none';
    carousel.innerHTML = '';
};

// Kiểm tra đăng nhập
export const checkLogIn = () => {
    const user = User.getLocalStorage();

    // Show/hide profile in header
    if (user) {
        $$('.header-item > a').forEach((ele) => {
            ele.href.split('/').at(-1) == 'profile.html'
                ? ele.style.display = 'block'
                : ele.style.display = 'none';
        });
    } else {
        $$('.header-item > a').forEach((ele) => {
            ele.href.split('/').at(-1) == 'profile.html'
                ? ele.style.display = 'none'
                : ele.style.display = 'block';
        });
    }

    return user;
};

// Thêm phân cách hàng ngàn cho số
export const numberWithCommas = function (number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

// Back to top
export const backToTop = function () {
    $('#moveToTop').onclick = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };

    window.onscroll = function () {
        if (
            document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20
        ) {
            $("#moveToTop").style.display = "block";
        } else {
            $("#moveToTop").style.display = "none";
        }
    };
};