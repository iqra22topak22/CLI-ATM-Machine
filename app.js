#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const chalk_1 = __importDefault(require("chalk"));
// Initial user blance  and pin code 
let myBlance = 50000;
let myPin = 123;
// peient welcome message
console.log(chalk_1.default.blueBright("Welcome to Iqra ATM - Machine"));
let pinAwer = await inquirer_1.default.prompt([
    {
        name: "pin",
        type: "number",
        message: chalk_1.default.yellow("enter your pin code:")
    }
]);
if (pinAwer.pin === myPin) {
    console.log("pin is correct , login successfully");
    //console.log(current amount blance is${myblance})
    let operationAns = await inquirer_1.default.prompt([
        {
            name: "operation",
            type: "list",
            message: "select an operation",
            choices: ["withdraw Amount", "check Blance"]
        }
    ]);
    if (operationAns.operation === "withdraw Amount") {
        let withdrawAns = await inquirer_1.default.prompt([
            {
                name: "withdrawMethod",
                type: "list",
                message: "select a withdraw method:",
                choices: ["fast Cash", "enter Amount"]
            }
        ]);
        if (withdrawAns.withdrawMethod === "fast Cash") {
            let fastCashAns = await inquirer_1.default.prompt([
                {
                    name: "fastCash",
                    type: "list",
                    message: "select Amount",
                    choices: [1000, 2000, 3000, 5000, 7000, 10000, 15000, 20000, 40000]
                }
            ]);
            if (fastCashAns.fastCash > myBlance) {
                console.log("insufficient Blance");
            }
            else {
                myBlance -= fastCashAns.fastCash;
                console.log(`${fastCashAns.fastCash} withdraw successfully`);
                console.log(`your renaining Blance: ${myBlance}`);
            }
        }
        else if (withdrawAns.withdrawMethod === "enter Amount") {
            let amountAns = await inquirer_1.default.prompt([
                {
                    name: "amount",
                    type: "number",
                    message: "enter the amount to withdraw"
                }
            ]);
            if (amountAns.amount > myBlance) {
                console.log(chalk_1.default.red("insufficient  Blance"));
            }
            else {
                myBlance -= amountAns.amount;
                console.log(`${amountAns.amount}withdraw successfuly`);
                console.log(`your remaining Blance is: ${myBlance}`);
            }
        }
    }
    else if (operationAns.operation === "check Blance") {
        console.log(`your remaining Blance is: ${myBlance}`);
    }
}
else {
    console.log(chalk_1.default.red("pin is incorrect, Try Againg"));
}
