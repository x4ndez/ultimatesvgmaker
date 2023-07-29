const svgTemplate = `

<svg width="500" height="500" version="1.1" xmlns="http://www.w3.org/2000/svg">

    ${shape}

    <text
        x="250" y="300"
        font-size="100"
        fill="black"
        font-family="calibri"
        text-anchor="middle"
        dominant-baseline="middle">

        ${textValue}

    </text>

</svg>

`;

module.exports = {

    svgTemplate,

}