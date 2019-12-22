// @codekit-prepend "_scrollspy.js";
// @codekit-prepend "_fitvids.js";
// @codekit-prepend "_b_smoothScroll.js";
// @codekit-prepend "_stickybits.js";


// COOKIES

function getCookie(name) {
    var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return v ? v[2] : null;
}
function setCookie(name, value, days) {
    var d = new Date;
    d.setTime(d.getTime() + 24*60*60*1000*days);
    document.cookie = name + "=" + value + ";path=/;expires=" + d.toGMTString();
}
function deleteCookie(name) { 
  setCookie(name, '', -1); 
}






$(function() {

  // console.log('dom2');



  // stickybits('.sticky', {useStickyClasses: true});


  if (getCookie('showJobs')) {
    root.className += ' showJobs';
  }

  $(document).on('click', '[data-overlay-trigger]', function(e) {

    e.preventDefault();

    var _currentVal = $('body').attr('data-overlay-active');
    var _val        = $(this).attr('data-overlay-trigger');

    // console.log('_val',_val);
    // console.log('_currentVal',_currentVal);

    if (_val == _currentVal) {
      $("body").attr('data-overlay-active','false');
    } else {
      $("body").attr('data-overlay-active',_val);
      if (_val == 'menu'){ $( '.archive-nav__search' ).focus(); }
      if (_val == 'slack'){ $( '#email' ).focus(); }
      if (_val == 'newsletter'){
        $( '#fieldEmail' ).focus();
      }
    }
  });

  $("[data-newletter-signup]").submit(function(e){
    var form = e.target;
    e.preventDefault();
    $.post(form.action, $(form).serialize());
    $(this).parent().find(".js-signup-confirmation").show();
    $(this).remove();
  });


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
  var navScrollSpeed    = 300;

  // bootstrap scrollspy, automatically highlights the menu
  if ($('.nav--in-page').length > 0) {
    $('#top').scrollspy({ target: '.nav--in-page',offset: navScrollOffset });    
  }


  // smoothly scroll to in-page links, uses request animation frame for smoothness
  $(document).on('click tap', 'a[href^="#"]:not([href="#"])', function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {
      var target = $(this.hash);
      //console.log('target',target);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      var _goto = target.offset().top - navOffset;
      //console.log('_goto',_goto);
      if (target.length) {
        scrollTo(_goto, null, navScrollSpeed);
      }
    }
  });



  $(document).on("click tap", ".js-show-talk-details__show, .js-show-talk-details__hide", function() {
    $(this).closest('.talk').toggleClass("talk-toggled-to-display");
  });  



  // if(document.location.search.length) { $("#styleguide").load("style-guide.html"); };

  /* Table of contents */
  var ToC =
  "<nav role='navigation' class='table-of-contents'>" +
    "<strong>In this page</strong>" +
    "<ul class='nav'>";
   var newLine, el, title, link;
   $("#info h3[id]").each(function() {
   el = $(this);
  title = el.text();
  console.log('title',title);
  link = "#" + el.attr("id");
   newLine =
    "<li class='nav-item'>" +
      "<a href='" + link + "'>" +
        title +
      "</a>" +
    "</li>";
   ToC += newLine;
   });
   ToC +=
   "</ul>" +
  "</nav>";
   $("[data-toc]").after(ToC);
   // setTimeout(function(){ 
   //  console.log($('.table-of-contents'));
   //  $('body').scrollspy({ target: '.table-of-contents',offset: navScrollOffset });
   // }, 3000);


  // $(document).on('click tap', '.job-open,.job-close', function(e){
  //   //e.preventDefault();

  //   if ( $(this).closest('.job').hasClass('job-target') ) {

  //     $(this).closest('.job').removeClass('job-target');
  //     $('body').removeClass('job-open');
  //     $(this).closest('.job').find('.job-info').attr('style','');

  //   } else {

  //     _target   = $(this).closest('.job').find('.job-info');
  //     _width    = _target.width();
  //     _height   = _target.height();
  //     _top      = _target[0].getBoundingClientRect().top;
  //     _left     = _target[0].getBoundingClientRect().left;

  //     _target.css({
  //       "height": _height, 
  //       "width":  _width,
  //       "top":    _top,
  //       "left":   _left,
  //       "position": "fixed"
  //     }).closest('.job').addClass('job-target').closest('body').addClass('job-open');

  //   } // else
  // });



  // if (hashFragment) {

  //   _target   = $(hashFragment).find('.job-info');
  //   _width    = _target.width();
  //   _height   = _target.height();
  //   _top      = _target[0].getBoundingClientRect().top;
  //   _left     = _target[0].getBoundingClientRect().left;

  //   _target.css({
  //     "height": _height, 
  //     "width":  _width,
  //     "top":    _top,
  //     "left":   _left,
  //     "position": "fixed"
  //   }).closest('.job').addClass('job-target').closest('body').addClass('job-open');
  // }


  $('.job-open').on('click', function(e){
    if (this.tagName !== 'A') return;

    e.preventDefault();

    window.the_pos = $(document).scrollTop();

    if ( $(this).closest('.job').hasClass('job-target') ) {

      $(this).closest('.job').removeClass('job-target');
      $('body').removeClass('job-open');
      $(this).closest('.job').find('.job-info').attr('style','');

    } else {
      
      _job = "#" + $(this).closest('.job').attr('id');
      history.pushState(null, null, _job);  

      _target   = $(this).closest('.job').find('.job-info');
      _width    = _target.width();
      _height   = _target.height();
      _top      = _target[0].getBoundingClientRect().top;
      _left     = _target[0].getBoundingClientRect().left;

      _target.css({
        "height": _height, 
        "width":  _width,
        "top":    _top,
        "left":   _left,
        "position": "fixed"
      }).closest('.job').addClass('job-target').closest('body').addClass('job-open');

    } // else
  });




  $('.job-close').on('click', function(e){
    if (this.tagName !== 'A') return;
    history.pushState(null, null, '#');
    e.preventDefault();
    e.stopPropagation();

    $(this).closest('.job').removeClass('job-target');
    $('body').removeClass('job-open');
    $(this).closest('.job').find('.job-info').attr('style','');

    setTimeout(function() {
      window.scrollTo(the_pos, 0);
    }, 1); 
  });





}); // dom ready stuff  -------------------------------------------------------------------------


