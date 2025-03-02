console.log('Задание 1')

const numbers = [1, 2, 3, 4, 5]
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i])
}

console.log('')
console.log('Задание 2')

const arr = [4, 2, 8, 6, 12, 5, 21, 24, 20, 22, 8, 7, 6, 9]
for (let i = 0; i < arr.length; i++) {
  if(arr[i]>8 && arr[i]<20){
  console.log(arr[i])
  }
}

console.log('')
console.log('Задание 3')

const arrNumbers = [10, 5, 20, 3, 15, 22, 2, 7]

let min = arrNumbers[0]
for (let i = 1; i < arrNumbers.length; i++) {
  if (arrNumbers[i] < min) {
    min = arrNumbers[i];
  }
}
console.log('Минимальное значение:', min)


console.log('')
console.log('Задание 4')

const Array = [10, 5, 20, 3, 15]
Array[2] = 25
console.log(Array)


console.log('')
console.log('Задание 5')

const words = ["apple", "banana", "kiwi", "grapefruit", "orange"]
let longeWord = words[0]
for (let i = 1; i < words.length; i++) {
  if (words[i].length > longeWord.length) {
    longeWord = words[i];
  }
}
console.log("Самое длинное слово:", longeWord)
