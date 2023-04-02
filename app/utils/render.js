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
                <button><a href="./app/views/detail.html?id=${product.id}">Buy now</a></button>
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
                    <a href="./app/views/detail.html?id=${product.id}" class="feature__button">Buy now</a>
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
    const htmlString = data.relatedProducts.map((product) => {
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

    related.innerHTML = htmlString.join('');
};

export const renderProfile = (data) => {
    const profile = document.querySelector('.profile__content');

    profile.innerHTML = `
        <div class="col-md-6 profile__left">
            <img src="${data.avatar}" alt="avatar"
            class="d-block w-50 border border-primary border-3 rounded-circle mx-auto mb-4">
            <div class="text-center">
                <button class="profile__logout-btn btn btn-danger">Logout</button>
            </div>
            </div>
            <div class="col-md-6 profile__right">
                <div class="mb-4">
                    <p class="form-label fw-semibold mb-3">Name</p>
                    <div class="alert alert-info">${data.name}</div>
                </div>
                <div class="mb-4">
                    <p class="form-label fw-semibold mb-3">Email</p>
                    <div class="alert alert-info">${data.email}</div>
                </div>
                <div class="mb-4">
                    <p class="form-label fw-semibold mb-3">Gender</p>
                    <div class="alert alert-info">${data.gender ? 'Nam' : 'Nữ'}</div>
                </div>
                <div class="mb-4">
                    <p class="form-label fw-semibold mb-3">Phone</p>
                    <div class="alert alert-info">${data.phone}</div>
                </div>
            </div>
        `;
};

export const renderOrders = (data) => {
    const order = document.querySelector('#accordionOrders');
    const { ordersHistory } = data;

    const stringHTML = ordersHistory.map((order, index) => {
        const { orderDetail } = order;

        const detailString = orderDetail.reduce((acc, detail) => {
            return acc += `
                <tr>
                    <td class="w-25">
                        <img src="${detail.image}" class="img-fluid" alt="">
                    </td>
                    <td class="text-center">${detail.name}</td>
                    <td class="text-center">${detail.price}$</td>
                    <td colspan="2" class="d-none d-sm-table-cell">${detail.shortDescription}</td>
                </tr>
            `;
        }, '');

        return `
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button collapsed bg-primary text-white" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapseOne">
                    ${order.date}
                </button>
            </h2>
            <div id="collapse${index}" class="accordion-collapse collapse" data-bs-parent="#accordionOrders">
                <div class="accordion-body">
                    <table class="table table-hover align-middle">
                        <thead>
                            <tr>
                                <th class="text-center fw-semibold align-middle">Image</th>
                                <th class="text-center fw-semibold align-middle">Name</th>
                                <th class="text-center fw-semibold align-middle">Price</th>
                                <th class="text-center fw-semibold align-middle d-none d-sm-table-cell">Description</th>
                                <th class="text-center">
                                    <button class="profile__remove-order-btn btn btn-danger ms-3" data-id="${order.id}">X</button>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            ${detailString}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        `;
    });

    order.innerHTML = stringHTML.join('');
};

export const renderListCarts = (data) => {
    const carts = document.querySelector('.carts__list');
    let cartsString;

    if (data.length == 0) {
        cartsString = `
        <tr>
            <td class="text-center p-5" colspan="12">Empty</td>
        </tr>
        `;
    } else {
        cartsString = data.map((cart, index) => {
            return `
            <tr>
                <td class="w-25">
                    <img src="${cart.image}" class="img-fluid" alt="">
                </td>
                <td>${cart.name}</td>
                <td>${cart.price}$</td>
                <td class="d-none d-sm-table-cell">${cart.shortDescription}</td>
                <th class="text-center">
                    <button class="list__remove-cart-btn btn btn-danger mx-auto" onclick="handleDeleteCartItem(${index})">X</button>
                </th>
            </tr>
            `;
        }).join('');
    }

    carts.innerHTML = cartsString;
};