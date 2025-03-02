console.log('Задание 1')

function summa(a, b=3) {
  return a + b
}
result = summa(7)
console.log(`Сумма: ${result}`)


console.log('')
console.log('Задание 2')

const numbers = [1, 2, 3, 4, 5]
function calculateSum(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]
  }
  return sum
}
console.log("Сумма элементов массива:", calculateSum(numbers))


console.log('')
console.log('Задание 3')


const students = [
  { name: "Иван", age: 20, course: "Информатика" },
  { name: "Мария", age: 19, course: "Математика" },
  { name: "Петр", age: 21, course: "Физика" },
  { name: "Елена", age: 20, course: "Химия" }
]

function displayStudentInfo(student) {
  console.log(`Имя: ${student.name}, Возраст: ${student.age}, Курс: ${student.course}`);
}

for (let i = 0; i < students.length; i++) {
  displayStudentInfo(students[i])
}


