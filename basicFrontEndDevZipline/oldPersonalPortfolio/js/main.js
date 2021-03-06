(function(){
  $(document).ready(function(){

    // unlock the vault
    $('.vault').on('click', function() {
    $('#cover').css('background-image', 'url(../images/cosmic.jpg)').fadeOut("slow",function() {
        $(this).fadeIn();
      });
      $('#cover').css('background-position', 'fixed');
    });

    // ********* hide navbar *********
    // credits to Marius Craciunoiu
    // *******************************
    var scrolling;
    var lastScrollTop = 0,
        scrollTrigger = 5,
        navbarHeight = $('nav').outerHeight();

    // set scrolling to true if user scrolls
    $(window).scroll(function(e) {
      scrolling = true;
    });

    // run hideOrShow function when scrolling is detected
    setInterval(function() {
      if (scrolling) {
        hideOrShowNavbar();
        scrolling = false;
      }
    }, 250);

    function hideOrShowNavbar() {
      var scrollPosition = $(this).scrollTop();
      // ******** Stats ********
      // console.log('lastST' + lastScrollTop);
      // console.log('scrollP' + scrollPosition);
      // console.log('navbarH' + navbarHeight);
      // console.log('winH' + $(window).height());
      // console.log('docH' + $(document).height());
      // console.log('----------------------------');

      if (Math.abs(lastScrollTop - scrollPosition) <= scrollTrigger) {
        return;
      }

      // scroll down and scroll past navbar height
      if ((scrollPosition > lastScrollTop) && (scrollPosition > navbarHeight)) {
        // hide navbar
        $('nav').addClass('nav-up');
      } else {
        if ((scrollPosition + $(window).height()) < $(document).height()) {
          $('nav').removeClass('nav-up');
        }
      }
      lastScrollTop = scrollPosition;
    }
    // ********* end hide navbar *********

    // ********* make navbar links active *********
    // On page load or screen resize, grap window top of Home, About, Portfolio, Links
    // Give each one a number like 1, 2, 3, 4 and make checks to that number
    // SP 0 Home 868 About 1311 Portfolio 2161 Links
    // var $home = $('#cover'),
    //     $about = $('#about'),
    //     $portfolio = $('#portfolio'),
    //     $links = $('#links');
    // var lastActiveClass = $home,
    //     currentClass;

    // // Home
    // if (scrollPosition < 868) {
    //   currentClass = $home;
    // } else if ((scrollPosition >= 868) && (scrollPosition < 1311)) {
    //   currentClass = $about;
    // } else if ((scrollPosition >= 1311) && (scrollPosition < 2161))

    // function checkLastActiveClass(activeClass) {
    //   if (activeClass !== lastActiveClass) {
    //     lastActiveClass = activeClass;
    //   }
    //   return lastActiveClass;
    // }
    // ********* end navbar links active *********
  });  // end doc ready
}());  // end iffy