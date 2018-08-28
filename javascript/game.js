
var gameStarted = false;        //game begins
var gameOver = false;           //game ends
var wins = 0;                   // wins set to 0
var losses = 0;                 // losses set to 0
var totalNumbers = 0;           //numbers as they are added by the player
var guessNumbers = [];          //numbers player will guess with crystals


//Number to match = random-number
//Your score = total-score
//Wins = wins
//Losses = losses


//function to create a random number the user needs to guess between 100 and 30
$(document).ready(function(){
    var rand = Math.floor(Math.random()* 70) + 30;
    //var rand = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    $('#random-number').text(rand);
    console.log(rand);
    crystalNumbers();
 

//develop a for-loop to create random numbers for each crystal (4)
function crystalNumbers (){
    for (var i = 0; i < 4; i++){
        var newNumber = Math.floor(Math.random() * 10 + 1);
        guessNumbers.push(newNumber);
    }
};


//resetting game if won -- this function is not working YET
function resetGameWin() {
    totalNumbers == rand;
    gameStarted = false;
    wins++;
    //guessNumbers = [];
    $(wins).text(wins);

}
//resetting game if lost -- this function is not working YET
function resetGameLost() {
    totalNumbers > rand;
    gameStarted = false;
    losses++;
    //guessNumbers = [];
    $(losses).text(losses);
};


//crystal clicks generate a random number from for-loop above (must index the numbers to get a different number for each one)
$('#img1').on ('click', function(){
    //total of the numbers the player has clicked thus far + the number of the crystal clicked
    totalNumbers = totalNumbers + guessNumbers[0];
    console.log("total=" + totalNumbers);
    $('#total-score').text(totalNumbers);
    //run validate function to determine if player won or lost on each click	
    validateCheck();
})

$('#img2').on ('click', function(){
    totalNumbers = totalNumbers + guessNumbers[1];
    console.log("total=" + totalNumbers);
    $('#total-score').text(totalNumbers);
    validateCheck();	
})

$('#img3').on ('click', function(){
    totalNumbers = totalNumbers + guessNumbers[2];
    console.log("total=" + totalNumbers);
    $('#total-score').text(totalNumbers);
    validateCheck();
})

$('#img4').on ('click', function(){ 
    totalNumbers = totalNumbers + guessNumbers[3];
    console.log("total=" + totalNumbers);
    $('#total-score').text(totalNumbers);
    validateCheck();	
})

//Validate that the pkayer has won/lost, alert them, and restart the game (still working on reset)
function validateCheck() {
    //players number must equal random number
    if (totalNumbers == rand){
        $("#total-score").append(" You win!");
        //add wins score
        wins++;
        $('#wins').text(wins);
        resetGameWin();
    } else {
        if (totalNumbers > rand){
        $("#total-score").append(" You lose!");
        //add losses score
        losses++;
        $('#losses').text(losses);
        resetGameLost();
        }
    }       
    
};


//Update Display
$('#wins').text(wins);
$('#losses').text(losses);

});
