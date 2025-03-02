console.log('Задание 1');
let firstName = 'Maksym'
let lastName = 'Rechyn'
let greeting = 'Привет, ' + firstName + ' ' + lastName + '!'
console.log(greeting)   

console.log('');
console.log('Задание 2');
let sentencePart1 = 'Я люблю'
let sentencePart2 = 'программирование'
let completeSentence = sentencePart1 + ' ' + sentencePart2
console.log(completeSentence)


console.log(' ');
console.log('Делали на занятиях сегодня 28.01.25');
for (let i = 1; i <= 6; i++) {
    if (i % 2 === 0) {
        continue; 
    }
    console.log(i); 
}
console.log(' ');

for (let i = 1; i <= 10; i++) {
    if (i > 7) {
        break; 
    }
    console.log(i); 
}
console.log(' ');

for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue; 
    }
    console.log(i); 
}
console.log(' ');

for (let i = 10; i >= 1; i--) {
    console.log(i);
}

console.log(' ');
console.log('Таблица умножения');

for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
    console.log(''); 
}
