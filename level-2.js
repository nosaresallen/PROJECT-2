let guessBtn = document.querySelector('#guessBtn'); 
let number = [Math.floor(Math.random() * 100)]
let message = document.querySelector('#message');

let bgmVictory = document.querySelector('#victory');
let bgmGameOver = document.querySelector('#gameover');

let guessCount = 5; // guess counter

//backgorund music
const audio = document.querySelector('#bgMusic');
function toggleAudio() {
    if (audio.muted) {
        audio.muted = false;
        audio.play();
        document.querySelector('#soundEmoji').innerHTML = '🔊';
    } else {
        audio.muted = true;
        audio.pause();
        document.querySelector('#soundEmoji').innerHTML = '🔇';
    }
}


guessBtn.addEventListener('click', () => {
    //This is Modal --To display 
    const congratsModal = new bootstrap.Modal(document.getElementById('congratsModal'))
    const messageModal1 = new bootstrap.Modal(document.getElementById('messageModal1'))
    const messageModal2 = new bootstrap.Modal(document.getElementById('messageModal2'))
    const gameOverModal = new bootstrap.Modal(document.getElementById('gameOverModal'))
    const invalidModal = new bootstrap.Modal(document.getElementById('invalidModal'))
    
    //user input number
    let input = parseFloat(document.querySelector('#userInput').value); 
    
    //input validation
    if (isNaN(input) || input < 0 || input > 100) {
        invalidModal.show();
        document.querySelector('#userInput').value = ''; 
        return; 
    }

    //display the congratlations modal if user input the correct number
    //play the victory sound
    if (input == number){
        document.querySelector('#correctNumber').innerHTML = `${number}`;
        congratsModal.show();
        bgmVictory.play();
        bgMusic.pause();

    //display too high modal message
    //decrease guess remaining
    } if (input > number) {
        messageModal1.show();
        document.querySelector('#userInput').value = '';
        guessCount--;

    //display too low modal message
    //decrease guess remaining
    } if (input < number) {
        messageModal2.show();
        document.querySelector('#userInput').value = '';
        guessCount--;
    }

    //diplay the game over modal if the guess remaining reached 0
    if (guessCount === 0) {
        gameOverModal.show();
        bgmGameOver.play();
        bgMusic.pause();
    }
    
    updateGuess(); //updating a guess counter
});


//about game modal --to display
document.querySelector('#aboutBtn').addEventListener('click', aboutFunction);

function aboutFunction(){
    const aboutModal = new bootstrap.Modal(document.getElementById('aboutModal'))
    aboutModal.show();
}


//guess remaining 
function updateGuess(){
    document.querySelector('#guessCount').innerHTML = guessCount;
}


