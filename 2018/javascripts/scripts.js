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
  var navScrollSpeed    = 300;

  // bootstrap scrollspy, automatically highlights the menu
  $('body').scrollspy({ target: '.masthead__links',offset: navScrollOffset });

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

  $(document).on('click tap', '.js-show-talk-details', function(e) {
    e.preventDefault();
    $(this).toggleClass('is-active').closest('.talk').toggleClass("if-conference-day-talk-toggled");
  });

  



  // if(document.location.search.length) { $("#styleguide").load("style-guide.html"); };


  /* Table of contents */
  var ToC =
  "<nav role='navigation' class='table-of-contents'>" +
    "<strong>On this page</strong>" +
    "<ul class='nav'>";
   var newLine, el, title, link;
   $("#info h3[id]").each(function() {
   el = $(this);
  title = el.text();
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


  $("form.newletter-signup").submit(function(e){

    var form = e.target;
    e.preventDefault();

    $.post(form.action, $(form).serialize());
    $("form.newletter-signup").remove();
    $("#js-signup-confirmation").show();
  });

}); // dom ready stuff


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


