(function(){
  // "use strict";
  $(document).ready(function(){

    var $countDown = $("#countDown");
    var $clock = $('#clock');
    var $clockName = $clock.find('h2');
    var breakTimeValue;

    $(".timer button").on("click", function() {

      // update input value depending on + or -
      var $valueOfButton = $(this)[0].value,
          $targetInput = $(this)[0].parentNode.children[2],
          $targetParentID = $(this)[0].parentNode.id;

      var sessionTime = parseInt($targetInput.value, 10);
          // breakTime = parseInt();

      if ($valueOfButton === "+") {
        // 25 min max
        if (sessionTime < 25) {
          sessionTime += 1;
        }
      } else {
        // 1 min min
        if (sessionTime > 1) {
          sessionTime -= 1;
        }
      }
      
      // Update the input value with button click
      $targetInput.value = sessionTime;
      // console.log($clock);
      // console.log("$this: " + $(this));
      // console.log("$targetInput: " + $targetInput);
      // console.log("sessionTime: " + sessionTime);

      // console.log("$targetParentID: " + $targetParentID);
      // console.log("$countDown: " + $countDown);
      // console.log("breakValue: " + breakTimeValue);

      if ($targetParentID === "session") {
        $countDown.text(sessionTime);
      }
    });  // end timer button handler


    // timer countdown
    function timerCountDown(cName) {
      // add css for toggling start/pause
      if (cName === "startTimer") { 

        // display time on click
        var timerMinutes = parseInt($countDown.text());
        var timerSeconds = 00;
        $countDown.text(padWithZero(timerMinutes) + ':' + padWithZero(timerSeconds));
        
        if (timerMinutes > 0) {
          timerMinutes = timerMinutes - 1;
          // timerSeconds = 59; 
          timerSeconds = 6; // testing purpose 
        }

        // live timer countdown
        var secondsCounter = setInterval(function() {
          // subtrack minute when seconds hit 0
          if (timerSeconds < 00) { 
            // clearInterval(secondsCounter); 
            // timerSeconds = 59;
            timerSeconds = 9;
            timerMinutes -= 1;
          }

          // when minutes go below zero
          if (timerMinutes < 00) {
            breakTimeValue = $("#break").find('input').val();
            // console.log(breakTimeValue);

            // change Clock name and change minutes value
            if ($clock.hasClass('breakTime')) {
              $clockName.text('Session Time');
              timerMinutes = $('#session').find('input').val();
            } else {
              $clockName.text('Break Time');
              timerMinutes = $("#break").find('input').val();
            }
            $clock.toggleClass('breakTime');
            timerSeconds = 00;
          }

          $countDown.text(padWithZero(timerMinutes) + ":" + padWithZero(timerSeconds));
          timerSeconds -= 1;
        },1000);

      } else {
        clearInterval(secondsCounter);
      }

    }  // end of timer countdown

    function padWithZero(num) {
      num = num.toString();
      if (num.length < 2) {
        num = "0" + num;
      }
      return num;
    }
    

    $("#clock").on("click", function() {
      $this = $(this);
      $this.toggleClass("startTimer");
      var className = "startTimer";
      timerCountDown(className);
      if ($this.hasClass("startTimer")) {
        
        console.log('yeesh');
      } else {
        console.log("yaaay");
      }
    });// end clock handler
  });  // end doc ready
})();  // end iffy