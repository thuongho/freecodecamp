(function(){
  $(document).ready(function(){

    document.createElement('section');
    // cache the window object
    $window = $(window);

    $('section[data-type="background"]').each(function(){
      // declare the variable to affect the defined data-type
      var $scroll = $(this);

      $(window).scroll(function(){
        // negative values because scrolling upwards
        // scrollTop gets the vertical position of the scrollbar
        var yPos = -($window.scrollTop() / $scroll.data('speed'));

        // background position
        var coords = '50%' + yPos + 'px';

        // move the background
        $scroll.css({ backgroundPosition: coords });
      
      }); // end window scroll
    });  // end section function
  });  // close out script
}());