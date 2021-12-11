// let count = document.getElementById("counter-el");

// const myAge = 30;
// const humanDogRatio = 7;
// const myDogAge = myAge * humanDogRatio;

// console.log(myDogAge);

// let bonusPoints = 50;
// bonusPoints = bonusPoints + 50;
// console.log(bonusPoints);

// bonusPoints = bonusPoints - 75;
// console.log(bonusPoints);

// bonusPoints = bonusPoints + 45;
// console.log(bonusPoints);

// function increment() {
//   console.log("The button was clicked");
// }

// 26:53

// function countDown() {
//   console.log(5);
//   console.log(4);
//   console.log(3);
//   console.log(2);
//   console.log(1);
// }

// countDown();

// function fourTwo() {
//   console.log(42);
// }

// fourTwo();

// let lap1 = 34;
// let lap2 = 33;
// let lap3 = 36;

// function addLaps() {
//   //console.log(lap1 + lap2 + lap3);
//   let totalLapTime = lap1 + lap2 + lap3;
//   console.log(totalLapTime);
// }

// addLaps();

// let lapsCompleted = 0;

// function completeLap() {
//   lapsCompleted = lapsCompleted + 1;
// }

// completeLap();
// completeLap();
// completeLap();

// console.log(lapsCompleted);

//40:18

let countEl = document.getElementById("counter-el");
const incrementBtn = document.getElementById("increment-btn");
const decrementBtn = document.getElementById("decrement-button");

let count = 0;

incrementBtn.addEventListener("click", increment);
decrementBtn.addEventListener("click", decrement);

function increment() {
  count = count + 1;
  countEl.innerText = count;
}

function decrement() {
  count = count - 1;
  countEl.innerText = count;
}
