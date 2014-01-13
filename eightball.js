function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInt(1, 7));

function findAnswer(){
  var answers = document.getElementsByTagName("p");

  for(var i = 0; i < answers.length; i++){
    answers[i].className = "answer"; 
  }

  var rando = getRandomInt(1, 7);
  document.getElementById("answer" + rando).className = "answeryes"; 
}