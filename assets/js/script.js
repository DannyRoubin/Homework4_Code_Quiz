var header = document.querySelector("heading");
var startPrompt = document.querySelector("article");
var timer = document.querySelector("#time");
var startButton = document.querySelector("#start");
var questionArea = document.querySelector("main");
var questionEL = document.querySelector("#question");
var option = document.querySelector("#option");
var timerElement = document.querySelector("#time");
var correctCheck = document.querySelector("#correctCheck");

let randomQuestion;
let currentQuestion;

var questionCount = 0;
var timerCount;


function startTest() {
  timerCount = 60;
  startTimer();
  startPrompt.style.display = "none";
  questionArea.style.display = "inline";
  correctCheck.style.display = "none";
  randomQuestion = questions.sort ( () => Math.random() - 0.5);
  currentQuestion = 0;
 nextQuestion ();
}

function nextQuestion() {
  showNextQuestion(randomQuestion[currentQuestion]); 
}

function showNextQuestion(question) {
  questionEL.innerText = question.question;
}

var questions = [
  {
    question: "Filler bleep 1",
    options1: [
      { text: "Filler answer 1", correct: true},
      { text: "Filler answer 2", correct: false},
      { text: "Filler answer 3", correct: false},
      { text: "Filler answer 4", correct: false},
    ]
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



function startTimer() {
  timer = setInterval(function () {
    timerCount--;
    timerElement.textContent = "Time: " + timerCount;
    console.log("Beep Boop, if you're reading this, then your button works");
  }, 1000);
}

startButton.addEventListener("click", startTest);
