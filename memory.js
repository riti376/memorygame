const cards = document.querySelectorAll(".card");
console.log(cards);
let displayScore = document.querySelector("#displayScore");
let count = document.querySelector("#count");
let timer = document.querySelector("#time")
let Score = 0;
let scoreDisplay = 0;
let resetButton = document.querySelector("#reset");
let messageDisplay = document.querySelector("#message");



//variables
var isFlipped = false;
var firstCard;
var secondCard;
var gameOver = false;

function flip() {
  //   console.log("Card flipped");
  // console.log(this);
  this.classList.add("flip");
  if (!isFlipped) {
    isFlipped = true;
    firstCard = this;
  } else {
    secondCard = this;
    console.log(firstCard);
    console.log(secondCard);

    checkIt();
  }
}

function checkIt() {
  //   console.log("Checking...");
  if (firstCard.dataset.image === secondCard.dataset.image) {
    success();
    scoreAdd();
  } else {
    fail();
  }
}

function success() {
  //   console.log("Success");
  firstCard.removeEventListener("click", flip);
  secondCard.removeEventListener("click", flip);
  firstCard.classList.add("glow");
  secondCard.classList.add("glow");

  reset();
}

function fail() {
  //   console.log("Failed");
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    reset();
  }, 500);
}
function scoreAdd(){
     Score+=2;
		scoreDisplay+=2;
		count.textContent = Score;
}
function Timer(){
let T = 45;
const timeValue = setInterval((interval) => {
  T-= 1;
  timer.textContent = T;
  if(T <= 0|| Score == 16){
    clearInterval(timeValue);
    cards.forEach((card) =>{
      card.classList.remove("flip");
      card.classList.remove("glow");
    card.removeEventListener("click", flip);
    resetButton.textContent = "New Game";
    if(T==0){
    messageDisplay.textContent = "You ran out of time. Click on New Game to play again!"
    messageDisplay.classList.add("color");

    }else if(Score == 16){
      messageDisplay.textContent = "You won!! Click on New Game to play again!!"
      messageDisplay.classList.add("color2");

    }else{
      messageDisplay.textContent = "";

    }
 })
}
 } ,1000);
}

resetButton.addEventListener("click", function(){
  reset1();
  })

function reset() {
  isFlipped = false;
  firstCard = null;
  secondCard = null;
}
function resetTime(){
if(!gameOver){
  Timer(); 
  cards.forEach((card) => card.addEventListener("click", flip));
  resetButton.textContent = "";
  messageDisplay.textContent = "";

}
gameOver = true;
}
function reset1(){
  /*isFlipped = false;
  firstCard = null;
  secondCard = null;*/
  resetTime();
  count.textContent = 0;
  Score = 0;
   cards.forEach((card) => {
    setTimeout(() => {
      card.classList.remove("flip");
      card.classList.remove("glow");
    cards.forEach((card) => card.addEventListener("click", flip));
    },0);
    var index = Math.floor(Math.random() * 16);
    card.style.order = index;
    gameOver = false;
  })
  
}

//TODO: shuffle

(function shuffle() {
  cards.forEach((card) => {
    var index = Math.floor(Math.random() * 16);
    card.style.order = index;
  });
})();
