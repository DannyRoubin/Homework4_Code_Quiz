var header = document.querySelector("heading");
var startPrompt = document.querySelector("article");
var startButton = document.querySelector("#start");
var questionArea = document.querySelector("main");
var questionEL = document.querySelector("#question");
var option1 = document.querySelector("#option1");
var option2 = document.querySelector("#option2");
var option3 = document.querySelector("#option3");
var option4 = document.querySelector("#option4");
var timerElement = document.querySelector("#time");
var correctCheck = document.querySelector("#correctCheck");
var option = document.querySelector("#optionButtons")

let randomQuestion;
let currentQuestion;

var questionCount = 0;
var timerCount;


function startTest() {
  timerCount = 60;
  startTimer();
  startPrompt.style.display = "none";
  questionArea.style.display = "block";
  correctCheck.style.display = "none";
  randomQuestion = questions.sort ( () => Math.random() - 0.5);
  console.log(randomQuestion);
  currentQuestion = 0;
 nextQuestion ();
}



function nextQuestion() {
  showNextQuestion(randomQuestion[currentQuestion]); 
}

function showNextQuestion(question) {
  questionEL.innerText = question.question;
  option1.innerText = (question.options[0].text)
  option2.innerText = (question.options[1].text)
  option3.innerText = (question.options[2].text)
  option4.innerText = (question.options[3].text)
}
var questions = [
  {
    question: "Filler question 1",
    options: [
      { text: "Filler answer 1", isCorrect: true},
      { text: "Filler answer 2", isCorrect: false},
      { text: "Filler answer 3", isCorrect: false},
      { text: "Filler answer 4", isCorrect: false},
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
  }, 1000);
}

startButton.addEventListener("click", startTest);
