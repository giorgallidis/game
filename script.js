const ball = document.getElementById('ball');
const scoreDisplay = document.getElementById('score');
const messageDisplay = document.getElementById('message');
const goal = document.querySelector('.goal');

let score = 0;

// Ball movement variables
let ballX = 150; // Starting X position
let ballY = 300; // Starting Y position

// Ball movement handler
document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowUp':
            if (ballY > 50) ballY -= 10;
            break;
        case 'ArrowDown':
            if (ballY < 450) ballY += 10;
            break;
        case 'ArrowLeft':
            if (ballX > 10) ballX -= 10;
            break;
        case 'ArrowRight':
            if (ballX < 290) ballX += 10;
            break;
        case ' ':
            kickBall();
            return;
    }
    updateBallPosition();
});

// Update ball position
function updateBallPosition() {
    ball.style.left = `${ballX}px`;
    ball.style.top = `${ballY}px`;
}

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
        messageDisplay.textContent = 'Goal!';
        messageDisplay.style.color = 'green';
    } else {
        messageDisplay.textContent = 'No goal!';
        messageDisplay.style.color = 'red';
    }

    setTimeout(() => {
        messageDisplay.textContent = '';
    }, 2000);
}

// Initialize ball position
updateBallPosition();
