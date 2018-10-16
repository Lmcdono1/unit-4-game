var gameStarted = false;        //game begins
var gameOver = false;           //game ends
var wins = 0;                   // wins set to 0
var losses = 0;                 // losses set to 0
var totalNumbers = 0;           //numbers as they are added by the player
var guessNumbers = [];          //numbers player will guess with crystals
var rand = 0;

//Number to match = random-number
//Your score = total-score
//Wins = wins
//Losses = losses


//function to create a random number the user needs to guess between 100 and 30
$(document).ready(function(){
    crystalNumbers();
    
 

//develop a for-loop to create random numbers for each crystal (4)
function crystalNumbers (){

    rand = Math.floor(Math.random()* 41)+ 30;
    //var rand = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    $('#random-number').text(rand);
    console.log(rand);
    for (var i = 0; i < 4; i++){
        var newNumber = Math.floor(Math.random() * 10) + 1;
        console.log(newNumber);
        guessNumbers.push(newNumber);
    }
    gameStarted = true;
    $('#total-score').text(totalNumbers);
};


//resetting game if won 
function resetGameWin() {
    gameStarted = false;
    wins++;
    //guessNumbers = [];
    totalNumbers = 0;
    $('#wins').text(wins);
}
//resetting game if lost
function resetGameLost() {
    gameStarted = false;
    losses++;
    //guessNumbers = [];
    totalNumbers = 0;
    $('#losses').text(losses);
};


//crystal clicks generate a random number from for-loop above (must index the numbers to get a different number for each one)

function calculateScore(numberValue){
    if (gameStarted == false){
        console.log("gameNotStarted");
        crystalNumbers();
    } else {
        totalNumbers = totalNumbers + numberValue;
    console.log("total=" + totalNumbers);
    $('#total-score').text(totalNumbers);
    validateCheck();
    }

}

$('#img1').on ('click', function(){
   calculateScore(guessNumbers[0]);
})

$('#img2').on ('click', function(){
    calculateScore(guessNumbers[1]);
})

$('#img3').on ('click', function(){
    calculateScore(guessNumbers[2]);
})

$('#img4').on ('click', function(){ 
    calculateScore(guessNumbers[3]);	
})

//Validate that the pkayer has won/lost, alert them, and restart the game (still working on reset)
function validateCheck() {
    //players number must equal random number
    if (totalNumbers == rand){
        $("#total-score").append(" You win!");
        //add wins score
        
        resetGameWin();
    } else {
        if (totalNumbers > rand){
        $("#total-score").append(" You lose!");
        
        resetGameLost();
        }
    }       
    
};


//Update Display
$('#wins').text(wins);
$('#losses').text(losses);

});

