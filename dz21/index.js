console.log('Задание 1')
const person = {
  name: 'Maksym',
  age: 47
}
console.log(`Имя: ${person.name}, Возраст: ${person.age}`)

console.log('')
console.log('Задание 2')

let books = []
  books[0] = {
    title: 'Война и мир',
    author: 'Лев Толстой'
  },
    books[1] = {
    title: 'Преступление и наказание',
    author: 'Федор Достоевский'
  },
    books[2] = {
    title: 'Мастер и Маргарита',
    author: 'Михаил Булгаков'
  }

for (let i = 0; i < books.length; i++) {
   console.log(`${books[i].author}: ${books[i].title}`)
}

console.log('')
console.log('Задание 3')

const rectangle = { a: 10, b: 35 }
rectangle.s = rectangle.a * rectangle.b
rectangle.p = 2 * (rectangle.a + rectangle.b)
console.log(rectangle)


console.log('')
console.log('Задание 4')

const fruits = [
  { name: "Яблоко", color: "красный" },
  { name: "Банан", color: "желтый" },
  { name: "Клубника", color: "красный" },
  { name: "Виноград", color: "зеленый" },
  { name: "Малина", color: "красный" }
]

let redFruits = new Array(0)

for (let i = 0; i < fruits.length; i++) {
  if (fruits[i].color === "красный") {
    redFruits[redFruits.length] = fruits[i]
  }
}
for (let j = 0; j < redFruits.length; j++) {
  console.log(redFruits[j].name);
}

console.log('')
console.log('Задание 5')

const playlist = {
  name: "Мой плейлист",
  songs: [
    {
      title: "Песня 1",
      artist: "Исполнитель 1",
      duration: "3:20"
    },
    {
      title: "Песня 2",
      artist: "Исполнитель 2",
      duration: "4:15"
    },
    {
      title: "Песня 3",
      artist: "Исполнитель 3",
      duration: "2:55"
    }
  ]
}

for (let i = 0; i < playlist.songs.length; i++) {
  const song = playlist.songs[i]
  console.log(`Название: ${song.title}, Исполнитель: ${song.artist}, Длительность: ${song.duration}`)
}
