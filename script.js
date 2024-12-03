const ball = document.getElementById('ball');
const scoreDisplay = document.getElementById('score');
const messageDisplay = document.getElementById('message');
const stadium = document.querySelector('.stadium');
const goal = document.querySelector('.goal');

let ballX, ballY; // Ball position variables
let stadiumRect; // Stadium boundaries

// Initialize Ball Position
function initializeBallPosition() {
    stadiumRect = stadium.getBoundingClientRect();

    // Calculate the center of the stadium
    const centerX = (stadiumRect.width - ball.offsetWidth) / 2;
    const centerY = (stadiumRect.height - ball.offsetHeight) / 2;

    // Set initial ball position
    ballX = centerX;
    ballY = centerY;

    updateBallPosition();
}

// Update Ball Position on Screen
function updateBallPosition() {
    ball.style.left = `${ballX}px`;
    ball.style.top = `${ballY}px`;
}

// Ball Movement Handler
document.addEventListener('keydown', (event) => {
    const key = event.key;

    switch (key) {
        case 'ArrowUp':
            if (ballY > 0) ballY -= 10; // Prevent moving out of the top
            break;
        case 'ArrowDown':
            if (ballY < stadiumRect.height - ball.offsetHeight) ballY += 10; // Prevent moving out of the bottom
            break;
        case 'ArrowLeft':
            if (ballX > 0) ballX -= 10; // Prevent moving out of the left
            break;
        case 'ArrowRight':
            if (ballX < stadiumRect.width - ball.offsetWidth) ballX += 10; // Prevent moving out of the right
            break;
        case ' ':
            kickBall(); // Kick ball with spacebar
            return;
    }
    updateBallPosition();
});

// Kick Ball Function
function kickBall() {
    const ballRect = ball.getBoundingClientRect();
    const goalRect = goal.getBoundingClientRect();

    if (
        ballRect.right < goalRect.right &&
        ballRect.left > goalRect.left &&
        ballRect.bottom < goalRect.bottom
    ) {
        score++;
        scoreDisplay.textContent = `Score: ${score}`;
        displayMessage('Goal!', 'green');
    } else {
        displayMessage('No goal!', 'red');
    }
}

// Display Feedback Message
function displayMessage(text, color) {
    messageDisplay.textContent = text;
    messageDisplay.style.color = color;

    setTimeout(() => {
        messageDisplay.textContent = ''; // Clear message after 2 seconds
    }, 2000);
}

// Initialize Game
initializeBallPosition();
