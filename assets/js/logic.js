//connect to HTML
let startBtn = document.querySelector("#start");
let questionScreen = document.querySelector("#questions");

startBtn.addEventListener("click", function (event) {
  let questionScreenState = questionScreen.getAttribute("class");

  if (questionScreenState === "hide")
    questionScreenState = questionScreen.setAttribute("class", "visible");
});
