const play = document.querySelector("#chooseNumber");
const randomNumber = document.querySelector(".randomNumber");
const guessNumber = document.querySelector(".guessNumber");
const result = document.querySelector("#gameResult");
const span = document.createElement("span");
const h2 = document.createElement("h2");

function playGame(event) {
  event.preventDefault();
  const randomNumberGernerate = Math.floor(
    Math.random() * (randomNumber.valueAsNumber + 1)
  );
  const gameText = `You chose : ${guessNumber.value}, the machine chose: ${randomNumberGernerate}`;
  result.appendChild(span);
  span.innerText = gameText;
  result.appendChild(h2);
  if (guessNumber.valueAsNumber === randomNumberGernerate) {
    h2.innerText = "You Win";
  } else {
    h2.innerText = "You lose";
  }
}

play.addEventListener("submit", playGame);
