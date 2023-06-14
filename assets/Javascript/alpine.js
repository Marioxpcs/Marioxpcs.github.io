
$(document).ready(function() {
    // Add a hover function to the .discover-button1 element
    $('.discover-button1').hover(function() {
      // On hover in, fade the element in over 0.5 seconds
      $(this).stop().fadeTo(500, 1);
    }, function() {
      // On hover out, fade the element out over 0.5 seconds
      $(this).stop().fadeTo(500, 0);
    });
  });
  // jQuery code
$(document).ready(function() {
  $('.home').hover(
    function() {
      $(this).stop().animate({opacity: '1'}, 500);
    },
    function() {
      $(this).stop().animate({opacity: '0.5'}, 500);
    }
  );
});

  
  