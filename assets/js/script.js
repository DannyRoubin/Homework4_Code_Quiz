//pulling variables from the html
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
var option = document.querySelector("#optionButtons");
var highScoreBtn = document.querySelector("#highScoreBtn");
var highScoreEL = document.querySelector("#highScoreScoreboard");
var inputHighScoreHere = document.querySelector("#inputHighScoreHere");

var currentQuestion;
var currentQuestionIndex = 0;

var questionCount = 0;
var timerCount;
var choice;
var userChoice;
var userInitials;

//sets the timer, and makes everything but the question area and highscore button go away
function startTest() {
  timerCount = 60;
  startTimer();
  startPrompt.style.display = "none";
  questionArea.style.display = "block";
  correctCheck.style.display = "none";
  startButton.style.display = "none";
  highScoreEL.style.display = "none";
 nextQuestion ();
}

//checks if the answer is right or wrong
function checkAnswer () {

 if (choiceClick.innerText !== questions[currentQuestionIndex].answer.innerText) {
   timerCount -= 15;
   timerElement.textContent = timerCount;
   console.log ("incorrect");
   correctCheck.textContent = "Incorrect";
   correctCheck.style.display = "block";
   currentQuestionIndex++;
   nextQuestion();
   //reflect if q was wrong
 } else {
 console.log ("correct");
 correctCheck.textContent = "correct";
 correctCheck.style.display = "block";
    currentQuestionIndex++;
   nextQuestion();
  
 }
}

//sets the next question
function nextQuestion() {
  showNextQuestion(questions[currentQuestionIndex]); 
}

//checks to see if the game is still running or not
function choiceClick(clickedChoice) {
   var userChoice = clickedChoice.innerText;
   questionCount++;
   if ( questionCount < 5){
    checkAnswer(userChoice);
   } else{
     winGame();
   }
}

//allows user to input their initials and it'll put it next to their time
function winGame() {
  clearInterval(timer);
  userInitials = window.prompt("Enter your initials");
  inputHighScoreHere.innerText = "1. " + userInitials +" time left:" + timerCount
  showHighScores();
}

//shows the questions
function showNextQuestion(questions) {
  questionEL.innerText = questions.title;
  option1.innerText = (questions.choices[0])
  option2.innerText = (questions.choices[1])
  option3.innerText = (questions.choices[2])
  option4.innerText = (questions.choices[3])
}

//runs the timer and checks if the game is lost
function startTimer() {
  timer = setInterval(function () {
    timerCount--;
    timerElement.textContent = "Time: " + timerCount;
    if (timerCount < 0){
      clearInterval(timer);
      alert ("You lost")
      timerElement.textContent = "Time: 0";
      showHighScores();
    }
  }, 1000);
}


//shows the highscore page
function showHighScores () {
  clearInterval(timer);
  startPrompt.style.display = "none";
  questionArea.style.display = "none";
  correctCheck.style.display = "none";
  startButton.style.display = "block";
  highScoreEL.style.display = "block";
}

highScoreBtn.addEventListener("click", showHighScores);

startButton.addEventListener("click", startTest);

choice.addEventListener("click", choiceClick); 

