console.log('Задание 1')

const movies = [
  { title: "Inception", year: 2010 },
  { title: "The Dark Knight", year: 2008 },
  { title: "Interstellar", year: 2014 },
  { title: "The Matrix", year: 1999 }
]

movies.sort((a, b) => a.year - b.year)
console.log(movies)




console.log('')
console.log('Задание 2')

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 22 }
]

const allNames = people.reduce((accumulator, currentValue, index) => {
  return index === 0 ? currentValue.name : accumulator + ", " + currentValue.name
}, "")

console.log(allNames)


