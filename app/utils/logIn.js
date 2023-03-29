import Validation from '../models/Validation.js';
import User from '../models/User.js';
import { $, $$ } from '../utils/basic.js';
import { logInApi } from '../services/api.js';

export const handleLogIn = async (e) => {
    e.preventDefault();

    // Check Form Validation
    const check = new Validation();
    const login = {
        email: $("#email-login").value,
        password: $("#password-login").value,
    };
    let valid = false;

    valid = check.checkEmail(login.email, ".error-email", ".icon-email");
    // & check.checkPassword(login.password,".error-password",".icon-password");

    if (!valid) {
        return;
    } else {
        $("#form-login").reset();
        $$('.input-focus-effect.login span').forEach(item => item.innerHTML = '');
    }

    // Call API
    const data = await logInApi(login);
    if (data) {
        const user = new User;
        Object.assign(user, data);
        user.setLocalStorage();

        $$('.input-focus-effect.login div:first-child').forEach(item => item.innerHTML = '');
        window.location.replace('../views/index.html');
    } else {
        $$('.input-focus-effect.login div:first-child').forEach(item => item.innerHTML = 'Thông tin không chính xác');
    }
};

export const handleLogOut = () => {
    new User().removeLocalStorage();
    window.location.replace('../views/index.html');
};

export const checkLogIn = () => {
    const user = User.getLocalStorage();

    // Show/hide profile in header
    if (user) {
        $$('.header-item > a').forEach((ele) => {
            ele.href.split('/').at(-1) == 'profile.html'
                ? ele.style.display = 'block'
                : ele.style.display = 'none';
        });
    } else {
        $$('.header-item > a').forEach((ele) => {
            ele.href.split('/').at(-1) == 'profile.html'
                ? ele.style.display = 'none'
                : ele.style.display = 'block';
        });
    }

    return user;
};