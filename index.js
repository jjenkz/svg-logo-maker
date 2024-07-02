const fs = require("fs");
const inquirer = require("inquirer");
const { Circle, Triangle, Square } = require("./lib/shapes");

const questions = [
  {
    type: "input",
    name: "text",
    message: "Enter text (up to three characters):",
    validate: (input) => input.length <= 3 || "Enter up to 3 characters.",
  },
  {
    type: "input",
    name: "textColor",
    message: "Choose the text's color via keyword or hexadecimal:",
  },
  {
    type: "list",
    name: "shapes",
    message: "Choose a shape to use:",
    choices: ["square", "triangle", "circle"],
  },
  {
    type: "input",
    name: "shapesColor",
    message: "Choose the shape's color via keyword or hexadecimal:",
  },
];

inquirer.prompt(questions).then((answers) => {
  const { text, textColor, shapes, shapesColor } = answers;
  let shapeInstance;

  switch (shapes) {
    case "circle":
      shapeInstance = new Circle(shapesColor);
      break;
    case "triangle":
      shapeInstance = new Triangle(shapesColor);
      break;
    case "square":
      shapeInstance = new Square(shapesColor);
      break;
  }

  const svgContent = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${shapeInstance.render()}
      <text x="150" y="125" font-size="40" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>
  `;

  fs.writeFile("logo.svg", svgContent.trim(), (err) => {
    if (err) {
      console.error("Error writing file:", err);
    } else {
      console.log("Generated logo.svg");
    }
  });
});
