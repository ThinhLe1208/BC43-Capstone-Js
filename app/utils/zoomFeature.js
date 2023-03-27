// Tính năng phóng to hình ảnh
const zoomFeature = () => {
    if (window.innerWidth > 576) {
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
    }
};

export default zoomFeature;