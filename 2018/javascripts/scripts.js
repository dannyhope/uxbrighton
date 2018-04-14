// @codekit-prepend "_scrollspy.js";
// @codekit-prepend "_fitvids.js";
// @codekit-prepend "_b_smoothScroll.js";



$(function() {

  // make the youtube videos responsive
  $(".container").fitVids();

  // setup scroll based on height of fixed nav
  var navBorderTop      = 1;
  var navHeight         = $('.masthead').height();
  var navScrollOffset   = navHeight + navBorderTop;
  var navScrollSpeed    = 900;

  // bootstrap scrollspy, automatically highlights the menu
  $('body').scrollspy({ target: '.masthead__links',offset: navHeight });

  // smoothly scroll to in-page links, uses request animation frame for smoothness
  $(document).on('click touchstart', 'a[href^="#"]:not([href="#"])', function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    var _goto = target.offset().top - navBorderTop;
      if (target.length) {
        scrollTo(_goto, null, navScrollSpeed);
      }
    }
  });
  $(window).scroll(function() {
    if ($(document).scrollTop() > 30) {
      $('.masthead').addClass('logo-shrink');
    } else {
      $('.masthead').removeClass('logo-shrink');
    }
  });

  // if(document.location.search.length) { $("#styleguide").load("style-guide.html"); };




  // next on-ready thing

});