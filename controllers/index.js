const renderCarousel = async () => {
    const carousel = document.querySelector('.self-build-carousel');
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
                <button><a href="/detail.html?id=${product.id}">Buy now</a></button>
            </div>
        </div>
        `;
    });

    carousel.innerHTML = htmlString.join('');
};

const renderFeature = async () => {
    const feature = document.querySelector('.feature__content');
    const products = await getProducts();

    // const htmlString = products.map((product) => {
    //     return `
    //     <li class="col-4">
    //         <div class="feature__item">
    //             <div class="feature__item-header">
    //                 <img src="${product.image}" alt="product-img">
    //             </div>
    //             <div class="feature__item-body">
    //                 <h3>${product.name}</h3>
    //                 <p>${product.shortDescription}</p>
    //             </div>
    //             <div class="feature__item-footer">
    //                 <a href="/detail.html?id=${product.id}" class="feature__button">Buy now</a>
    //                 <div class="feature__price">${product.price}$</div>
    //             </div>
    //         </div>
    //     </li>
    //     `;
    // });

    let htmlString = '';
    for (let i = 0; i < 6; i++) {
        let product = products[i];
        console.log('lan ', i, product);
        htmlString += `
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
    }

    // feature.innerHTML = htmlString.join('');
    feature.innerHTML = htmlString;
};

window.onload = async () => {
    await renderCarousel();
    await renderFeature();

    // await delay(1000);

    Carousel({
        selector: ".self-build-carousel",
        responsive: {
            0: 1
        }
    });
};