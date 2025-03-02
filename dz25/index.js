console.log('Задание 1')

const productNumbers = (arr) =>{
  let product = 1
  for(let i=0; i<arr.length; i++){
    product = product*arr[i]
  }
  return product
}
const number = [2, 5, 6, 8, 7, 10]
console.log(productNumbers(number))



console.log('')
console.log('Задание 2')

const numbers = [2, 3, 4, 5, 6];

let sum = 0;
let i = 0;
while (i < numbers.length) {
    sum += numbers[i]
    i++
}
console.log(sum)


