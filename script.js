// let hehe = alert("You will write random number");
// let hehehe = alert("Because why not🤣");

// let ugaday = +prompt("Write a random number");

// console.log(ugaday);

// let mathes = Math.floor(Math.random() * 10);
// console.log(mathes);

// if (ugaday === mathes) {
//   alert("That is correct!😊");
// } else {
//   alert("Oh no! This is incorrect😭");
// }

let compColorRandom = ["Red", "Blue", "Yellow", "Green"];

let score = 0;

function startGame() {
  let choiseComp = prompt("Rang Tangla");
  let random = Math.floor(Math.random() * compColorRandom.length);
  let resRandom = compColorRandom[random];
  console.log(resRandom);

  if (choiseComp === resRandom) {
    alert("Siz Yuttingiz🎉");
    score++;
  } else {
    alert("Yooooooooooooooooq😭😭😭");
  }

  // Ask if the user wants to play again
  let playAgain = confirm("Do you want to play again?");
  if (playAgain) {
    startGame(); // Restart the game if the user wants to play again
  } else {
    alert("Game over! Your final score is: " + score);
  }
}

startGame();
