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

// Ball movement handler
document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowUp':
            if (ballY > 50) ballY -= 10; // Prevent ball from leaving the top boundary
            break;
        case 'ArrowDown':
            if (ballY < 450) ballY += 10; // Prevent ball from leaving the bottom boundary
            break;
        case 'ArrowLeft':
            if (ballX > 10) ballX -= 10; // Prevent ball from leaving the left boundary
            break;
        case 'ArrowRight':
            if (ballX < 290) ballX += 10; // Prevent ball from leaving the right boundary
            break;
        case ' ':
            kickBall(); // Trigger the kickBall function when spacebar is pressed
            return;
    }
    updateBallPosition();
});

// Kick Ball Function
function kickBall() {
    const ballRect = ball.getBoundingClientRect();
    const goalRect = goal.getBoundingClientRect();

    // Check if the ball is within the goal area
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
