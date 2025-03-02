const validUsername = "admin"
const validPassword = "password123"

function checkLogin() {
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value
    const message = document.getElementById("message")

      if (username === validUsername && password === validPassword) {
        message.textContent = "Успешная аутентификация!"
        
    } else {
        message.textContent = "Ошибка: Неверный логин или пароль."
        
    }
}



