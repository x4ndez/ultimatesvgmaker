//triangle,circle,square

// Shape >> fill, textVal, textColor
// Triangle >> points="250 50, 450 450, 50 450, 250 50"
// Rectangle >>width, height, x, y
// Circle >> r, cx, cy

class Shape {

    constructor(textVal, textColor, fill) {

        this.fill = fill;
        this.textVal = textVal;
        this.textColor = textColor;

    }

    // render() { }

}

class Triangle extends Shape {

    constructor(textVal, textColor, fill) {
        super(textVal, textColor, fill);

        this.points = "250 50, 450 450, 50 450, 250 50";

    }

}

class Rectangle extends Shape {

    constructor(textVal, textColor, fill) {
        super(textVal, textColor, fill);

        this.width = 400;
        this.height = 400;
        this.x = 50;
        this.y = 50;

    }

}

class Circle extends Shape {

    constructor(textVal, textColor, fill) {
        super(textVal, textColor, fill);

        this.r = 200;
        this.cx = 250;
        this.cy = 250;

    }

}