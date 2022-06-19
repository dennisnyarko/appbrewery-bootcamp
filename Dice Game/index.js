
//Generating random numbers from 1-6
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

//Selecting image from dice1.png - dice6.png
var randomImageSource1 = "images/dice" + "randomNumber + ".png";

//Changing image randomly
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource1);




var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


//if player 1 wins
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 wins";
}

else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 wins";
}

else{
    document.querySelector("h1").innerHTML = "Draw";
}
