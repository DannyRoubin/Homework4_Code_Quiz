var header = document.querySelector("heading");
var startPrompt = document.querySelector("article");
var timer = document.querySelector("#time");
var startButton = document.querySelector("#start");
var questionArea = document.querySelector("main");
var question = document.querySelector("#question");
var answer1 = document.querySelector("#answer1");
var answer2 = document.querySelector("#answer2");
var answer3 = document.querySelector("#answer3");
var answer4 = document.querySelector("#answer4");

var questionCount = 0;
var timerCount;



function startTest () {
    startTimer();
    startPrompt.style.display = "none";
    questionArea.style.display = "inline";
    question1();
    question2();
    question3();
    question4();
    question5();
    
}


function startTimer() {
    timer = setInterval(function() {
        timerCount = 60;
        timerCount--;
    timer.textContent = "Time: " + timerCount
})
}

startButton.addEventListener("click", startTest);{
    console.log("Beep Boop, if you're reading this, then your button works");
}