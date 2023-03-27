function Validation() {
  this.checkEmail = (value, error, icon) => {
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (value.trim() === "") {
      document.querySelector(error).innerHTML = `Vui lòng nhập email !`;
      return false;
    } else if (value.trim().match(pattern)) {
      document.querySelector(icon).innerHTML = `<i class="fa-solid fa-check"></i>`;
      document.querySelector(error).innerHTML = '';
      return true;
    } else {
      document.querySelector(error).innerHTML = `Email sai <i class="fa-solid fa-xmark"></i>`;
      return false;
    }
  };
  this.checkPassword = (value, error, icon) => {
    let pattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (value.trim() === "") {
      document.querySelector(error).innerHTML = `Vui lòng nhập Mật khẩu !`;
      return false;
    } else if (value.trim().match(pattern)) {
      document.querySelector(icon).innerHTML = `<i class="fa-solid fa-check"></i>`;
      document.querySelector(error).innerHTML = '';
      return true;
    } else {
      document.querySelector(error).innerHTML = `Mật khẩu phải chứa ít nhất 8 ký tự, bao gồm một chữ cái và một số.`;
      return false;
    }
  };
  this.checkPhone = (value, error, icon) => {
    let pattern = /^\d{10}$/;
    if (value.trim() === "") {
      document.querySelector(error).innerHTML = `Vui lòng nhập số Phone !`;
      return false;
    } else if (value.match(pattern)) {
      document.querySelector(icon).innerHTML = `<i class="fa-solid fa-check"></i>`;
      document.querySelector(error).innerHTML = '';
      return true;
    } else {
      document.querySelector(error).innerHTML = `Vui lòng nhập số điện thoại gồm 10 chữ số.`;
      return false;
    }
  };
  this.checkName = (value, error, icon) => {
    let pattern = /^[A-Z a-z]+$/;
    if (value.trim() === "") {
      document.querySelector(error).innerHTML = `Vui lòng nhập họ tên !`;
      return false;
    } else if (value.trim().match(pattern)) {
      document.querySelector(icon).innerHTML = `<i class="fa-solid fa-check"></i>`;
      document.querySelector(error).innerHTML = '';
      return true;
    } else {
      document.querySelector(error).innerHTML = `Vui lòng nhập chỉ nhập ký tự !`;
      return false;
    }
  };
  this.checkGender = (value, error) => {
    if (value === '') {
      document.querySelector(error).innerHTML = `Vui lòng chọn trường này!`;
      return false;
    } else {
      document.querySelector(error).innerHTML = '';
      return true;
    }
  };
};

export default Validation;