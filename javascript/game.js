
var gameStarted = false;        //game begins
var gameOver = false;           //game ends
var wins = 0;                   // wins set to 0
var losses = 0;                 // losses set to 0
var totalNumbers = 0;           //numbers as they are added by the player
var guessNumbers = [];          //numbers player will guess is set to 0 at start of game


//Number to match = random-number = number
//Your score = total-score = combined
//Wins = wins = numberWins
//Losses = losses = numberLosses


//random number user needs to guess
$(document).ready(function(){
    var rand = Math.floor(Math.random()* 70) + 30;
    //var rand = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    $('#random-number').text(rand);
    console.log(rand);




//random numbers for each crystal
function crystalNumbers (){
    for (var i = 0; i < 4; i++){
        var newNumber = Math.floor(Math.random() * 10 + 1);
        guessNumbers.push(newNumber);


    }
}

crystalNumbers();

//wins
function resetGameWin() {
    wins++;
    $(wins).text(wins);

}
//losses
function resetGameLost() {
    losses++;
    $(losses).text(losses);
}



//crystal clicks
$('#img1').on ('click', function(){
    totalNumbers = totalNumbers + guessNumbers[0];
    console.log("total=" + totalNumbers);
    $('#total-score').text(totalNumbers);	
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

//Validate Check
function validateCheck() {
    if (totalNumbers == rand){
        alert("You win!");
        resetGameWin();
    } else {
        if (totalNumbers > rand){
        alert("You lose!!");
        resetGameLost();
        }
        
    }
}


//Update Display
$('#wins').text(wins);
$('#losses').text(losses);

}); 
