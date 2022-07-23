const gameBoard = document.querySelector("#game-board");
const context = gameBoard.getContext("2d");
const scoreBoard = document.querySelector("#score-board");
const resetBtn = document.querySelector("#reset-button");
const gameWidth = gameBoard.width;
const gameHeight = gameBoard.height;
const boardBackground = "white";
const snakeColor = "lightgreen";
const snakeBorder = "black";
const foodColor = "red";
const unitSize = 25;
let running = false;
let xVelocity = unitSize;
let yVelocity = 0;
let foodX;
let foodY;
let score = 0;
let snake = [
	{ x: unitSize * 4, y: 0 },
	{ x: unitSize * 3, y: 0 },
	{ x: unitSize * 2, y: 0 },
	{ x: unitSize, y: 0 },
	{ x: 0, y: 0 },
];

window.addEventListener("keydown", changeDirection);
resetBtn.addEventListener("click", resetGame);

gameStart();

function gameStart() {
	running = true;
	scoreBoard.textContent = score;
	createFood();
	drawFood();
	nextTick();
}
function nextTick() {
	if (running) {
		setTimeout(() => {
			clearBoard();
			drawFood();
			moveSnake();
			drawSnake();
			checkGameOver();
			nextTick();
		}, 75);
	} else {
		displayGameOver();
	}
}
function clearBoard() {
	context.fillStyle = boardBackground;
	context.fillRect(0, 0, gameWidth, gameHeight);
}
function createFood() {
	function randomFood(min, max) {
		const randNum =
			Math.round((Math.random() * (max - min) + min) / unitSize) * unitSize;
		return randNum;
	}
	foodX = randomFood(0, gameWidth - unitSize);
	foodY = randomFood(0, gameWidth - unitSize);
}
function drawFood() {
	context.fillStyle = foodColor;
	context.fillRect(foodX, foodY, unitSize, unitSize);
}
function moveSnake() {}
function drawSnake() {}
function changeDirection() {}
function checkGameOver() {}
function displayGameOver() {}
function resetGame() {}
