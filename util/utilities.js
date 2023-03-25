const delay = (time) => {
    return new Promise((resolve) => {
        setTimeout(resolve, time);
    });
};

const debounce = (fn, delay) => {
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

const throttling = (fn, delay) => {
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