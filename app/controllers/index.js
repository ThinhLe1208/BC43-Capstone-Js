import { getProducts } from '../services/api.js';
import { renderCarousel, renderFeature } from '../utils/render.js';
import { delay } from '../utils/basic.js';
import Carousel from '../utils/carousel.js';
import { hoverLineMenu, hideLoadingCarousel } from '../utils/basic.js';
import { checkLogIn } from '../utils/logIn.js';

window.onload = async () => {
    checkLogIn();
    hoverLineMenu();

    const data = await getProducts();

    // Giả lập mạng yếu
    await delay(2000);

    if (data) {
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
    }
};