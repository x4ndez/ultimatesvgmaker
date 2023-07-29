const reqClass = require("./shapes.js");

describe("Shape.test", () => {

    describe("Instantiate classes", () => {

        const classes = [reqClass.Shape, reqClass.Rectangle, reqClass.Circle, reqClass.Triangle];

        for (const item of classes) {

            it(`should be an instance of ${item}`, () => {
                expect(new item()).toBeInstanceOf(item);
            });

        }

    });

    describe("Testing of shape.render()", () => {

        // const classes = [reqClass.Shape, reqClass.Rectangle, reqClass.Circle, reqClass.Triangle];

        it(`should set the color properly when using the render() function for Rectangle`, () => {

            const shape = new reqClass.Rectangle;
            shape.shapeColor = "blue";

            expect(shape.render()).toBe(`<rect x="50" y="0" width="200" height="200" fill="blue" />`);

        });

        it(`should set the color properly when using the render() function for Circle`, () => {

            const shape = new reqClass.Circle;
            shape.shapeColor = "blue";

            expect(shape.render()).toBe(`<circle cx="150" cy="100" r="100" fill="blue" />`);

        });

        it(`should set the color properly when using the render() function for Triangle`, () => {

            const shape = new reqClass.Triangle;
            shape.shapeColor = "blue";

            expect(shape.render()).toBe(`<polyline points="150 0, 250 200, 50 200, 150 0" fill="blue" />`);

        });

    });

});