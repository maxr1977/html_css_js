const root = document.getElementById('root')
let sliderIndex = 0

const images = [
  'https://www.vinterier.ru/pictures/shop/krasivyiy-peiyzag-kartina-maslom-40x30.jpg',
  'https://kartin.papik.pro/uploads/posts/2023-07/thumbs/1688461053_kartin-papik-pro-p-kartinki-priroda-leto-krasivie-v-khoroshem-56.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Altdorfer-Donau.jpg/220px-Altdorfer-Donau.jpg',
  'https://images.ctfassets.net/hrltx12pl8hq/a2hkMAaruSQ8haQZ4rBL9/8ff4a6f289b9ca3f4e6474f29793a74a/nature-image-for-website.jpg?fit=fill&w=600&h=400',
]

const frame = document.createElement('div')
const cards = document.createElement('div')

frame.classList.add('frame')
cards.classList.add('cards')

for (let i = 0; i < images.length; i++) {
  const card = document.createElement('div')
  card.classList.add('card')
  card.style.backgroundImage = `url(${images[i]})`
  cards.append(card)
}
frame.append(cards)
root.append(frame)

let roundsContainer

function createRounds() {
  const container = document.createElement('div')
  container.classList.add('rounds')
  roundsContainer = container

  for (let i = 0; i < images.length; i++) {
    const button = document.createElement('button')
    container.append(button)
    button.addEventListener('click', function () {
      sliderIndex = i
      cards.style.left = `${-1 * sliderIndex * 500}px`

      updateActiveRoundButton()
    })
  }

  frame.append(container)
}

function updateActiveRoundButton() {
  if (roundsContainer) {
    const allButtons = roundsContainer.children
    for (let j = 0; j < allButtons.length; j++) {
      allButtons[j].classList.remove('active')
    }
    allButtons[sliderIndex].classList.add('active')
  }
}

function goLeft() {
  if (sliderIndex !== 0) {
    sliderIndex-- //sliderIndex = sliderIndex-1
    cards.style.left = `${-1 * sliderIndex * 500}px`
    updateActiveRoundButton()
  }
}
function goRight() {
  if (sliderIndex < images.length -1) {
    sliderIndex++ //sliderIndex = sliderIndex+1
    cards.style.left = `${-1 * sliderIndex * 500}px`
    updateActiveRoundButton()
  }
}
const triggers = document.createElement('div')
const leftBtn = document.createElement('button')
const rightBtn = document.createElement('button')

leftBtn.textContent = '<'
rightBtn.textContent = '>'

triggers.classList.add('trigger')
triggers.append(leftBtn, rightBtn)
frame.prepend(triggers)

leftBtn.addEventListener('click', goLeft)
rightBtn.addEventListener('click', goRight)

createRounds()
updateActiveRoundButton()