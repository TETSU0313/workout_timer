// Class:        Web Development II
// Instructor:   Ryan Fisher
// Assignment:   Final Project
// Student:      Juan Valencia
// Date:         05/14/2019

// Global Variables
var outputField = document.getElementById('outputField');
var roundsCounter = 0;
var counter = 0;
var roundsPassed = 0;
var timeInput = 0;
var roundsInput = 0;
var timePassed = 0;
var timeReset = true;

// Time digit places function
function zeroPad(num, places) {
  var zero = places - num.toString().length + 1;
  return Array(+(zero > 0 && zero)).join("0") + num;
}

// Time calculation function
function convertSeconds(s) {
  var min = Math.floor(s / 60);
  var sec = s % 60;

  if (min < 10 || min == 0 && sec < 10) {
    return zeroPad(min, 2) + ":" + zeroPad(sec, 2);
  } else {
    return min + ":" + sec;
  }
}

// Time test fuction
function timeTest() {
  timeReset = false;
  createTimer();
}

// Create timer function
function createTimer() {

  // Local variables
  var timeInput = document.getElementById('timeInput').value;
  var roundsInput = document.getElementById('roundsInput').value;
  var timePassed = timeInput;
  var interval = setInterval(timer, 1000);


  // timing computation fuction
  function timer(s) {

    // local variables
    var timeProgression = timePassed - counter;
    var remainder = timeInput / roundsInput;

    // counter iteration
    counter++;

    outputField.innerHTML = convertSeconds(timeProgression);
    // check for time reset
    if (timeReset) {
      clearInterval(interval);
      return;
    }

    // check for rounds
    if (rounds(timeProgression, remainder)) {
      roundsCounter++;
      document.getElementById('roundsOutput').innerHTML = "Round " + roundsCounter;
      console.log("Round " + roundsCounter);
    }

    console.log('this is the time progression: ' + timeProgression);
    console.log('this is the remainder: ' + remainder);

    // clear the interval
    if (counter == timePassed) {
      clearInterval(interval);
      counter = 0;
      document.getElementById('outputField').innerHTML = "00:00";
    }
  }

  // rounds function
  function rounds(num1, num2) {
    if (num1 % num2 == 0) {
      return true;
    } else {
      return false;
    }
  }
}

// reset button fuction
function resetButton() {
  document.getElementById('outputField').innerHTML = "00:00";
  document.getElementById('roundsOutput').innerHTML = "-";
  counter = 0;
  timeReset = true;

}
