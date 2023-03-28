export const $ = document.querySelector.bind(document);
export const $$ = document.querySelectorAll.bind(document);

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

// Chuyển động gạch dưới khi hover
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

// Tính năng phóng to hình ảnh
export const zoomFeature = () => {
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

export const hideLoadingCarousel = () => {
    const loading = document.querySelector('.skeleton-spinner');
    const carousel = document.querySelector('.self-build-carousel');

    loading.style.display = 'none';
    carousel.innerHTML = '';
};