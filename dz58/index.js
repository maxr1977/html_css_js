 const canvas = document.getElementById('canvas'); 
const ctx = canvas.getContext('2d'); 

const colors = ['#ff0000', '#00ff00', '#0000ff'];

function changeColor() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)]; 
    ctx.fillStyle = randomColor; 
    ctx.fillRect(50, 50, 300, 100); 
}

changeColor();

setInterval(changeColor, 1000);