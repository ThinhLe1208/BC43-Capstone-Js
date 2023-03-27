import { $, $$ } from '../utils/basic.js';

const checkLogIn = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    // Show/hide profile in header
    if (user) {
        $$('.header-item a').forEach((ele) => {
            ele.href.split('/').at(-1) == 'profile.html'
                ? ele.style.display = 'block'
                : ele.style.display = 'none';
        });
    } else {
        $$('.header-item a').forEach((ele) => {
            ele.href.split('/').at(-1) == 'profile.html'
                ? ele.style.display = 'none'
                : ele.style.display = 'block';
        });
    }

    return user;
};

export default checkLogIn;