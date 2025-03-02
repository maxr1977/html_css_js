const inputName = document.querySelector(".name");
const inputPhoneNumber = document.querySelector(".phone");
const inputEmail = document.querySelector(".email");
const inputPassword = document.querySelector(".password");
const signUpBtn = document.querySelector(".signup");
const requiredPar = document.createElement("p");
const body = document.querySelector("body");

const users = localStorage.getItem("users")
  ? JSON.parse(localStorage.getItem("users"))
  : [];

signUpBtn.addEventListener("click", () => {
  if (!validateName(inputName.value)) {
    requiredPar.innerText = "Имя должно содержать от 2 до 24 букв";
    requiredPar.style.color = "red";
  } else if (!validatePhone(inputPhoneNumber.value)) {
    requiredPar.innerText = "Телефон должен начинаться с + и содержать от 8 до 12 цифр";
    requiredPar.style.color = "red";
  } else if (!validateEmail(inputEmail.value)) {
    requiredPar.innerText = "Некорректный email";
    requiredPar.style.color = "red";
  } else if (!validatePassword(inputPassword.value)) {
    requiredPar.innerText = "Пароль должен быть от 5 до 26 символов";
    requiredPar.style.color = "red";
  } else {
    let isError = false;
    for (let i = 0; i < users.length; i++) {
      if (users[i].email === inputEmail.value) {
        isError = true;
      }
    }
    if (isError) {
      requiredPar.innerText = "Пользователь с такой почтой уже существует!";
      requiredPar.style.color = "red";
    } else {
      const userData = {
        name: inputName.value,
        phoneNumber: inputPhoneNumber.value,
        email: inputEmail.value,
        password: inputPassword.value,
      };
      users.push(userData);
      localStorage.setItem("users", JSON.stringify(users));
      inputName.value = "";
      inputPhoneNumber.value = "";
      inputEmail.value = "";
      inputPassword.value = "";
      requiredPar.innerText = "Вы успешно зарегистрировались";
      requiredPar.style.color = "green";
    }
  }
  document.body.appendChild(requiredPar);
});

const loginInputEmail = document.querySelector(".emailLogin");
const loginInputPassword = document.querySelector(".passwordLogin");
const loginBtn = document.querySelector(".login");

loginBtn.addEventListener("click", () => {
  let isLoginError = true;
  for (let i = 0; i < users.length; i++) {
    if (
      loginInputEmail.value === users[i].email &&
      loginInputPassword.value === users[i].password
    ) {
      isLoginError = false;
    }
  }
  if (isLoginError) {
    if (loginInputEmail.value === "" || loginInputPassword.value === "") {
      requiredPar.innerText = "Необходимо заполнить все поля";
      requiredPar.style.color = "red";
    } else {
      requiredPar.innerText = "Вы ввели неверную почту или пароль";
      requiredPar.style.color = "red";
    }
  } else {
    loginInputEmail.value = "";
    loginInputPassword.value = "";
    requiredPar.innerText = "Вы успешно вошли";
    requiredPar.style.color = "green";
    body.innerHTML = "";
    const btnLogout = document.createElement("button");
    btnLogout.innerText = "Logout";
    body.append(btnLogout);
  }
  document.body.appendChild(requiredPar);
});

function validateName(name) {
  const nameRegex = /^[A-Za-zА-Яа-я]{2,24}$/;
  return nameRegex.test(name);
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return email.length >= 7 && emailRegex.test(email);
}

function validatePhone(phone) {
  const phoneRegex = /^\+\d{7,11}$/;
  return phoneRegex.test(phone);
}

function validatePassword(password) {
  return password.length >= 5 && password.length <= 26;
}