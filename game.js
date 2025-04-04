let modebtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currmode = "light";
modebtn.addEventListener("click", () =>{
    if(currmode === "light"){
        currmode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");

    }else {
        currmode = "light";
        body.classList.add("light");
        body.classList.remove("dark");

    }
    console.log(currmode);
})

let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user_score");
const compScorePara = document.querySelector("#comp_score");


const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    //rock,paper, scissors
    const randIx = Math.floor(Math.random() * 3);
    return options[randIx];
};

const drawGame = () => {
    msg.innerText = "Game was Draw Play Again";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win. Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose. ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    // Genrate Computer choice
    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);


    if(userChoice === compChoice){
        // Draw game
        drawGame();
    } else {
        userWin = true;
        if(userChoice === "rock") {
            // scissors, paper
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper") {
            // rock,scissors
            userWin = compChoice === "scissors" ? false : true;
        } else {
            //rock,paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach ((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});