import { getProducts } from '/models/api.js';
import { renderCarousel, renderFeature, hideLoadingCarousel } from '/views/render.js';
import { delay } from '/utils/basic.js';
import Carousel from '/utils/carousel.js';

window.onload = async () => {
    const data = await getProducts();

    // Giả lập mạng yếu
    await delay(1000);

    hideLoadingCarousel();

    renderCarousel(data);
    renderFeature(data);

    Carousel({
        selector: ".self-build-carousel",
        pag: true,
        responsive: {
            0: 1
        }
    });
};