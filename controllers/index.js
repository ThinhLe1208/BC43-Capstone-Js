const feature = document.querySelector('.feature__content');

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

window.onload = renderFeature;

