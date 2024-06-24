#! /usr/bin/env node
import inquirer from "inquirer"

const quiz: {
    question_1: string;
    question_2: string;
    question_3: string;

} = await inquirer.prompt(
    [
        {
            name: "question_1",
        type: "list",
        message: "Q1.What is the largest lake in the world?",
        choices: ["Capian sea", "Baikal", "Lake superior", "Ontario"]
        },
        {
            name: "question_2",
            type: "list",
            message: "who wrote the novel `Wae and Peace?`",
            choices: ["a.Anton Chekov","b.Fyodor Dostoevsky","c.Leo Tolstoy", "d.Ivan Turgenev"]
        },
        {
            name: "question_3",
            type: "list",
            message: "which river longest in the world?",
            choices: ["a.Amazone", "b.Mississippi", "c.Nile" , "Yangtze"]
        }
    ]
);

let score: number = 0;

switch(quiz.question_1) {
    case "Baikal":
        console.log("1. Correct!");
        ++score;
        break;
        default:
            console.log("1. Incorrect!");
};

switch(quiz.question_2) {
    case "Leo Tolstoy":
        console.log("2. Correct!");
        ++score;
        break;
        default:
            console.log("2. Incorrect!");
};


switch(quiz.question_3) {
    case "Leo Tolstoy":
        console.log("3. Correct!");
        ++score;
        break;
        default:
            console.log("3. Incorrect!");
}

console.log(`Score: ${score}`);