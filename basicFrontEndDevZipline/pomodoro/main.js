(function(){
  // "use strict";
  $(document).ready(function(){

    var $clock = $('#clock');
    var $clockName = $clock.find('h2');
    var $clockTimer = $("#countDown");
    var $breakTime, $sessionTime;
    var timerMinutes, 
        timerSeconds = 00;

    var startStopClock = timerCountDownTrigger();

    $(".timer button").on("click", function() {

      // update input value depending on + or -
      var $buttonPlusMinusValue = $(this)[0].value,
          $targetInput = $(this)[0].parentNode.children[2],
          $targetParentID = $(this)[0].parentNode.id;

      $sessionTime = parseInt($targetInput.value, 10);
          // breakTime = parseInt();

      if ($buttonPlusMinusValue === "+") {
        // 25 min max
        if ($sessionTime < 25) {
          $sessionTime += 1;
        }
      } else {
        // 1 min min
        if ($sessionTime > 1) {
          $sessionTime -= 1;
        }
      }
      
      // Update the input value with button click
      $targetInput.value = $sessionTime;

      if ($targetParentID === "session") {
        $clockTimer.text($sessionTime);
      }
    });  // end timer button handler


    // timer countdown
    function timerCountDownTrigger() {

      timerMinutes = parseInt($clockTimer.text());

      return window.setInterval(function() {
        displayTimeOnClock(timerMinutes, timerSeconds);
        timerSeconds -= 1;
        
        // subtrack minute when seconds hit 0
        if (timerSeconds < 00) { 
          // timerSeconds = 59;
          timerMinutes -= 1;
          timerSeconds = 3;
        }
        switchBetweenSessionAndBreak();
      }, 1000);
    }  // end timerCountDownTrigger

    function padWithZero(num) {
      num = num.toString();
      if (num.length < 2) {
        num = "0" + num;
      }
      return num;
    } // end paddWithZero

    function displayTimeOnClock(min, sec) {
      $clockTimer.text(padWithZero(min) + ':' + padWithZero(sec));
    } // end displayTimeOnClock

    function switchBetweenSessionAndBreak() {
      if (timerMinutes < 0) {
        // switch btwn session/break when time reaches 00:00
        if ($clock.hasClass('breakTime')) {
          $clockName.text('Session Time');
          $sessionTime = $('#session').find('input').val();
          timerMinutes = $sessionTime;
        } else {
          $clockName.text('Break Time');
          $breakTime = $("#break").find('input').val();
          timerMinutes = $breakTime;
        }
        $clock.toggleClass('breakTime');
        timerSeconds = 00;
      }
    }

    function pauseTimer(clockToPause) {
      timerMinutes = $()
    }
    
    $clock.on("click", function() {
      
      $clock.toggleClass("startTimer");

      if ($clock.hasClass("startTimer")) {
        startStopClock;
        console.log('timer starts...');
      } else {
        window.clearInterval(startStopClock);
        console.log("timer stops...");
      }
    });// end clock click function

    $('.clearTime').on('click', function() {
      window.clearInterval(startStopClock);
    });
  });  // end doc ready
})();  // end iffy