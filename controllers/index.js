const carousel = document.querySelector('.self-build-carousel');
const feature = document.querySelector('.feature__content');

const renderCarousel = async () => {
    const products = await getProducts();

    const htmlString = products.map((product) => {
        return `
        <div class="carousel__item item">
            <div class="carousel__img">
                <img src="${product.image}" alt="product-img">
            </div>
            <div class="carousel__info">
                <h3 class="carousel__name">${product.name}</h3>
                <p class="carousel__description">${product.shortDescription}</p>
                <button>Buy now</button>
            </div>
        </div>
        `;
    });

    carousel.innerHTML = htmlString.join('');
    console.log('render done');
};

const renderFeature = async () => {
    const products = await getProducts();

    const htmlString = products.map((product) => {
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
                    <a href="/detail.html?id=${product.id}" class="feature__button">Buy now</a>
                    <div class="feature__price">${product.price}$</div>
                </div>
            </div>
        </li>
        `;
    });

    feature.innerHTML = htmlString.join('');
};

renderCarousel();
renderFeature();


