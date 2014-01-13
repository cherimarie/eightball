function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInt(1, 7));

function findAnswer(){
  //set all answers back to class that does not display
  var answers = document.getElementsByTagName("p");
  for(var i = 0; i < answers.length; i++){
    answers[i].className = "answer"; 
  }

  //trigger shaking animation
  shake("theball"); 

  //generate random-ish number, let it determine which answer will show, change its class name to one that displays. wait 910 milliseconds so shaking animation can end.
  var rando = getRandomInt(1, 7);
  setTimeout(function () {
    document.getElementById("answer" + rando).className = "answeryes"; 
  }, 1000);
  
}

function shake(id){
  //make the ball "shake" by changing image's class repeatedly to ones that display to the left and right 
  var ball = document.getElementById(id);
  ball.className = "theballR";
  setTimeout(function () {
    ball.className = "";
    ball.className = "theballL";
  }, 150);
  setTimeout(function () {
    ball.className = "";
    ball.className = "theballR";
  }, 300);
  setTimeout(function () {
    ball.className = "";
    ball.className = "theballL";
  }, 450);
  setTimeout(function () {
    ball.className = "";
    ball.className = "theballR";
  }, 600);
  setTimeout(function () {
    ball.className = "";
    ball.className = "theballL";
  }, 750);
  setTimeout(function () {
    ball.className = "";
    ball.className = "theballC";
  }, 900);


 
}