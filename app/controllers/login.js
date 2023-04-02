import { $, $$, setCartsQty, backToTop, checkLogIn, hoverLineMenu } from '../utils/basic.js';
import { logInApi } from '../services/api.js';
import Validation from '../models/Validation.js';
import User from '../models/User.js';

// Xử lý đăng nhập
const handleLogIn = async (e) => {
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
        window.location.replace('../../index.html');
    } else {
        $$('.input-focus-effect.login div:first-child').forEach(item => item.innerHTML = 'Thông tin không chính xác');
    }
};

window.onload = async () => {
    checkLogIn();
    hoverLineMenu();
    setCartsQty();
    backToTop();

    $(".btn-register.login").addEventListener('click', handleLogIn);
};