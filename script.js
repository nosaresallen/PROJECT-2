let guessBtn = document.querySelector('#guessBtn'); 
let number = [Math.floor(Math.random() * 100)]
let message = document.querySelector('#message');

let bgmVictory = document.querySelector('#victory');
let bgmGameOver = document.querySelector('#gameover');

let guessCount = 10; // guess counter


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
    
    // Add number validation
    if (isNaN(input) || input < 0 || input > 100) {
        invalidModal.show();
        document.querySelector('#userInput').value = ''; 
        return; 
    }

    if (input == number){
        document.querySelector('#correctNumber').innerHTML = `${number}`;
        congratsModal.show();
        bgmVictory.play();
        bgMusic.pause();


    } if (input > number) {
        messageModal1.show();
        document.querySelector('#userInput').value = '';
        guessCount--;

    } if (input < number) {
        messageModal2.show();
        document.querySelector('#userInput').value = '';
        guessCount--;
    }
    if (guessCount === 0) {
        gameOverModal.show();
        bgmGameOver.play();
        bgMusic.pause();
    }

    
    

    
    updateGuess(); //updating a guess counter
});




function updateGuess(){
    document.querySelector('#guessCount').innerHTML = guessCount;
}


