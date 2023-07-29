const inquirer = require("inquirer");
const shapes = require("./lib/shapes.js");
const svgTemplate = require("./lib/svg.template.js");

function prompt() {

    const promptVal = inquirer
        .prompt([

            {
                type: "input",
                message: "Please type in text up to 3 characters that will be displayed in the SVG...",
                name: "textValue",
                // Throw an error if input is not between 1-3 characters.
                validate: async (input) => {

                    await this;

                    if (input.length <= 3 && input.length > 0) return true;
                    else throw new Error("Please make your text up to 3 characters.");

                },
            },

            {
                type: "input",
                message: "Please choose a text color; it can be a generic color or a HEX color...",
                name: "textColor",
            },

            {
                type: "list",
                message: "Please choose a shape: Circle, Square or Triangle...",
                choices: [

                    "Circle",
                    "Square",
                    "Triangle"

                ],
                name: "shapeType",
            },

            {
                type: "input",
                message: "Please choose a shape color; it can be a generic color or a HEX color...",
                name: "shapeColor",
            }

        ])
        .catch((err) => console.log(err));

    return promptVal;

}

function processPrompt(promptVal) {

    let objectType;
    const { textValue, textColor, shapeType, shapeColor } = promptVal;

    if (shapeType === "Triangle") {

        objectType = new shapes.Triangle(textValue, textColor, shapeColor);

    } else if (shapeType === "Square") {

        objectType = new shapes.Rectangle(textValue, textColor, shapeColor);

    } else if (shapeType === "Circle") {

        objectType = new shapes.Circle(textValue, textColor, shapeColor);

    }

    return objectType;

}

async function initProcess() {

    // Prompt user input
    const promptVal = await prompt();
    console.log("Data Received!");

    // Process the input, return an object depending on the shape the user selected.
    const shape = processPrompt(promptVal);
    console.log("Shape created!");

    // Render an SVG
    shape.render(svgTemplate);

    // Output SVG into an SVG file


}

initProcess();