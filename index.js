// Счетчики и флаг
let playerScore = 0;
let computerScore = 0;
let gameOver = false;

// Получаем элементы кнопок и див для результат
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const displayResult = document.querySelector("#displayResult");
const resetBtn = document.querySelector("#resetBtn");

// Функция случайного выбора компьютера
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Основная функция раунда
function playRound(playerSelection) {
  if (gameOver) return;

  const ComputerSelection = getComputerChoice();

  // Определяем победителя
  if (
    (playerSelection === "rock" && ComputerSelection === "scissors") ||
    (playerSelection === "paper" && ComputerSelection === "rock") ||
    (playerSelection === "scissors" && ComputerSelection === "paper")
  ) {
    playerScore++; // очко игроку за победу в раунде
    displayResult.innerHTML = `Вы выиграли этот раунд!<br>Счет: ${playerScore} - ${computerScore}`;
  } else if (playerSelection === ComputerSelection) {
    displayResult.innerHTML = `Ничья!<br>Счет: ${playerScore} - ${computerScore} `;
  } else {
    computerScore++;
    displayResult.innerHTML = `Компьютер выиграл раунд.<br>Счет: ${playerScore} - ${computerScore}`;
  }

  // Проверяем достиг ли кто то 5 очков
  if (playerScore === 5) {
    displayResult.textContent = `Поздравляю, вы победили! Финальный счет: ${playerScore} - ${computerScore}`;
    gameOver = true;
  } else if (computerScore === 5) {
    displayResult.textContent = `Компьютер победил! Финальный счет: ${playerScore} - ${computerScore}`;
    gameOver = true;
  }
}

// Слушатели кнопок
rockBtn.addEventListener("click", () => playRound("rock"));
paperBtn.addEventListener("click", () => playRound("paper"));
scissorsBtn.addEventListener("click", () => playRound("scissors"));
resetBtn.addEventListener("click", () => {
  playerScore = 0;
  computerScore = 0;
  gameOver = false;
  displayResult.textContent = "Игра сброшена! Начнем заново!";
});
