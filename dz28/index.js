// Задание 1
const colorBlock = document.getElementById('colorBlock')
        
colorBlock.addEventListener('mouseover', () => {
  colorBlock.style.backgroundColor = 'red';
        })
        
        colorBlock.addEventListener('mouseout', () => {
          colorBlock.style.backgroundColor = 'blue';
        })



// Задание 2

let colorBlockSecond = document.getElementById('colorBlockSecond');
        const colorButton = document.getElementById('colorButton');
       
        colorButton.addEventListener('click', () => {
          const randomColor = Math.floor(Math.random()*16777215).toString(16);

            colorBlockSecond.style.backgroundColor = `#${randomColor}`
        })


        

