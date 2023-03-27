import Validation from '../models/Validation.js';
import hoverLineMenu from '../utils/hoverLineMenu.js';
import { $, $$ } from '../utils/basic.js';
import { signIn } from '../services/api.js';

//hover line menu
hoverLineMenu();

$(".btn-register.login").onclick = async (e) => {
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
    const data = await signIn(login);
    if (data) {
        const { accessToken, email } = data;
        const user = {
            accessToken,
            email
        };
        const json = JSON.stringify(user);

        localStorage.setItem('user', json);
        window.location.replace('../views/index.html');
        $$('.input-focus-effect.login div:first-child').forEach(item => item.innerHTML = '');
    } else {
        $$('.input-focus-effect.login div:first-child').forEach(item => item.innerHTML = 'Thông tin không chính xác');
    }

};