(function(){
  $(document).ready(function(){

    // hide navbar 
    // credits to Marius Craciunoiu
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
      console.log('lastST' + lastScrollTop);
      console.log('scrollP' + scrollPosition);
      console.log('navbarH' + navbarHeight);
      console.log('winH' + $(window).height());
      console.log('docH' + $(document).height());

      if (Math.abs(lastScrollTop - scrollPosition) <= scrollTrigger) {
        return;
      }

      // scroll down and scroll past navbar height
      if ((scrollPosition > lastScrollTop) && (scrollPosition > navbarHeight)) {
        // hide navbar
        $('nav').addClass('nav-up');
        console.log('nav-up');
      } else {
        if ((scrollPosition + $(window).height()) < $(document).height()) {
          $('nav').removeClass('nav-up');
          console.log('nav-down');
        }
      }
      lastScrollTop = scrollPosition;
    }

    // document.createElement('section');
    // // cache the window object
    // $window = $(window);

    // $('section[data-type="background"]').each(function(){
    //   // declare the variable to affect the defined data-type
    //   var $scroll = $(this);

    //   $(window).scroll(function(){
    //     // negative values because scrolling upwards
    //     // scrollTop gets the vertical position of the scrollbar
    //     var yPos = -($window.scrollTop() / $scroll.data('speed'));

    //     // background position
    //     var coords = '50%' + yPos + 'px';

    //     // move the background
    //     $scroll.css({ backgroundPosition: coords });
      
    //   }); // end window scroll
    // });  // end section function
  });  // end doc ready
}());  // end iffy