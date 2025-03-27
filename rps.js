let pc_pick = "";

let Wins = 0;
let Ties = 0;
let Losses = 0;

function CompPICK() {
    let rand = Math.random();
    if (rand < 0.33) {
        pc_pick = "Rock";
    } else if (rand < 0.66) {
        pc_pick = "Paper";
    } else {
        pc_pick = "Scissors";
    }
    return pc_pick;
}

function playRock() {
    CompPICK();
    if (pc_pick === "Rock") {
        Ties += 1;
        gamedisc("Tie");
    } else if (pc_pick === "Paper") {
        Losses += 1;
        gamedisc("Lose");
    } else if (pc_pick === "Scissors") {
        Wins += 1;
        gamedisc("Win");
    }
    UpdateScreen();
}

function playPaper() {
    CompPICK();
    if (pc_pick === "Rock") {
        Wins += 1;
        gamedisc("Win");
    } else if (pc_pick === "Paper") {
        Ties += 1;
        gamedisc("Tie");
    } else if (pc_pick === "Scissors") {
        Losses += 1;
        gamedisc("Lose");
    }
    UpdateScreen();
}

function playScissors() {
    CompPICK();
    if (pc_pick === "Rock") {
        Losses += 1;
        gamedisc("Lose");
    } else if (pc_pick === "Paper") {
        Wins += 1;
        gamedisc("Win");
    } else if (pc_pick === "Scissors") {
        Ties += 1;
        gamedisc("Tie");
    }
    UpdateScreen();
}

function UpdateScreen() {
    let winelement = document.querySelector(".Wins");
    winelement.innerHTML = `Wins: ${Wins}`;
    let Losseselement = document.querySelector(".Losses");
    Losseselement.innerHTML = `Losses: ${Losses}`;
    let Tieselement = document.querySelector(".Ties");
    Tieselement.innerHTML = `Ties: ${Ties}`;
}

function gamedisc(para) {
    let gamediscElement = document.querySelector(".gamedisc");
    if (para === "Win") {
        gamediscElement.innerHTML = `<p>Computer Picked: <span>!${pc_pick}!</span> so YOU WON!</p>`;
    } else if (para === "Lose") {
        gamediscElement.innerHTML = `<p>Computer Picked: <span>!${pc_pick}!</span> so YOU LOST! 😂</p>`;
    } else if (para === "Tie") {
        gamediscElement.innerHTML = `<p>Computer Picked: <span>!${pc_pick}!</span> so Game is TIED!</p>`;
    }
}
function reset(){

Wins = 0;
Ties = 0;
Losses = 0;
 }