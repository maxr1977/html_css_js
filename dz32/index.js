const button = document.getElementById('click-button')
const counterBlock = document.getElementById('counter-block')
const message = document.getElementById('message')
let counter = 0

button.onclick = function() {
    counter++;
    counterBlock.textContent = counter

    if (counter % 5 === 0) {
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16)
        counterBlock.style.backgroundColor = randomColor
    } else {
        counterBlock.style.backgroundColor = 'lightgray'
    }

    if (counter === 10) {
        message.textContent = 'Поздравляем! Вы достигли 10 кликов!'
    }
}
