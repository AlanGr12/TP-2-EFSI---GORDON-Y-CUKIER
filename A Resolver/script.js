const input = document.getElementById("guessInput")
const button = document.getElementById("guessBtn")
const message = document.getElementById("message")
const reset = document.getElementById("resetBtn")
const attemptsText = document.getElementById("attempts")

let secretNumber = Math.floor(Math.random() * 100) + 1
let attempts = 0

reset.addEventListener("click", resetearValores)

button.addEventListener("click", checkGuess)

input.addEventListener("keydown", function(e) {
  if (e.key === "Enter") checkGuess()
})

let juegoTerm = false;

function checkGuess(){

  const guess = input.value

  attempts = attempts + 1

  attemptsText.innerText = attempts

  if(guess == secretNumber){
    message.innerText = "¡Ganaste!"
    juegoTerm = true
  }

  else if(guess < secretNumber){
    message.innerText = "El número es mayor"
  }

  else{
    message.innerText = "El número es menor"
  }

}

function resetearValores(){

  secretNumber = Math.floor(Math.random() * 100) + 1
  attempts = 0
  juegoTerm = false

  attemptsText.innerText = 0
  message.innerHTML = " ";

}