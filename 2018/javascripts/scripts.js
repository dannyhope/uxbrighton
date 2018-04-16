// @codekit-prepend "_scrollspy.js";
// @codekit-prepend "_fitvids.js";
// @codekit-prepend "_b_smoothScroll.js";



$(function() {

  // make the youtube videos responsive
  $(".container").fitVids();

  // setup scroll based on height of fixed nav
  // TODO after resize / mq
  if ( $( window ).width() > 699) {
    var navOffset       = $('.masthead').height() - 1; 
  } else {
    var navOffset       = 0; 
  }
  var navScrollOffset   = navOffset + 1;
  var navScrollSpeed    = 900;

  // bootstrap scrollspy, automatically highlights the menu
  $('body').scrollspy({ target: '.masthead__links',offset: navScrollOffset });

  // smoothly scroll to in-page links, uses request animation frame for smoothness
  $(document).on('click touchstart', 'a[href^="#"]:not([href="#"])', function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {
    var target = $(this.hash);
    console.log('target',target);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    var _goto = target.offset().top - navOffset;
    console.log('_goto',_goto);
      if (target.length) {
        scrollTo(_goto, null, navScrollSpeed);
      }
    }
  });


  // if(document.location.search.length) { $("#styleguide").load("style-guide.html"); };




  // next on-ready thing

});