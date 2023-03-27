import { randomEls } from './basic.js';

export const renderCarousel = (data) => {
    const carousel = document.querySelector('.self-build-carousel');
    const products = randomEls(data, 3);

    const htmlString = products.map((product) => {
        return `
        <div class="carousel__item item">
            <div class="carousel__img">
                <img src="${product.image}" alt="product-img">
            </div>
            <div class="carousel__info">
                <h3 class="carousel__name">${product.name}</h3>
                <p class="carousel__description">${product.shortDescription}</p>
                <button><a href="./detail.html?id=${product.id}">Buy now</a></button>
            </div>
        </div>
        `;
    });

    carousel.innerHTML = htmlString.join('');
};

export const renderFeature = (data) => {
    const feature = document.querySelector('.feature__content');
    const products = randomEls(data, 6);

    const htmlString = products.map((product) => {
        return `
        <li class="col">
            <div class="feature__item">
                <div class="feature__item-top">
                    <div class="feature__item-header">
                        <img src="${product.image}" alt="product-img">
                    </div>
                    <div class="feature__item-body">
                        <h3>${product.name}</h3>
                        <p>${product.shortDescription}</p>
                    </div>
                </div >
                <div class="feature__item-footer">
                    <a href="./detail.html?id=${product.id}" class="feature__button">Buy now</a>
                    <div class="feature__price">${product.price}$</div>
                </div>
            </div>
        </li>
        `;
    });

    feature.innerHTML = htmlString.join('');
};

export const renderDetail = (data) => {
    const detail = document.querySelector('.detail .container');

    const sizeString = data.size.map((size) => {
        return `<li class="detail__size">${size}</li>`;
    }).join('');

    detail.innerHTML = `
    <div class="detail__img">
        <img src="${data.image}">
        <div class="detail__img-zoom-container">
            <img class="detail__img-zoom" src="${data.image}">
        </div>
    </div>

    <div class="detail__content">
        <h3 class="detail__name">${data.name}</h3>
        <p class="detail__decription">${data.description}</p>
        <p class="detail__label-size">Available size</p>
        <ul class="detail__sizes">
            ${sizeString}
        </ul>
        <div class="detail__price">${data.price}$</div>
        <div class="detail__quality">
            <button class="detail__increase-btn">+</button>
            <input type="number" class="detail__number" value="1">
            <button class="detail__decrease-btn">-</button>
        </div>
        <button class="detail__add-btn">Add to cart</button>
    </div>
    `;
};

export const renderRelated = (data) => {
    const related = document.querySelector('.feature__content');
    console.log(data);
    const htmlString = data.relatedProducts.map((product) => {
        return `
        <li class="col-4">
                    <div class="feature__item">
                        <div class="feature__item-header">
                            <img src="${product.image}" alt="product-img">
                        </div>
                        <div class="feature__item-body">
                            <h3>${product.name}</h3>
                            <p>${product.shortDescription}</p>
                        </div>
                        <div class="feature__item-footer">
                            <a href="./detail.html?id=${product.id}" class="feature__button">Buy now</a>
                            <div class="feature__price">${product.price}$</div>
                        </div>
                    </div>
                </li>
        `;
    });

    related.innerHTML = htmlString.join('');
};

export const hideLoadingCarousel = () => {
    const loading = document.querySelector('.skeleton-spinner');
    const carousel = document.querySelector('.self-build-carousel');

    loading.style.display = 'none';
    carousel.innerHTML = '';
};