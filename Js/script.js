let startButton = document.querySelector('#start-button');
let gameTime = document.querySelector('#countdown');
let questionEl = document.querySelector('#question');
let choicesEl = document.querySelector('#user-choices');
let questionTitle = document.querySelector('#question-title');
let displayMessage = document.querySelector('#display-message');
let endGameScreen = document.querySelector('#end-game-screen');
let finalScore = document.querySelector('#final-score');
let initials = document.querySelector('#initials');
let submitButton = document.querySelector('#submit-button');
let page2container = document.querySelector('#page2-container');
let page2content = document.querySelector('#initials-header');
let page2score = document.querySelector('#this-player-score');
let scoreboardBtn = document.querySelector("#scoreboard-btn");

// addEventListener detects click on Start Button and calls the function startGame
startButton.addEventListener('click', startGame);

let questionIndexEl = 0;
let time = 60;
let winner = false;
// create variable to access local storage ????

scoreboardBtn.addEventListener('click', renderLastRegisteredScore);

function renderLastRegisteredScore() {

    // remember to parse item before bringing it into display
    let printscores2 = JSON.stringify(scoresArray);
    console.log(printscores2);
    console.log(typeof printscores2);
    

    document.getElementById("player-initials").textContent = printscores2;
    // if(scoresArray !== null){
    //     for(let i = 0; i < scoresArray.length;i++){
    //         document.getElementById("player-initials").textContent = printscores2[i];
    //     }
    // }else{return;}
}


function startGame(event) {
    time = 60;
    questionIndexEl = 0;
    winner= false;
    endGameScreen.setAttribute('class', 'hidden');
    questionEl.removeAttribute('class');
    page2content.setAttribute('class', 'hidden');
    //set a time for the game duration
    gameTimer();
    // pull a question from the question DB
    pullQuestion();
    startButton.disabled = true; //start button is disabled until the game is finished

}

// function to perform the countdown
function gameTimer() {
    // start timer

    let timerCountdown = setInterval(() => {
        time--;
        gameTime.textContent = time;

        if (time === 0) {
            clearInterval(timerCountdown);
            // output message of time out
            alert('Time is out');
        }

        if (time >= 0) {
            console.log(winner);
            if (winner) {
                clearInterval(timerCountdown);
                displayFinalScreen();// create final screen
                startButton.disabled = false;
            }
        }


        // console.log(time);
    }, 1000);
}

function pullQuestion() {
    let currentQuestion = questions[questionIndexEl];
    console.log(questionIndexEl);
    if (questionIndexEl === questions.length) {
        winner = true;
    } else {
        questionTitle.textContent = currentQuestion.title;
        choicesEl.textContent = '';
        // create question choice for user to choose from
        for (let i = 0; i < currentQuestion.choice.length; i++) {
            let createBtn = document.createElement('button');
            createBtn.setAttribute('class', 'choice');
            createBtn.setAttribute('value', currentQuestion.choice[i]);
            createBtn.textContent = (i + 1) + '. ' + currentQuestion.choice[i];
            // appends current answer Option to the list
            choicesEl.appendChild(createBtn);

        }
    }


}


// check if the btn input is correct
function checkAnswer(event) {
    if (event.target && event.target.classList.contains('choice')) {
        let selectedAnswerValue = event.target.value;
        console.log(questionIndexEl);
        let correctAnswer = questions[questionIndexEl].answer;
        let displayMessage = document.createElement('h3');

        if (selectedAnswerValue === correctAnswer) {
            displayMessage.textContent = 'correct';
            console.log(displayMessage);//debugger
            questionIndexEl++;
            pullQuestion();
        } else {
            displayMessage.textContent = 'wrong';
            console.log(displayMessage);//debugger
            questionIndexEl++;
            time -= 10;
            pullQuestion();
        }
    }
}

//function to display final score screen
function displayFinalScreen() {
    questionEl.setAttribute('class', 'hidden');// hides question <section>
    endGameScreen.removeAttribute('class');//remove 'hidden' attribute from endGameScreen var
    finalScore.textContent = time; // displays final score in the screen
    }    

// function to store scoreboard
// function highscoreStorage(event) {
//     let user = {
//         initials: initials.value.trim(),
//         userScore: time.value,
//     }

//     localStorage.setItem("user", JSON.stringify(user));

// }
let scoresArray = JSON.parse(localStorage.getItem('scoresArray')) || [];

submitButton.addEventListener('click', (event) =>{
    endGameScreen.setAttribute('class', 'hidden');
    event.preventDefault();
    
    
    

    let newScore = {
        initials: initials.value.trim(),
        userScore: time,
    }
    scoresArray.push(newScore);
    localStorage.setItem("scoresArray", JSON.stringify(scoresArray))
    
});

document.addEventListener('click', checkAnswer);
