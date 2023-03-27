import { getProducts } from '../services/api.js';
import { renderCarousel, renderFeature, hideLoadingCarousel } from '../utils/render.js';
import { delay } from '../utils/basic.js';
import Carousel from '../utils/carousel.js';
import hoverLineMenu from '../utils/hoverLineMenu.js';

window.onload = async () => {
    //hover line menu
    hoverLineMenu();

    const data = await getProducts();

    // Giả lập mạng yếu
    await delay(2000);

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