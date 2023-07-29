//connect to HTML
let startBtn = document.querySelector("#start"); //start button
let questionScreen = document.querySelector("#questions"); //question
let questionTitle = document.querySelector("#question-title");
let questionChoices = document.querySelector("#choices"); //choice div
let endScreen = document.querySelector("#end-screen");
let startScreen = document.querySelector("#start-screen");
let time = document.querySelector("#time");
let timerId;

let count = 0;
const countdownSeconds = 20;
// set up the visible and hide class in each step: start-> questions -> score
startBtn.addEventListener("click", showQuestions);

function showQuestions() {
  startScreen.classList.add("hide");
  questionScreen.classList.remove("hide");

  countdownTimer(countdownSeconds);
  jsQuestionDraw();
}

//draw random function questions
function jsQuestionDraw() {
  // set the h2 to the'question', and the 4 choices to the answers in random
  questionChoices.innerHTML = "";

  let randomQuestionArray = shuffle(quizQuestions);
  //title
  questionTitle.textContent = randomQuestionArray[count].question;

  // Step 2: set attributes or content for the new <div>
  let choice1 = randomQuestionArray[count].wrongAnswer1;
  let choice2 = randomQuestionArray[count].wrongAnswer2;
  let choice3 = randomQuestionArray[count].wrongAnswer3;
  let choice4 = randomQuestionArray[count].rightAnswer;
  let choiceArray = [choice1, choice2, choice3, choice4];
  let randomChoiceArray = shuffle(choiceArray);

  for (let j = 0; j < 4; j++) {
    const btn = document.createElement("button");
    btn.textContent = randomChoiceArray[j];

    btn.addEventListener("click", function (event) {
      if (event.target.textContent === randomQuestionArray[count].rightAnswer) {
        console.log("answer is right");
      } else {
        console.log("answer is wrong");
      }
      count++;

      if (count === randomQuestionArray.length) {
        gameOver();
      } else {
        jsQuestionDraw();
      }
    });

    // Step 3: Append the new <div> as a child of the target parent element
    questionChoices.appendChild(btn);
  }
}

function gameOver() {
  clearInterval(timerId);

  questionScreen.classList.add("hide");
  endScreen.classList.remove("hide");
}
//wrong answer clicked, show 'wrong' and jump to the next question

//right answer clicked, show 'correct!' and jump to the next question

//when all the questions are done, show the score screen

//function score
//if score screen is visible
//enter initial, then the score is recorded on a form on screen
//create a container containing the h2(score) and 2 buttons: Go back, Clear High Score
//button 'go back': back to main page
//button 'clear high score'

//timer function: display score screen after 20 seconds (20000 milliseconds) delay

//countdown timer
function countdownTimer(seconds) {
  time.textContent = seconds;

  timerId = setInterval(function () {
    seconds--;
    time.textContent = seconds;

    if (seconds <= 0) {
      gameOver();
    }
  }, 1000);
}
