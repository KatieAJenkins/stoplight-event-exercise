/*
  Write JS to make this stoplight work.

  When I click on the 'stop' button,
    the top light should turn red.
  When I click on the 'slow' button
    the middle light should turn orange.
  When I click on the 'go' button
    the bottom light should turn green.
*/

stopButton.addEventListener('mouseover', function() {
  console.log("Entered stopButton button");
});

stopButton.addEventListener('mouseout', function() {
  console.log("Left stopButton button");
});

slowButton.addEventListener('mouseover', function() {
  console.log("Entered slowButton button");
});

slowButton.addEventListener('mouseout', function() {
  console.log("Left slowButton button");
});

goButton.addEventListener('mouseover', function() {
  console.log("Entered goButton button");
});

goButton.addEventListener('mouseout', function() {
  console.log("Left goButton button");
});

var logText = function (event) {
  console.log(event.target.textContent);
}

controls.addEventListener('click', logText);
