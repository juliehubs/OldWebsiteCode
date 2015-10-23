(function($) {

  // prettyPhoto
  jQuery(document).ready(function() {
    jQuery('a[data-gal]').each(function() {
      jQuery(this).attr('rel', jQuery(this).data('gal'));
    });
    jQuery("a[data-rel^='prettyPhoto']").prettyPhoto({
      animationSpeed: 'slow',
      theme: 'light_square',
      slideshow: false,
      overlay_gallery: false,
      social_tools: false,
      deeplinking: false
    });
  });


})(jQuery);

// handle links with @href started with '#' only
$(document).on('click', 'a[href^="#"]', function(e) {
  // target element id
  var id = $(this).attr('href');

  // target element
  var $id = $(id);
  if ($id.length === 0) {
    return;
  }
  // prevent standard hash navigation (avoid blinking in IE)
  // prevent standard hash navigation (avoid blinking in IE)
  e.preventDefault();

  var pos = $(id).offset().top;

  $('body, html').animate({
    scrollTop: pos
  });
});

<!--Scroll to Top found on the interwebs-->

var offset = 600;
var duration = 500;
jQuery(window).scroll(function() {
  if (jQuery(this).scrollTop() > offset) {
    jQuery('.back-to-top').fadeIn(duration);
  } else {
    jQuery('.back-to-top').fadeOut(duration);
  }
});

jQuery('.back-to-top').click(function(event) {
  event.preventDefault();
  jQuery('html, body').animate({
    scrollTop: 0
  }, duration);
  return false;
})

<!--Scroll to top end-->
