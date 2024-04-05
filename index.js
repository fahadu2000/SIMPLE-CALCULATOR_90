#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter your frist number", type: "number", name: "fristNumber" },
    { message: "Enter your second number", type: "number", name: "secondNumber" },
    {
        message: "select one of operators to perform action ",
        type: "list",
        name: "operator",
        choices: ["ADDITION", "SUBTRACTION", "MULTIPLICATION", "DIVISION"],
    },
]);
// conditional statement 
if (answer.operator === "ADDITION") {
    console.log(answer.fristNumber + answer.secondNumber);
}
else if (answer.operator === "SUBTRACTION") {
    console.log(answer.fristNumber - answer.secondNumber);
}
else if (answer.operator === "MULTIPLICATION") {
    console.log(answer.fristNumber * answer.secondNumber);
}
else if (answer.operator === "DIVISION") {
    console.log(answer.fristNumber / answer.secondNumber);
}
else {
    "Please select correct operator";
}
