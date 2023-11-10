console.log("main.js loaded...");

let text = document.querySelector('.show-text');
let text1 = document.querySelector('.show-text1');
let text2 = document.querySelector('.show-text2');

let earnings = 2000;
let raise = 0.05;

let answer = earnings * raise;

text.textContent = answer;

//Opdracht 2

let price = 400000;
let interest = 0.025;

let answer1 = price * interest;

text1.textContent = answer1;

//opdracht 3

let price1 = 100
let btw = 1.21

let answer2 = price1 * btw;

text2.textContent = answer2;

//opdracht 4


let myName = prompt("type student")

if (myName == "student") {
    console.log("You are a student");

}
else {
    console.log("You are crazy")
}

//opdracht 5
