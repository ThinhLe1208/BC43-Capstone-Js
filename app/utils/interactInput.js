// Tăng giảm giá trị ô input
const interactInput = () => {
    const input = document.querySelector('.detail__number');
    const increaseBtn = document.querySelector('.detail__increase-btn');
    const decreaseBtn = document.querySelector('.detail__decrease-btn');
    let number = +input.value;

    increaseBtn.onclick = () => {
        ++number;
        input.value = number;
    };

    decreaseBtn.onclick = () => {
        if (number > 1) {
            --number;
            input.value = number;
        }
    };

    input.oninput = () => {
        if (+input.value >= 1) {
            number = +input.value;
        } else {
            input.value = 1;
        }
    };
};

export default interactInput;