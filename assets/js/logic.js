//connect to HTML
let startBtn = document.querySelector("#start");
let questionScreen = document.querySelector("#questions");

// set up the visible and hide class in each step: start-> questions -> score
startBtn.addEventListener("click", function (event) {
  let questionScreenState = questionScreen.getAttribute("class");

  if (questionScreenState === "hide")
    questionScreenState = questionScreen.setAttribute("class", "visible");
});

//function question
//if questions is visible
//create a container containing the h2 and 4 choices
// set the h2 to the'question', and the 4 choices to the answers in random order
//inject the code block into the HTML using appendChild

//wrong answer clicked, show 'wrong' and jump to the next question

//right answer clicked, show 'correct!' and jump to the next question

//when all the questions are done, show the score screen

//function score
//if score screen is visible
//create a container containing the h2(score) and 2 buttons: Go back, Clear High Score
//
