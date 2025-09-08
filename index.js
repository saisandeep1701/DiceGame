let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomDiceImage = "dice" + randomNumber1 + ".png";
let randomImageSource = "./" + randomDiceImage ;
document.querySelector(".img1").setAttribute("src",randomImageSource );

let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let randomDiceImage2 = "dice" + randomNumber2 + ".png";
let randomImageSource2 = "./" + randomDiceImage2 ;
document.querySelector(".img2").setAttribute("src",randomImageSource2 );
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="Player1 Wins";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML="Player2 Wins";

}
else{
    document.querySelector("h1").innerHTML="Draw";
}
