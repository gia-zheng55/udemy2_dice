var randomDice1 = Math.floor(Math.random() * 6) + 1;

var randomImage1 = "dice" + randomDice1 + ".png";

var randomImageSource1 = "images/" + randomImage1;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource1);

var randomDice2 = Math.floor(Math.random() * 6) + 1;

var randomImage2 = "dice" + randomDice2 + ".png";

var randomImageSource2 = "images/" + randomImage2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);

if(randomDice1 > randomDice2){
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
else if(randomDice1 < randomDice2){
  document.querySelector("h1").innerHTML = "Play 2 Wins! 🚩";
}
else{
  document.querySelector("h1").innerHTML = "Draw";
}
