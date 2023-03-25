const detail = document.querySelector('.detail .container');
const related = document.querySelector('.feature__content');

const renderDetail = async (id) => {
    const product = await getById(id);

    const sizeString = product.size.map((size) => {
        return `<li class="detail__size">${size}</li>`;
    }).join('');


    detail.innerHTML = `
    <div class="detail__img">
        <img src="${product.image}">
        <div class="detail__img-zoom-container">
            <img class="detail__img-zoom" src="${product.image}">
        </div>
    </div>

    <div class="detail__content">
        <h3 class="detail__name">${product.name}</h3>
        <p class="detail__decription">${product.description}</p>
        <p class="detail__label-size">Avaiable size</p>
        <ul class="detail__sizes">
            ${sizeString}
        </ul>
        <div class="detail__price">${product.price}$</div>
        <div class="detail__quality">
            <button class="detail__decrease-btn">+</button>
            <input type="number" class="detail__number" placeholder="1">
            <button class="detail__increase-btn">-</button>
        </div>
        <button class="detail__add-btn">Add to cart</button>
    </div>
    `;

    renderRelated(product.relatedProducts);
};

const renderRelated = (arr) => {
    const htmlString = arr.map((product) => {
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

    related.innerHTML = htmlString.join('');
};

window.onload = async () => {
    // var param = new URL(window.location.href or path)
    const URLparam = new URLSearchParams(window.location.search);
    const myParam = URLparam.get('id');

    await renderDetail(myParam);

    // Tinhs năng phóng to hình ảnh
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
};

