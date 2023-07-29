// create 5 questions as objects, and put them into an array
//the object should be in the following format
// {question:"",
// wrongAnswer1:"",
// wrongAnswer2:"",
// wrongAnswer3:"",
// rightAnswer:"",
// }
let quizQuestions = [
  {
    question: "Inside which HTML element do we put the JavaScript?",
    wrongAnswer1: "<js>",
    wrongAnswer2: "<scripting>",
    wrongAnswer3: "<javascript>",
    rightAnswer: "<script>",
    // choices: ["<js>","<scripting>","<javascript>","<script>",],
    // answer: "<script>"
  },

  {
    question: "What does DOM stand for?",
    wrongAnswer1: "Diverging Occlusion Method",
    wrongAnswer2: "Differentiated Operational Module",
    wrongAnswer3: "Days On Market",
    rightAnswer: "Document Object Model",
  },
  {
    question: "Which of the following is a type of JavaScript pop up box?",
    wrongAnswer1: "Submit",
    wrongAnswer2: "Cancel",
    wrongAnswer3: "Reject",
    rightAnswer: "Alert",
  },
  {
    question: "What statement ends JavaScript function execution?",
    wrongAnswer1: "stop",
    wrongAnswer2: "finalize",
    wrongAnswer3: "end",
    rightAnswer: "return",
  },
  {
    question:
      "Which operator determines if values are equal in value and type in JavaScript?",
    wrongAnswer1: "=+",
    wrongAnswer2: "==",
    wrongAnswer3: "=",
    rightAnswer: "===",
  },
];

//shuffle array in random order
function shuffle(array) {
  let currentIndex = array.length;
  let randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ]; //what does this mean?
  }

  return array;
}
