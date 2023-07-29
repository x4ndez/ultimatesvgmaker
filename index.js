const inquirer = require("inquirer");

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

async function initProcess() {

    const promptVal = await prompt();
    console.log(promptVal.textValue);

}

initProcess();