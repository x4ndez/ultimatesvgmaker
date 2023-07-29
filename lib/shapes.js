//triangle,circle,square

// Shape >> shapeColor, textValue, textColor
// Triangle >> points="250 50, 450 450, 50 450, 250 50"
// Rectangle >>width, height, x, y
// Circle >> r, cx, cy

class Shape {

    constructor(textValue, textColor, shapeColor) {

        this.shapeColor = shapeColor;
        this.textValue = textValue;
        this.textColor = textColor;

    }

}

class Triangle extends Shape {

    constructor(textValue, textColor, shapeColor) {
        super(textValue, textColor, shapeColor);

        this.points = "150 0, 250 200, 50 200, 150 0";

    }

    render() {

        // Construct the shape in XML
        return `<polyline points="${this.points}" fill="${this.shapeColor}" />`;

    }

}

class Rectangle extends Shape {

    constructor(textValue, textColor, shapeColor) {
        super(textValue, textColor, shapeColor);

        this.width = 200;
        this.height = 200;
        this.x = 50;
        this.y = 0;

    }

    render() {

        // Construct the shape in XML
        return `<rect x="${this.x}" y="${this.y}" width="${this.width}" height="${this.height}" fill="${this.shapeColor}" />`;

    }

}

class Circle extends Shape {

    constructor(textValue, textColor, shapeColor) {
        super(textValue, textColor, shapeColor);

        this.r = 100;
        this.cx = 150;
        this.cy = 100;

    }

    render() {

        // Construct the shape in XML
        return `<circle cx="${this.cx}" cy="${this.cy}" r="${this.r}" fill="${this.shapeColor}" />`;

    }

}

module.exports = {

    Shape,
    Triangle,
    Rectangle,
    Circle,

}