var startButton = document.querySelector("#start-button");
var gameTime = document.querySelector("#countdown");
var gameScore = document.querySelector("#final-score");
var question = document.querySelector("#question-slot");
var userChoices = document.querySelector("#user-choices")
var endGame = document.querySelector("#end-game-score");

// addEventListener detects click on Start Button and calls the function startGame
startButton.addEventListener("click", startGame);

// calculates amount of time for the game based on number of questionsl 15 seconds per question
var time = 15;

function startGame(){
    //set a time for the game duration
    gameTimer();
    pullQuestion();
    startButton.disabled = true; //start button is disabled until the game is finished
    
}
// function to perform the count down
function gameTimer(){
    // start timer

    var timerCountdown = setInterval( ()=>{
        time--;
        gameTime.textContent = time;

        if(time ===0){
            clearInterval(timerCountdown)
            // output message of time out
            alert("Time is out");
        }
        console.log(time);
        console.log(gameTime);
    },1000);
}

// check if a wrong question is chosen, then reduce time by 10 sec.

// function to pull question from the scriptDB
function pullQuestion(){
    //pull question

    // check if correct or not 

}


