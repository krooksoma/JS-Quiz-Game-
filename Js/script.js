let startButton = document.querySelector('#start-button');
let gameTime = document.querySelector('#countdown');
let questionEl = document.querySelector('#question');
let choicesEl = document.querySelector('#user-choices');
let questionTitle = document.querySelector('#question-title');
let answerBtn = document.querySelector('.choice');
let displayMessage = document.querySelector('#display-message');



// addEventListener detects click on Start Button and calls the function startGame
startButton.addEventListener('click', startGame);

let questionIndexEl = 0;
let time = 60;


// execution

function startGame() {
    //set a time for the game duration
    gameTimer();
    questionEl.removeAttribute('class');
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
            clearInterval(timerCountdown)
            // output message of time out
            alert('Time is out');
        }
        

        // console.log(time);
    }, 1000);
}

function pullQuestion() {
    let currentQuestion = questions[questionIndexEl];
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


// check if the btn input is correct
function checkAnswer(event) {
    if(event.target && event.target.classList.contains('choice')){
    let selectedAnswerValue = event.target.value;
    let correctAnswer = questions[questionIndexEl].answer;
    let displayMessage = document.createElement('h3');

    if (selectedAnswerValue === correctAnswer) {
        displayMessage.innerHTML = "Correct";
        console.log(displayMessage);
        questionIndexEl++;
        pullQuestion();
    } else {
        displayMessage.textContent = "Wrong!";
        questionIndexEl++;
        time -= 10;
        pullQuestion();
    }
    }
}


document.addEventListener('click', checkAnswer);