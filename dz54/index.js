class Shape {
    draw() {
        console.log("Shape");
    }
}

class Rectangle extends Shape {
    draw() {
        console.log("Rectangle");
    }
}

class Circle extends Shape {
    draw() {
        console.log("Circle");
    }
}

const shapes = [
    new Rectangle(),
    new Circle()
];

shapes.forEach(shape => shape.draw());

