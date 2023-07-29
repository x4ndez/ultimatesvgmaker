function templateProcessed(shape, shapeConstructor) {

    const svgString = `

    <svg width="500" height="500" version="1.1" xmlns="http://www.w3.org/2000/svg">

    ${shapeConstructor}

        <text
            x="250" y="300"
            font-size="100"
            fill="${shape.textColor}"
            font-family="calibri"
            text-anchor="middle"
            dominant-baseline="middle">

            ${shape.textValue}

        </text>

    </svg>

    `;

    return svgString;

}

module.exports = {

    templateProcessed,

}