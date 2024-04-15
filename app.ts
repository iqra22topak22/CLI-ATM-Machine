#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

// Initial user blance  and pin code 
let myBlance = 50000;
let myPin =123;

// peient welcome message

console.log(chalk.blueBright("Welcome to Iqra ATM - Machine"));

let pinAwer = await inquirer.prompt([
    {
        name: "pin",
        type:"number",
        message:chalk.yellow("enter your pin code:")
    }
])
if(pinAwer.pin === myPin){
    console.log("pin is correct , login successfully");
    //console.log(current amount blance is${myblance})
    let operationAns =await inquirer.prompt([
        {
            name : "operation",
            type: "list",
            message: "select an operation",
            choices: ["withdraw Amount", "check Blance"]

        }
    ])
    if(operationAns.operation === "withdraw Amount"){
        let withdrawAns =await inquirer.prompt([
            {
                name: "withdrawMethod",
                type: "list",
                message: "select a withdraw method:",
                choices: ["fast Cash" ,"enter Amount"]
            }
        ])
        if(withdrawAns.withdrawMethod === "fast Cash"){
            let fastCashAns = await inquirer.prompt([
                {
                    name: "fastCash",
                    type: "list",
                    message: "select Amount",
                    choices: [1000 ,2000, 3000, 5000, 7000,10000,15000,20000,40000]
                }
            ])
            if (fastCashAns.fastCash > myBlance){
                console.log("insufficient Blance");
            }
            else{
                myBlance -= fastCashAns.fastCash
                console.log(`${fastCashAns.fastCash} withdraw successfully`);
                console.log(`your renaining Blance: ${myBlance}`);
            }
        }
        else if (withdrawAns.withdrawMethod === "enter Amount"){
            let amountAns =await inquirer.prompt([
                {
                    name: "amount",
                    type: "number",
                    message: "enter the amount to withdraw"
                }
            ])
            if(amountAns.amount > myBlance){
                console.log(chalk.red("insufficient  Blance"));
            }
            else{
                myBlance -=amountAns .amount;
                console.log(`${amountAns.amount}withdraw successfuly`);
                console.log(`your remaining Blance is: ${myBlance}`);
            }
        }
    }
    else if(operationAns.operation ==="check Blance"){
        console.log(`your remaining Blance is: ${myBlance}`);
    }
}
else {
    console.log(chalk.red("pin is incorrect, Try Againg"));
}


