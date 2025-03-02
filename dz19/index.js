console.log('Задание 1')
let grade = 60
if (grade > 100){
    console.log('Недопустимое количество балов. Введите число от 0 до 100')
} else if (grade >=90) {
    console.log('Оценка: A')
} else if (grade >=80) {
    console.log('Оценка: B')
} else if (grade >=70) {
    console.log('Оценка: C')
} else if (grade >=60) {
    console.log('Оценка: D')
} else if (grade >=0) {
    console.log('Оценка: F')
} else {
    console.log('Недопустимое значение. Введите число от 0 до 100') 
}
console.log('')

console.log('Задание 2')
let dayOfWeek = 4 

switch (dayOfWeek) {
  case 1:
    console.log("Понедельник")
    break
  case 2:
    console.log("Вторник")
    break
  case 3:
    console.log("Среда")
    break
  case 4:
    console.log("Четверг")
    break
  case 5:
    console.log("Пятница")
    break
  case 6:
    console.log("Суббота")
    break
  case 7:
    console.log("Воскресенье")
    break
  default:
    console.log("Некорректное значение дня недели")
}