/*!
 * @copyright Copyright (c) 2017 IcoMoon.io
 * @license   Licensed under MIT license
 *            See https://github.com/Keyamoon/svgxuse
 * @version   1.2.6
 */
(function(){if("undefined"!==typeof window&&window.addEventListener){var e=Object.create(null),l,d=function(){clearTimeout(l);l=setTimeout(n,100)},m=function(){},t=function(){window.addEventListener("resize",d,!1);window.addEventListener("orientationchange",d,!1);if(window.MutationObserver){var k=new MutationObserver(d);k.observe(document.documentElement,{childList:!0,subtree:!0,attributes:!0});m=function(){try{k.disconnect(),window.removeEventListener("resize",d,!1),window.removeEventListener("orientationchange",
d,!1)}catch(v){}}}else document.documentElement.addEventListener("DOMSubtreeModified",d,!1),m=function(){document.documentElement.removeEventListener("DOMSubtreeModified",d,!1);window.removeEventListener("resize",d,!1);window.removeEventListener("orientationchange",d,!1)}},u=function(k){function e(a){if(void 0!==a.protocol)var b=a;else b=document.createElement("a"),b.href=a;return b.protocol.replace(/:/g,"")+b.host}if(window.XMLHttpRequest){var d=new XMLHttpRequest;var m=e(location);k=e(k);d=void 0===
d.withCredentials&&""!==k&&k!==m?XDomainRequest||void 0:XMLHttpRequest}return d};var n=function(){function d(){--q;0===q&&(m(),t())}function l(a){return function(){!0!==e[a.base]&&(a.useEl.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href","#"+a.hash),a.useEl.hasAttribute("href")&&a.useEl.setAttribute("href","#"+a.hash))}}function p(a){return function(){var c=document.body,b=document.createElement("x");a.onload=null;b.innerHTML=a.responseText;if(b=b.getElementsByTagName("svg")[0])b.setAttribute("aria-hidden",
"true"),b.style.position="absolute",b.style.width=0,b.style.height=0,b.style.overflow="hidden",c.insertBefore(b,c.firstChild);d()}}function n(a){return function(){a.onerror=null;a.ontimeout=null;d()}}var a,b,q=0;m();var f=document.getElementsByTagName("use");for(b=0;b<f.length;b+=1){try{var h=f[b].getBoundingClientRect()}catch(w){h=!1}var g=(a=f[b].getAttribute("href")||f[b].getAttributeNS("http://www.w3.org/1999/xlink","href")||f[b].getAttribute("xlink:href"))&&a.split?a.split("#"):["",""];var c=
g[0];g=g[1];var r=h&&0===h.left&&0===h.right&&0===h.top&&0===h.bottom;h&&0===h.width&&0===h.height&&!r?(c.length||!g||document.getElementById(g)||(c=""),f[b].hasAttribute("href")&&f[b].setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a),c.length&&(a=e[c],!0!==a&&setTimeout(l({useEl:f[b],base:c,hash:g}),0),void 0===a&&(g=u(c),void 0!==g&&(a=new g,e[c]=a,a.onload=p(a),a.onerror=n(a),a.ontimeout=n(a),a.open("GET",c),a.send(),q+=1)))):r?c.length&&e[c]&&setTimeout(l({useEl:f[b],base:c,
hash:g}),0):void 0===e[c]?e[c]=!0:e[c].onload&&(e[c].abort(),delete e[c].onload,e[c]=!0)}f="";q+=1;d()};var p=function(){window.removeEventListener("load",p,!1);l=setTimeout(n,0)};"complete"!==document.readyState?window.addEventListener("load",p,!1):p()}})();


