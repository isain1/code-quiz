var introEl = document.getElementById("intro");
var startBtnEl = document.getElementById("start-btn");
var questionPromptEl = document.getElementById("question-prompt");
var answer1El = document.getElementById("answer-1");
var answer2El = document.getElementById("answer-2");
var answer3El = document.getElementById("answer-3");
var answer4El = document.getElementById("answer-4");
var resultsEl = document.getElementById("results");
var postGameEl = document.getElementById("post-game");
var timeLeftEl = document.getElementById("time-left");
var playerInitialsEl = document.getElementById("player-initials");
var submitInitialsEl = document.getElementById("submit-initials");
var highjScoresPageEl = document.getElementById("high-scores-page");
var restartEl = document.getElementById("restart");
var clearHighScoresEl = document.getElementById("clear-high-scores");
var answerConfirmation = document.getElementById("answer-confirmation");



let questions = [{
    question: "Arrays in JavaScript can be used to store which of the following?",
    option1: "Variables",
    option2: "Numbers",
    option3: "Strings",
    option4: "All of the above"},
  {
    question: "What does HTML stand for?",
    option1: "HyperText Madeup Language",
    option2: "Hypertext Markup Language",
    option3: "HyperTell Markup Language",
    option4: "HyperTall Madeup Language"}, 
  {
    question: "The condition in an If / else statement is enclosed with _________",
    option1: "Curly brackets",
    option2: "Quotes",
    option3: "Square brackets",
    option4: "Parentheses"},
  {
    Question: "What is the variable naming convention used in JavaScript called?",
    option1: "camelCase",
    option2: "snake_case",
    option3: "Cobra_Case",
    option4: "PascalCase"},
  {
    question: "Which line of javaScript code will generate a random number in between 1 and any integer n?",
    option1: "Math.random() * n + 1",
    option2: "Math.random(1,n)",
    option3: "Math.floor(Math.random() * n) + 1",
    option4: "Math.floor(Math.random(n)"},
]  



startBtnEl.addEventListener("click", initializeGame());




function initializeGame() {
    randomQuizQuestion(); //gives random quiz question
    //
}


function algorithm(input) {
    const myArray = text.split(input);
    console.log(myArray);
}
algorithm("how do i get started")