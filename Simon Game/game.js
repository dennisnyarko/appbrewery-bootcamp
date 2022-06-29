
buttonColors = ["red","blue","green","yellow"];

gamePattern = [];

function nextSequence(){
    var randomNumber = Math.floor(Math.random() * 4) ;
    var randomChosenColor = buttonColors[randomNumber];

    gamePattern.push(randomChosenColor)
}

