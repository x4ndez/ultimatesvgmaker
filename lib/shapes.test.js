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

});