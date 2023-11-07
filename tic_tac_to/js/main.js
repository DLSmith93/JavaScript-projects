
//this variable keeps track of whos turn it is
let activePlayer = "X";
//this array stores an array of moves. used to determnine win conditions
let selectedsquares = [];

//this function is for placing an x or an o
function placeXorO(squareNumber){

    if(!selectedsquares.some(element => element.includes(squareNumber))){
        let select = document.getElementById(squareNumber);

        if(activePlayer === "X"){
            select.style.backgroundImage = 'url("images/x.png")';
        }
        else{
            select.style.backgroundImage = 'url("images/o.png")';
        }

        checkWinConditions();

        if(activePlayer === "X"){
            activePlayer = "O";
        }
        else{
            activePlayer = "X";
        }

        audio("./media/place.mp3");

        if(activePlayer === "O"){
            disableClick();
            setTimeout(function () {computersTurn();}, 1000);
        }

        return true;
    }
}