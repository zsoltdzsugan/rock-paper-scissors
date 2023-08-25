let SCORE_PLAYER = 0;
let SCORE_AI = 0;
let playerMove = null;
let aiMove = null;
let gameTiles = document.querySelectorAll('.gameTile');

document.querySelector('.startBtn').addEventListener('click', () => {
    document.querySelector('.startBtn').disabled = true;
    startGame();
})


function startGame() {
    SCORE_PLAYER = 0;
    SCORE_AI = 0;
    
    document.querySelectorAll('.player').forEach(tile => {
        tile.addEventListener('click', () => {
            document.querySelectorAll(".ai").forEach(item => {
                item.classList.remove('highlight');
            });
            document.querySelectorAll('.ai > i').forEach(item => {
                item.classList.remove('highlight');
            })
            playerMove = tile.getAttribute('data-value');
            getPlayerMove();
            getAIMove();
            getWinner(playerMove, aiMove);
            updateScore();
            resetGame();
        })
    })
}


function getPlayerMove() {
    
    switch (playerMove) {
        case "rock":
            gameTiles[1].innerHTML = `<i class="fa-regular fa-hand-back-fist"></i>`;
            break;
        case "paper":
            gameTiles[1].innerHTML = `<i class="fa-regular fa-hand"></i>`;
            break;
        case "scissors":
            gameTiles[1].innerHTML = `<i class="fa-regular fa-hand-scissors fa-rotate-90"></i>`;
            break;
        default:
            break;
    }


}

function getAIMove() {
    let aiTiles = document.querySelectorAll(".ai");
    let randomNum = Math.floor(Math.random() * aiTiles.length);
    aiMove = aiTiles[randomNum].getAttribute('data-value');
    aiTiles[randomNum].classList.add('highlight');
    aiTiles[randomNum].querySelector('i').classList.add('highlight');


    switch (aiMove) {
        case "rock":
            gameTiles[0].innerHTML = `<i class="fa-regular fa-hand-back-fist"></i>`;
            break;
        case "paper":
            gameTiles[0].innerHTML = `<i class="fa-regular fa-hand"></i>`;
            break;
        case "scissors":
            gameTiles[0].innerHTML = `<i class="fa-regular fa-hand-scissors fa-rotate-90"></i>`;
            break;
        default:
            break;
    }
}

function getWinner(playerMove, aiMove) {
    if (playerMove === aiMove) {
        console.log('tie');
        SCORE_AI++;
        SCORE_PLAYER++;
        gameTiles[0].style.opacity = "100%";
        gameTiles[1].style.opacity = "100%";
    } else if (
        (playerMove === 'rock' && aiMove === 'scissors') ||
        (playerMove === 'paper' && aiMove === 'rock') ||
        (playerMove === 'scissors' && aiMove === 'rock')) {
        console.log('player');
        gameTiles[0].style.opacity = "50%";
        gameTiles[1].style.opacity = "100%";
        SCORE_PLAYER++;
    } else {
        console.log('ai');
        gameTiles[0].style.opacity = "100%";
        gameTiles[1].style.opacity = "50%";
        SCORE_AI++;
    }
}

function updateScore() {
    document.querySelector('.aiScore').textContent = SCORE_AI;
    document.querySelector('.playerScore').textContent = SCORE_PLAYER;
}