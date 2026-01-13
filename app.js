let userScore = 0;
let compScore = 0;

const choices =document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#computer-score");


const genCompChoice =()=>{
    const options = ["fire", "leaf", "water"];
    const randomMath = Math.floor(Math.random()*3);
    return options[randomMath];

}
const showWinner = (userWin, userChoice, compChoice )=>{
    if (userWin){
      
        userScore++;
        userScorePara.innerText = userScore
    
        msg.innerText ="You win! Your  " +  userChoice  +  " beats " +  compChoice;
        msg.style.backgroundColor = "green";
    }
    else{
         compScore++;
         compScorePara.innerText = compScore;
        msg.innerText ="You lose! " +  compChoice  +  " beat  your "  +  userChoice;
         msg.style.backgroundColor = "red";
    }
}
const drawGame = () =>{
    msg.innerText ="Game was draw, play again!";
     msg.style.backgroundColor = "blue";
}

const playGame= (userChoice) =>{
    console.log("user choice =", userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice =", compChoice);
    if (userChoice===compChoice){
        drawGame();
        return;
    }
    let userWin = true;
    if(userChoice==="fire"){
        userWin = compChoice ==="leaf" ? true:false;
    }
    else if(userChoice==="leaf"){
        userWin = compChoice === "water"? true:false;
    }
    else{
        userChoice==="water";
        userWin = compChoice === "fire" ? true:false;
    }
    showWinner(userWin, userChoice, compChoice);
};



choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const userChoice= choice.getAttribute("id");
        playGame(userChoice);
    });
});