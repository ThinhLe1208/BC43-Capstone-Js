import { getById } from '/models/api.js';
import { renderDetail, renderRelated } from '/views/render.js';
import { delay } from '/utils/basic.js';
import zoomFeature from '/utils/zoomFeature.js';
import interactInput from '/utils/interactInput.js';

window.onload = async () => {
    // var param = new URL(window.location.href or path)
    const URLparam = new URLSearchParams(window.location.search);
    const myParam = URLparam.get('id');
    const data = await getById(myParam);

    // Giả lập mạng yếu
    // await delay(1000);

    // Render giao diện
    renderDetail(data);
    renderRelated(data);

    // Tính năng phóng to hình ảnh
    zoomFeature();

    // Tăng giảm giá trị ô input
    interactInput();
};