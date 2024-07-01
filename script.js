let choices = document.querySelectorAll(".choice");
let userScore = document.querySelector("#user-score");
let compScore = document.querySelector("#comp-score");
let msg = document.querySelector("#msg");

let UScore = 0;
let CScore = 0;

let getCompChoice = () => {
    let ch = ["rock", "paper", "scissors"];
    return ch[Math.floor(Math.random() * 3)];
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        let compChoice = getCompChoice();
        console.log(userChoice);
        console.log(compChoice);

        if (userChoice === compChoice){
            msg.innerText = "It was a draw";
            msg.style.backgroundColor = "rgb(92, 72, 243)"
        }
        else{
            let userWin;
            if (userChoice === "rock")
                userWin = compChoice === "paper" ? false : true;
            else if (userChoice === "paper")
                userWin = compChoice === "scissors" ? false : true;
            else
                userWin = compChoice === "rock" ? false : true;

            if (userWin){
                msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
                msg.style.backgroundColor = "green";
                userScore.innerText = ++UScore;
            }
            else{
                msg.innerText = `You lose. ${compChoice} beats your ${userChoice}`;
                msg.style.backgroundColor = "red";
                compScore.innerText = ++CScore;
            }
        }
    })
})