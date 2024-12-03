
const ball = document.getElementById('ball');
const scoreDisplay = document.getElementById('score');

let isDragging = false;
let startX, startY, offsetX, offsetY;
let score = 0;

// Mouse Down Event
ball.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
    offsetX = e.target.offsetLeft;
    offsetY = e.target.offsetTop;
});

// Mouse Move Event
document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;

        ball.style.left = `${offsetX + dx}px`;
        ball.style.top = `${offsetY + dy}px`;
    }
});

// Mouse Up Event
document.addEventListener('mouseup', () => {
    if (isDragging) {
        isDragging = false;
        checkGoal();
        resetBall();
    }
});

// Reset Ball Position
function resetBall() {
    ball.style.left = '45%';
    ball.style.top = '60%';
}

// Check If Goal is Scored
function checkGoal() {
    const ballRect = ball.getBoundingClientRect();
    const goalRect = document.querySelector('.goal').getBoundingClientRect();

    if (
        ballRect.right < goalRect.right &&
        ballRect.left > goalRect.left &&
        ballRect.top > goalRect.top &&
        ballRect.bottom < goalRect.bottom
    ) {
        score++;
        scoreDisplay.textContent = `Score: ${score}`;
        alert('Goal!');
    }
}
