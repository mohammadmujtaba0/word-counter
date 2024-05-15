#! /usr/bin/env node
import inquirer from "inquirer";
const answers: {
    Sentence: string
} = await inquirer.prompt(
    [
        {
            name:"Sentence",
            type:"input",
            message: "Enter your Sentence to count Word"
        }
    ]
)

const words = answers.Sentence.trim( ).split(" ")
console.log(words)
console.log(`Your Sentence Word Count is ${words.length}`)