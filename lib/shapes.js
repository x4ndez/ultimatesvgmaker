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

    // render() { }

}

class Triangle extends Shape {

    constructor(textValue, textColor, shapeColor) {
        super(textValue, textColor, shapeColor);

        this.points = "250 50, 450 450, 50 450, 250 50";

    }

    render(svgTemplate) {

        // Construct the shape in XML
        let shapeConstructor = `<polyline points="${this.points}" fill="${this.shapeColor}" />`;

        // Return processed svg code
        const svgContent = svgTemplate.templateProcessed(this, shapeConstructor);

        return svgContent;

    }

}

class Rectangle extends Shape {

    constructor(textValue, textColor, shapeColor) {
        super(textValue, textColor, shapeColor);

        this.width = 400;
        this.height = 400;
        this.x = 50;
        this.y = 50;

    }

    render(svgTemplate) {

        // Construct the shape in XML
        let shapeConstructor = `<rect x="${this.x}" y="${this.y}" width="${this.width}" height="${this.height}" fill="${this.shapeColor}" />`;

        // Return processed svg code
        const svgContent = svgTemplate.templateProcessed(this, shapeConstructor);

        return svgContent;

    }

}

class Circle extends Shape {

    constructor(textValue, textColor, shapeColor) {
        super(textValue, textColor, shapeColor);

        this.r = 200;
        this.cx = 250;
        this.cy = 250;

    }

    render(svgTemplate) {

        // Construct the shape in XML
        let shapeConstructor = ``;

        // Return processed svg code
        const svgContent = svgTemplate.templateProcessed(this, shapeConstructor);

        return svgContent;

    }

}

module.exports = {

    Shape,
    Triangle,
    Rectangle,
    Circle,

}