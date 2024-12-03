const ball = document.getElementById('ball');
const scoreDisplay = document.getElementById('score');
const goal = document.querySelector('.goal');

let score = 0;

// Ball Click Event
ball.addEventListener('click', () => {
    kickBall();
});

// Kick Ball Function
function kickBall() {
    const ballPosition = ball.getBoundingClientRect();
    const goalPosition = goal.getBoundingClientRect();

    // Move the ball toward the goal
    ball.style.transform = `translateY(${goalPosition.top - ballPosition.top - 10}px)`;

    // Check if the ball lands in the goal
    setTimeout(() => {
        const ballRect = ball.getBoundingClientRect();
        if (
            ballRect.right < goalPosition.right &&
            ballRect.left > goalPosition.left &&
            ballRect.bottom < goalPosition.bottom
        ) {
            score++;
            scoreDisplay.textContent = `Score: ${score}`;
            alert('Goal!');
        } else {
            alert('Miss!');
        }
        resetBall();
    }, 500);
}

// Reset Ball Position
function resetBall() {
    ball.style.transform = 'translateY(0)';
}
