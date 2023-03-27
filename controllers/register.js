import Validation from '/models/Validation.js';
import { getRegister } from '/models/api.js';

//hover line menu
const links = [...document.querySelectorAll(".menu-link")];
links.forEach((item) => item.addEventListener("mouseenter", handleHoveerLine));
const line = document.createElement("div");
line.className = "line-effect";
document.body.appendChild(line);
function handleHoveerLine(e) {
  const { left, width, top, height } = e.target.getBoundingClientRect();
  line.style.width = `${width}px`;
  line.style.left = `${left}px`;
  line.style.top = `${top + height + 5}px`;
}
const menu = document.querySelector(".menu");
menu.addEventListener("mouseleave", function () {
<<<<<<< HEAD
  line.style.width = 0 ;
});


=======
  line.style.width = 0;
});
>>>>>>> 11f7979164cc4f3641852f4bbe2b6484fde131b1
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

<<<<<<< HEAD
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
 if( getRegister(register)){
  form.reset();
  [...span].forEach(item => item.innerHTML= '');
 }
  // getRegister(register);
  
  
};
=======
let register = [
  email = "",
  password = "",
  name = "",
  gender = "",
  phone = ""
];

var check = new Validation();
const from = document.querySelector('#from');
document.querySelector(".btn-register").onclick = function (e) {
  e.preventDefault();
  register.email = document.getElementById("email").value;
  register.password = document.getElementById("password").value;
  register.name = document.getElementById("name").value;
  register.gender = getInfo(mala);
  register.phone = document.getElementById("phone").value;

  const passwordConfirm = document.getElementById("password1").value;

  var valid = true;
  valid = check.checkEmail(register.email, '.error-email', '.icon-email');
  valid = check.checkPassword(register.password, '.error-password', '.icon-password');
  valid = check.checkName(register.name, '.error-name', '.icon-name');
  valid = check.checkPhone(register.phone, '.error-phone', '.icon-phone');
  valid = check.checkGender(register.gender, '.error');
  if (passwordConfirm != register.password) {
    document.querySelector(".error-password1").innerHTML = `Mật khẩu không khớp !`;
    return;
  } else {
    document.querySelector(".error-password1").innerHTML = " ";
    document.querySelector('.icon-password1').innerHTML = `<i class="fa-solid fa-check"></i>`;
  }
  if (!valid) {
    return;
  }
  getRegister(register);

};

>>>>>>> 11f7979164cc4f3641852f4bbe2b6484fde131b1
