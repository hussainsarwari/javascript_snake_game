const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const scoreDisplay = document.getElementById("score");
const statusDisplay = document.getElementById("status");
const startButton = document.getElementById("startButton");
const pauseButton = document.getElementById("pauseButton");

// Game settings
const scale = 5;
const rows = canvas.height / scale;
const columns = canvas.width / scale;

// Snake and food
let snake = [];
let food = {};
let direction = "RIGHT";
let nextDirection = "RIGHT";
let score = 0;
let gameInterval;
let isPaused = false;
// Initialize game
function init() {
  snake = [
    { x: Math.floor(columns / 2) * scale, y: Math.floor(rows / 2) * scale },
  ];
  direction = "RIGHT";
  nextDirection = "RIGHT";
  score = 0;
  placeFood();
  clearInterval(gameInterval);
  gameInterval = setInterval(update, 100);
  statusDisplay.textContent = "Game Running";
  startButton.disabled = true;
  pauseButton.disabled = false;
}
// Start the game
function startGame() {
  init();
}

// Pause the game
function pauseGame() {
  if (!isPaused) {
    clearInterval(gameInterval);
    statusDisplay.textContent = "Game Paused";
    isPaused = true;
    pauseButton.disabled = true;
    startButton.disabled = false;
  } else {
    resumeGame();
  }
}

// Resume the game
function resumeGame() {
  gameInterval = setInterval(update, 100);
  statusDisplay.textContent = "Game Running";
  isPaused = false;
  pauseButton.disabled = false;
  startButton.disabled = true;
}

// Draw the snake on the canvas
function drawSnake() {
  ctx.fillStyle = "#4CAF50"; // Snake color
  snake.forEach((part) => {
    ctx.fillRect(part.x, part.y, scale, scale);
  });
}

// Draw the food on the canvas
function drawFood() {
  ctx.fillStyle = "#FF5722"; // Food color
  ctx.fillRect(food.x, food.y, scale, scale);
}

// Place food at a random position
function placeFood() {
  food = {
    x: Math.floor(Math.random() * columns) * scale,
    y: Math.floor(Math.random() * rows) * scale,
  };
}

// Update the game state
function update() {
  if (isPaused) return;

  // Update direction
  direction = nextDirection;

  // Move the snake
  const head = { ...snake[0] };
  switch (direction) {
    case "UP":
      head.y -= scale;
      break;
    case "DOWN":
      head.y += scale;
      break;
    case "LEFT":
      head.x -= scale;
      break;
    case "RIGHT":
      head.x += scale;
      break;
  }

  // Check for collision with walls
  if (
    head.x < 0 ||
    head.x >= canvas.width ||
    head.y < 0 ||
    head.y >= canvas.height
  ) {
    return gameOver();
  }

  // Check for collision with itself
  if (snake.some((part) => part.x === head.x && part.y === head.y)) {
    return gameOver();
  }

  // Add new head to the snake
  snake.unshift(head);

  // Check for collision with food
  if (head.x === food.x && head.y === food.y) {
    score++;
    placeFood();
  } else {
    snake.pop();
  }

  // Clear the canvas and draw everything
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawSnake();
  drawFood();

  // Update score display
  scoreDisplay.textContent = `Score: ${score}`;
}

// Handle keyboard input
document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowUp":
      if (direction !== "DOWN") nextDirection = "UP";
      break;
    case "ArrowDown":
      if (direction !== "UP") nextDirection = "DOWN";
      break;
    case "ArrowLeft":
      if (direction !== "RIGHT") nextDirection = "LEFT";
      break;
    case "ArrowRight":
      if (direction !== "LEFT") nextDirection = "RIGHT";
      break;
  }
});

// Game over function
function gameOver() {
  clearInterval(gameInterval);
  statusDisplay.textContent = `Game Over! Score: ${score}. Press Start to Restart.`;
  startButton.disabled = false;
  pauseButton.disabled = true;
}

// Add event listeners to buttons
startButton.addEventListener("click", startGame);
pauseButton.addEventListener("click", pauseGame);
