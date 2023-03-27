import { getById } from '../services/api.js';
import { renderDetail, renderRelated } from '../utils/render.js';
import { delay } from '../utils/basic.js';
import zoomFeature from '../utils/zoomFeature.js';
import interactInput from '../utils/interactInput.js';
import hoverLineMenu from '../utils/hoverLineMenu.js';
import checkLogIn from '../utils/checkLogIn.js';

window.onload = async () => {
    // check log in
    checkLogIn();

    //hover line menu
    hoverLineMenu();

    // var param = new URL(window.location.href or path)
    const URLparam = new URLSearchParams(window.location.search);
    const myParam = URLparam.get('id');
    const data = await getById(myParam);

    // Giả lập mạng yếu
    await delay(2000);

    // Render giao diện
    renderDetail(data);
    renderRelated(data);

    // Tính năng phóng to hình ảnh
    zoomFeature();

    // Tăng giảm giá trị ô input
    interactInput();
};