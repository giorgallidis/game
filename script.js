const ball = document.getElementById('ball');
const scoreDisplay = document.getElementById('score');
const messageDisplay = document.getElementById('message');
const goal = document.querySelector('.goal');

// Ball movement variables
let ballX = 150; // Starting X position
let ballY = 300; // Starting Y position

// Set initial position of the ball
function updateBallPosition() {
    ball.style.left = `${ballX}px`;
    ball.style.top = `${ballY}px`;
}

// Add event listener for keyboard actions
document.addEventListener('keydown', (event) => {
    const key = event.key;

    if (key === 'ArrowUp' && ballY > 50) {
        ballY -= 10; // Move ball up
    } else if (key === 'ArrowDown' && ballY < 450) {
        ballY += 10; // Move ball down
    } else if (key === 'ArrowLeft' && ballX > 10) {
        ballX -= 10; // Move ball left
    } else if (key === 'ArrowRight' && ballX < 290) {
        ballX += 10; // Move ball right
    } else if (key === ' ') {
        kickBall(); // Spacebar to kick the ball
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

// Display feedback message
function displayMessage(text, color) {
    messageDisplay.textContent = text;
    messageDisplay.style.color = color;

    setTimeout(() => {
        messageDisplay.textContent = ''; // Clear the message after 2 seconds
    }, 2000);
}

// Initialize ball position
updateBallPosition();
