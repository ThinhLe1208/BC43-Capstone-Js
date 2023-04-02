import Validation from '../models/Validation.js';
import { hoverLineMenu, backToTop } from '../utils/basic.js';
import { getRegister } from '../services/api.js';

//hover line menu
hoverLineMenu();
backToTop();

// value gender
const mala = document.getElementsByName("type");
function getInfo(mala) {
  let gender = "";
  for (let index = 0; index < mala.length; index++) {
    if (mala[index].checked == true) {
      gender = mala[index].value;
    }
  }
  return gender;
}

// function Getregister(){
//   this.email= "",
//   this.password= "",
//   this.name= "",
//   this.gender= "",
//   this.phone= ""
// }

//get info

let register = {
  email: "",
  password: "",
  name: "",
  gender: "",
  phone: "",
};

var check = new Validation();
const from = document.getElementById("form"), span = document.querySelectorAll('.input-focus-effect span');
document.querySelector(".btn-register").onclick = function (e) {
  e.preventDefault();
  register.email = document.getElementById("email").value;
  register.password = document.getElementById("password").value;
  register.name = document.getElementById("name").value;
  register.gender = getInfo(mala);
  register.phone = document.getElementById("phone").value;

  const passwordConfirm = document.getElementById("password1").value;

  var valid = false;
  valid =
    check.checkEmail(register.email, ".error-email", ".icon-email") &
    check.checkPassword(
      register.password,
      ".error-password",
      ".icon-password"
    ) &
    check.checkName(register.name, ".error-name", ".icon-name") &
    check.checkPhone(register.phone, ".error-phone", ".icon-phone") &
    check.checkGender(register.gender, ".error");
  if (passwordConfirm != register.password) {
    document.querySelector(
      ".error-password1"
    ).innerHTML = `Mật khẩu không khớp !`;
    document.querySelector(
      ".icon-password1"
    ).innerHTML = '';
    return;
  } else {
    document.querySelector(".error-password1").innerHTML = " ";
    document.querySelector(
      ".icon-password1"
    ).innerHTML = `<i class="fa-solid fa-check"></i>`;
  }
  if (!valid) {
    return;
  }
  if (getRegister(register)) {
    form.reset();
    [...span].forEach(item => item.innerHTML = '');
  }
  // getRegister(register);


};
