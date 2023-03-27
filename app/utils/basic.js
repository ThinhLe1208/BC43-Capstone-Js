export const $ = document.querySelector.bind(document);
export const $$ = document.querySelectorAll.bind(document);

export const delay = (time) => {
    return new Promise((resolve) => {
        setTimeout(resolve, time);
    });
};

export const debounce = (fn, delay) => {
    let idTimer;

    return () => {
        if (idTimer) {
            clearTimeout(idTimer);
        }
        idTimer = setTimeout(() => {
            fn();
        }, delay);
    };
};

export const throttling = (fn, delay) => {
    let toThrottle = false;

    return () => {
        if (!toThrottle) {
            toThrottle = true;
            fn();
        }
        setTimeout(() => {
            toThrottle = false;
        }, delay);
    };
};

// Lấy ngẫu nhiên phần tử con trong mảng với số lượng nhất định 
export const randomEls = (arr, amount) => {
    const input = [...arr];
    const output = [];

    for (let i = 1; i <= amount; i++) {
        const index = Math.floor(Math.random() * input.length);
        ([output[output.length]] = input.splice(index, 1));
    }

    return output;
};