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
var timerElement = document.querySelector("#time");
var correctCheck = document.querySelector("#correctCheck");

let randomQuestion;
let currentQuestion;

var questionCount = 0;
var timerCount;

var questions = [
  {
    question1: "Filler question 1",
    options1: [
      { text: "Filler answer 1", correct: true},
      { text: "Filler answer 2", correct: false},
      { text: "Filler answer 3", correct: false},
      { text: "Filler answer 4", correct: false},
    ],
    // question2: "Filler question 2",
    // options2: [
    //   { text: "Filler answer 1", correct: true},
    //   { text: "Filler answer 2", correct: false},
    //   { text: "Filler answer 3", correct: false},
    //   { text: "Filler answer 4", correct: false},
    // ],
    // question3: "Filler question 3",
    // options3: [
    //   { text: "Filler answer 1", correct: true},
    //   { text: "Filler answer 2", correct: false},
    //   { text: "Filler answer 3", correct: false},
    //   { text: "Filler answer 4", correct: false},
    // ], 
    // question4: "Filler question 4",
    // options4: [
    //   { text: "Filler answer 1", correct: true},
    //   { text: "Filler answer 2", correct: false},
    //   { text: "Filler answer 3", correct: false},
    //   { text: "Filler answer 4", correct: false},
    // ], 
    // question5: "Filler question 5",
    // options5: [
    //   { text: "Filler answer 1", correct: true},
    //   { text: "Filler answer 2", correct: false},
    //   { text: "Filler answer 3", correct: false},
    //   { text: "Filler answer 4", correct: false},
    // ] 
  }
];

function startTest() {
  timerCount = 60;
  startTimer();
  startPrompt.style.display = "none";
  questionArea.style.display = "inline";
  correctCheck.style.display = "none";
 NextQuestion ();
}


// function question1() {
//   question.textContent = "";
//   answer1.textContent = "";
//   answer2.textContent = "Filler answer 2";
//   answer3.textContent = "Filler answer 3";
//   answer4.textContent = "Filler answer 4";
//   checkAnswer1;
// }

// function checkAnswer1() {
//   if (answer1.addEventListener("click")) {
//     console.log("yessir, this answer button theory i got here works");
//     correctCheck.style.display = "inline";
//     correctCheck.textContent = "Correct!";
//   }
// }

function startTimer() {
  timer = setInterval(function () {
    timerCount--;
    timerElement.textContent = "Time: " + timerCount;
    console.log("Beep Boop, if you're reading this, then your button works");
  }, 1000);
}

startButton.addEventListener("click", startTest);
