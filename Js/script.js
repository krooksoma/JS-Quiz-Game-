let startButton = document.querySelector("#start-button");
let gameTime = document.querySelector("#countdown");
let gameScore = document.querySelector("#final-score");
let question = document.querySelector("#question");
let userChoices = document.querySelector("#user-choices")
let endGame = document.querySelector("#end-game-score");
let questionTitle = document.querySelector("#question-title");

// addEventListener detects click on Start Button and calls the function startGame
startButton.addEventListener("click", startGame);

// calculates amount of time for the game based on number of questionsl 15 seconds per question
let time = 90;
let currentQuestionIndex = 0;

function startGame(){
    //set a time for the game duration
    gameTimer();
    question.removeAttribute("class");
    pullQuestion();
    startButton.disabled = true; //start button is disabled until the game is finished
    
}

// function to perform the count down
function gameTimer(){
    // start timer

    let timerCountdown = setInterval( ()=>{
        time--;
        gameTime.textContent = time;

        if(time ===0){
            clearInterval(timerCountdown)
            // output message of time out
            alert("Time is out");
        }
        // console.log(time);
    },1000);
}

// check if a wrong question is chosen, then reduce time by 10 sec.

// function to pull question from the scriptDB
function pullQuestion(){
    // change question-slot div from hidden to display
    let currentQuestions = questions[currentQuestionIndex];

    questionTitle.textContent = currentQuestions.title;
    userChoices.textContent = "";


    //pull question

    for(let i = 0; i<currentQuestions.choice.length;i++){
        let screenOutput = document.createElement("p");
        let choices = document.createElement("button");

        choices.setAttribute("class", "choice");
        choices.setAttribute("value", currentQuestions.choice[i]);

        choices.textContent= i + 1 + ". " + currentQuestions.choice[i];
        userChoices.appendChild(choices);      
            
        if(userChoices === currentQuestions.answer){
        screenOutput.textContent = "Correct";
        }else{
            screenOutput.textContent = "Wrong Answer";
            time -= 10;
        }
        // submit button and also check if correct or not
        

    }

    // check if correct or not 

    
}


