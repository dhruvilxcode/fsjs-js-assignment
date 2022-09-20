// score
let compScore = 0;
let userScore = 0;

const userScoreVal = document.querySelector("#userScoreVal")
const compScoreVal = document.querySelector("#compScoreVal")

// choice
const resultUserStatElement = document.querySelector("#result-user-stat")
const resultCompStatElement = document.querySelector("#result-comp-stat")
const resultFinalStatElement = document.querySelector("#result-final-stat")

// buttons
const rockBtn = document.querySelector("#r");
const papperBtn = document.querySelector("#p");
const scissorsBtn = document.querySelector("#s");

const choices = ["rock", "paper", "scissors"];

rockBtn.addEventListener('click', function(){
    const userChoice = choices[0];
    resultUserStatElement.innerText = `User: ${userChoice}`;

    const compChoice = computerChoice();
    resultCompStatElement.innerText = `Computer: ${compChoice}`;

    showResult(userChoice, compChoice);
});

papperBtn.addEventListener('click', function(){
    const userChoice = choices[1];
    resultUserStatElement.innerText = `User: ${userChoice}`;

    const compChoice = computerChoice();
    resultCompStatElement.innerText = `Computer: ${compChoice}`;

    showResult(userChoice, compChoice);
});

scissorsBtn.addEventListener('click', function(){
    const userChoice = choices[2];
    resultUserStatElement.innerText = `User: ${userChoice}`;

    const compChoice = computerChoice();
    resultCompStatElement.innerText = `Computer: ${compChoice}`;

    showResult(userChoice, compChoice);
});

function computerChoice() {
    const choice = choices[Math.floor(Math.random() * choices.length)];

    return choice;
}

function showResult(userChoice, computerChoice) {

    // tie
    if(userChoice === computerChoice) {
        resultFinalStatElement.innerText = "Winner: Tie";
        return;
    }
    
    // scissors -> paper
    if(userChoice === choices[2] && computerChoice === choices[1]) {
        userScore += 1;
        userScoreVal.innerText = userScore;
        resultFinalStatElement.innerText = "Winner: You";
        return;
    }
    
    // paper -> rock
    else if(userChoice === choices[1] && computerChoice === choices[0]) {
        userScore += 1;
        userScoreVal.innerText = userScore;
        resultFinalStatElement.innerText = "Winner: You";
        return;
    }

    // rock -> scissors or scissors -> rock
    else if((userChoice === choices[0] && computerChoice === choices[2]) || (userChoice === choices[2] && computerChoice === choices[0]) ) {
        resultFinalStatElement.innerText = "Winner: - ";
        return;
    }
    
    else {
        compScore += 1;
        compScoreVal.innerText = compScore;
        resultFinalStatElement.innerText = "Winner: Computer";
        return;
    }

}