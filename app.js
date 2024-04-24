#! /uns/bin/env node
import inquirer from "inquirer";
let mybalance = 50000;
let mypin = 4444;
let pinAns = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your pin code"
    },
]);
if (pinAns.pin === mypin) {
    console.log("correct pin code");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "select the operation",
            choices: ["withdraw", "check balance", "cash option"]
        }
    ]);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter yout amount"
            }
        ]);
        mybalance -= amountAns.amount;
        if (amountAns.amount > mybalance) {
            console.log("your balance is insufficient");
        }
        else {
            console.log(`your remaining balance is ${mybalance}`);
        }
    }
    else if (operationAns.operation === "check balance") {
        console.log(`your current balance is ${mybalance}`);
    }
    else if (operationAns.operation === "cash option") {
        let cashOption = await inquirer.prompt([
            {
                name: "option",
                type: "list",
                message: "select the payment option",
                choices: [5000, 10000, 20000, 30000, 40000, 50000]
            }
        ]);
        mybalance -= cashOption.option;
        console.log(`your reamining balance is ${mybalance}`);
    }
}
else {
    console.log("you enter wrong pin");
}
