function isElementInViewport(elem) {
  let $elem = $(elem);
  let scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
  let viewportTop = $(scrollElem).scrollTop();
  let viewportBottom = viewportTop + $(window).height();

  let elemTop = Math.round( $elem.offset().top );
  let elemBottom = elemTop + $elem.height();

  return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
}

function checkAnimation(elementClass, animationClass) {
  let $elem = $(elementClass);
  
  if ($elem.hasClass('start')) return;

  if (isElementInViewport($elem)) {
      $elem.addClass(animationClass);
  }
}

// Capture scroll events
$(window).scroll(function(){
  checkAnimation('.portfolio-title', 'zoomIn');
});