 (function() {
  'use strict';

  document.getElementById("goButton").addEventListener("mousedown", toggleGreenLight);

  document.getElementById("slowButton").addEventListener("mousedown", toggleYellowLight);

  document.getElementById("stopButton").addEventListener("mousedown", toggleRedLight);
  var countr = 0;
  function toggleRedLight() {
    //console.log("red fired");  //must find out why fires twice per mousedown

    let cssClassToTarget = event.target.innerText.toLowerCase();
    document.getElementById('stopLight').classList.toggle(cssClassToTarget);
    }
  function toggleYellowLight() {
    let cssClassToTarget = event.target.innerText.toLowerCase();
    document.getElementById('slowLight').classList.toggle(cssClassToTarget);
  }
  function toggleGreenLight() {
    let cssClassToTarget = event.target.innerText.toLowerCase();
    document.getElementById('goLight').classList.toggle(cssClassToTarget);
  }
  // test in console whether or not a particular event was fired
  let button = document.querySelectorAll('.button');
  console.log(button);
  for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('mouseenter', function(event) {
      console.log(button[i].id, "event entered");
    })
  }
  for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('mouseleave', function(event) {
      console.log(button[i].id, "event left");
    })
  }
}

)();
