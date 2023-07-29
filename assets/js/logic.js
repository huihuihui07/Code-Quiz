//connect to HTML
let startBtn = document.querySelector("#start"); //start button
let questionScreen = document.querySelector("#questions"); //question
let questionTitle = document.querySelector("#question-title");
let questionChoices = document.querySelector("#choices"); //choice div

let startScreen = document.querySelector("#start-screen");

// set up the visible and hide class in each step: start-> questions -> score
startBtn.addEventListener("click", showQuestions);

function showQuestions() {
  let questionScreenState = questionScreen.getAttribute("class");
  if (questionScreenState === "hide")
    questionScreenState = questionScreen.setAttribute("class", "visible");
  console.log("removed");
  startScreen.remove();
  setTimeout();
}

//draw random function questions
function jsQuestionDraw(event) {
  // set the h2 to the'question', and the 4 choices to the answers in random
  let randomQuestionArray = shuffle(quizQuestions);
  let count = 0;
  //title
  questionTitle.textContent = randomQuestionArray[count].question;

  //choices
  // Step 1: Create a new <div> element
  const newDiv1 = document.createElement("div");
  const newDiv2 = document.createElement("div");
  const newDiv3 = document.createElement("div");
  const newDiv4 = document.createElement("div");

  // Step 2: set attributes or content for the new <div>
  let choice1 = quizQuestions.wrongAnswer1;
  let choice2 = quizQuestions.wrongAnswer2;
  let choice3 = quizQuestions.wrongAnswer3;
  let choice4 = quizQuestions.rightAnswer;
  let choiceArray = [choice1, choice2, choice3, choice4];
  let randomChoiceArray = shuffle(choiceArray);

  for (let j = 0; j < 4; j++) {
    newDiv[j].textContent = randomChoiceArray[j];

    // Step 3: Append the new <div> as a child of the target parent element
    questionChoices.appendChild(newDiv);
  }
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
setTimeout(function () {
  let time = document.querySelector("#time");
  const countdownSeconds = 20;
  countdownTimer(countdownSeconds);
  time.textContent = "countDown";
  console.log("This message will be printed after 2 seconds.");
}, 20000);

//countdown timer
function countdownTimer(seconds) {
  function updateCountdown() {
    console.log(seconds);
    seconds--;

    if (seconds >= 0) {
      setTimeout(updateCountdown, 1000); // Call the function again after 1 second (1000 milliseconds)
    } else {
      console.log("Countdown complete!");
    }
  }

  updateCountdown(); // Start the countdown
}

