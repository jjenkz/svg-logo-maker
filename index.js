const inquirer = require("inquirer");
const fs = require("fs");

const questions = [
  {
    type: "input",
    name: "text",
    message: "Choose up to three characters:",
  },
  {
    type: "list",
    name: "textColor",
    message: "Choose the text's color:",
    choices: [
      "red",
      "green",
      "yellow",
      "blue",
      "magenta",
      "black",
      "white",
      "cyan",
    ],
  },
  {
    type: "list",
    name: "shapes",
    message: "Choose shapes to use:",
    choices: ["square", "triangle", "circle"],
  },
  {
    type: "list",
    name: "shapesColor",
    message: "Choose the shape's color:",
    choices: [
      "red",
      "green",
      "yellow",
      "blue",
      "magenta",
      "black",
      "white",
      "cyan",
    ],
  },
];

console.log(questions);
