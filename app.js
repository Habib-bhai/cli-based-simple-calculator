#! usr/bin/env node
import inquirer from "inquirer";
//await means to wait untill the operation after that "await" is being done.
const answer = await inquirer.prompt([{ message: "enter first number", type: "number", name: "firstNumber" },
    { message: "Enter second number", type: "number", name: "secondNumber" },
    { message: "select one of the operator to perform operation", type: "list", name: "operator", choices: ["addition", "subtraction", "multiplication", "division"] }]);
if (answer.operator === "addition") {
    console.log(`your value is ${answer.firstNumber + answer.secondNumber}`);
}
else if (answer.operator === "subtraction") {
    console.log(`your value is ${answer.firstNumber - answer.secondNumber}`);
}
else if (answer.operator === "multiplication") {
    console.log(`your value is ${answer.firstNumber * answer.secondNumber}`);
}
else if (answer.operator === "division") {
    console.log(`your value is ${answer.firstNumber / answer.secondNumber}`);
}
else {
    console.log("you have entered a wrong operator");
}
