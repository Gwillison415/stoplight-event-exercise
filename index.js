(function() {
  'use strict';

  document.getElementById("goButton").addEventListener("mousedown", fireGreenLight);

  document.getElementById("slowButton").addEventListener("mousedown", fireYellowLight);

  document.getElementById("stopButton").addEventListener("mousedown", fireRedLight);

  function fireRedLight() {
    //console.log("red fired");  //must find out why fires twice per mousedown
       document.getElementById('stopLight').style.backgroundColor = "red";
    }
  function fireYellowLight() {
      document.getElementById('slowLight').style.backgroundColor = "yellow";
  }
  function fireGreenLight() {
      document.getElementById('goLight').style.backgroundColor = "green";
  }
  // test in console whether or not a particular event was fired
  let button = document.querySelectorAll('.button');
  for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('mousedown', function(event) {
      console.log(button[i].id, "event fired");
    })
  }
}

)();
