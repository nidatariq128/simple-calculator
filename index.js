#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "firstNumber" },
    { message: "Enter second number", type: "number", name: "secondNumber" },
    {
        message: "select one of the opretors to perform action",
        tupe: "list",
        name: "opretor",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"]
    },
]);
if (answer.opretor === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.opretor === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.opretor === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.opretor === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log('pleace select a valid opretor');
}
