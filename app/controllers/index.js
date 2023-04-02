import { getProducts } from '../services/api.js';
import { renderCarousel, renderFeature } from '../utils/render.js';
import { hoverLineMenu, backToTop, setCartsQty, checkLogIn, hideLoadingCarousel, delay } from '../utils/basic.js';
import { DELAY_NETWORK } from '../configs/configs.js';
import Carousel from '../utils/carousel.js';

window.onload = async () => {
    checkLogIn();
    hoverLineMenu();
    setCartsQty();
    backToTop();

    const data = await getProducts();

    // Giả lập mạng yếu
    await delay(DELAY_NETWORK);

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