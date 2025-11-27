console.log("Task 1");
console.log("Task 2");
console.log("Task 3");

console.log("----------------------------------------------");

console.log("Message 1");

setTimeout(() => {
  console.log("Message 2 after 2 seconds");
}, 2000);

console.log("Message 3");

console.log("----------------------------------------------");

let count = 0;

const intervalId = setInterval(() => {
  console.log("Loading...");
  count++;

  // Stop after 5 seconds (5 intervals)
  if (count === 5) {
    clearInterval(intervalId);
    console.log("Loaded successfully!");
  }
}, 1000);


console.log("Begin");

setTimeout(() => {
  console.log("Timeout Task");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise Task");
});

console.log("End");

console.log("----------------------------------------------");

const readline = require("readline");

// Setup input stream
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

// Ask user for countdown time
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter number of seconds for countdown: ", (input) => {
  let timeLeft = parseInt(input);

  if (isNaN(timeLeft) || timeLeft <= 0) {
    console.log("Please enter a valid positive number.");
    rl.close();
    process.exit();
  }

  console.log(`Countdown starts from ${timeLeft} seconds...`);
  console.log('Press "s" anytime to stop.');

  // Countdown using setInterval
  const timerId = setInterval(() => {
    console.log(`Time left: ${timeLeft}`);
    timeLeft--;

    if (timeLeft < 0) {
      clearInterval(timerId);
      console.log("Countdown Complete!");
      process.exit();
    }
  }, 1000);

  // Detect key press with setTimeout
  process.stdin.on("keypress", (str, key) => {
    setTimeout(() => {    // delayed check
      if (key.name === "s") {
        clearInterval(timerId);
        console.log("Countdown stopped by user.");
        process.exit();
      }
    }, 50);
  });

});


