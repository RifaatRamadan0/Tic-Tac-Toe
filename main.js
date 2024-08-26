let all_td = document.querySelectorAll("td");
let table = document.querySelector("table");
let result = document.querySelector(".container .result");
let startAgain = document.querySelector(".container .result input");
let winner = document.querySelector(".container .result h1");
let winnerOutput = document.querySelector(".container .result h3");

let column1 = document.querySelectorAll("td:nth-child(1)");
let column2 = document.querySelectorAll("td:nth-child(2)");
let column3 = document.querySelectorAll("td:nth-child(3)");

let row1 = document.querySelectorAll("tr:nth-child(1) td");
let row2 = document.querySelectorAll("tr:nth-child(2) td");
let row3 = document.querySelectorAll("tr:nth-child(3) td");

let diagonal1 = document.querySelectorAll(".diagonal1");
let diagonal2 = document.querySelectorAll(".diagonal2");

let input = "O";

all_td.forEach((td) => {
    
    td.addEventListener("click", () => {

        if(td.textContent === ""){
            input === "X" ? input = "O" : input = "X";
            td.textContent = input;
            td.style.backgroundColor = "transparent";
            checkWin();
        } 
        else {
            return false;
        }


  });
});

function checkWin(){

    if (Array.from(column1).every((td) => td.textContent === "X") || Array.from(column1).every((td) => td.textContent === "O")){
        winnerResult();
    } else if (Array.from(column2).every((td) => td.textContent === "X") || Array.from(column2).every((td) => td.textContent === "O")){
        winnerResult();
    }
    else if (Array.from(column3).every((td) => td.textContent === "X") || Array.from(column3).every((td) => td.textContent === "O")){
        winnerResult();
    }
    else if (Array.from(row1).every((td) => td.textContent === "X") || Array.from(row1).every((td) => td.textContent === "O")){
        winnerResult();
    }
    else if (Array.from(row2).every((td) => td.textContent === "X") || Array.from(row2).every((td) => td.textContent === "O")){
        winnerResult();
    }
    else if (Array.from(row3).every((td) => td.textContent === "X") || Array.from(row3).every((td) => td.textContent === "O")){
        winnerResult();
    } 
    else if (Array.from(diagonal1).every((td) => td.textContent === "X") || Array.from(diagonal1).every((td) => td.textContent === "O")){
        winnerResult();
    } 
    else if (Array.from(diagonal2).every((td) => td.textContent === "X") || Array.from(diagonal2).every((td) => td.textContent === "O")) {
        winnerResult();
    } else if (Array.from(all_td).every((td) => td.textContent === "X" || td.textContent === "O")){
        noWinnerResult();
    }
}

function winnerResult() {
    all_td.forEach((td) => {
        
        setTimeout(() => {
            td.textContent = "";
            td.style.width = "0px";
            td.style.transition = "width 1s";
        }, 1000);
        setTimeout(() => {
            winnerMessage();
        }, 1500);
    });

}
function noWinnerResult(){
    all_td.forEach((td) => {
        setTimeout(() => {
            td.textContent = "";
            td.style.width = "0px";
            td.style.transition = "width 1s";
        }, 500);
        setTimeout(() => {
            noWinnerMessage();
        }, 1500);
    });
}
function noWinnerMessage() {
    winnerOutput.textContent = "No Winner";
    winner.textContent = "X O";
    table.style.display = "none";
    result.style.display = "flex";
    startAgain.onclick = restart;
}

function winnerMessage(){
    table.style.display = "none";
    result.style.display = "flex";
    winner.textContent = input;
    winnerOutput.textContent = "Is The Winner";
    startAgain.onclick = restart;
}

function restart(){
    input = "O";
    result.style.display = "none";
    table.style.display = "block";
    all_td.forEach((td) => {
        td.style.width = "100px";
        td.style.backgroundColor = "";
    });
}