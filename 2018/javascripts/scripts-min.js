/* ========================================================================
 * Bootstrap: scrollspy.js v3.3.7
 * http://getbootstrap.com/javascript/#scrollspy
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
function scrollTo(t,e,i){
// because it's so fucking difficult to detect the scrolling element, just move them all
function o(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}function n(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}var r=n(),s=t-r,a=0,l=20;i=void 0===i?500:i;var c=function(){
// find the value with the quadratic in-out easing function
var t;
// move the document.body
// increment the time
a+=20,o(Math.easeOutCubic(a,r,s,i)),
// do the animation unless its over
a<i?requestAnimFrame(c):e&&"function"==typeof e&&
// the animation is done so lets callback
e()};c()}!function(a){"use strict";
// SCROLLSPY CLASS DEFINITION
// ==========================
function n(t,e){this.$body=a(document.body),this.$scrollElement=a(t).is(document.body)?a(window):a(t),this.options=a.extend({},n.DEFAULTS,e),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}
// SCROLLSPY PLUGIN DEFINITION
// ===========================
function e(o){return this.each(function(){var t=a(this),e=t.data("bs.scrollspy"),i="object"==typeof o&&o;e||t.data("bs.scrollspy",e=new n(this,i)),"string"==typeof o&&e[o]()})}n.VERSION="3.3.7",n.DEFAULTS={offset:10},n.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},n.prototype.refresh=function(){var t=this,o="offset",n=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(o="position",n=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var t=a(this),e=t.data("target")||t.attr("href"),i=/^#./.test(e)&&a(e);return i&&i.length&&i.is(":visible")&&[[i[o]().top+n,e]]||null}).sort(function(t,e){return t[0]-e[0]}).each(function(){t.offsets.push(this[0]),t.targets.push(this[1])})},n.prototype.process=function(){var t=this.$scrollElement.scrollTop()+this.options.offset,e=this.getScrollHeight(),i=this.options.offset+e-this.$scrollElement.height(),o=this.offsets,n=this.targets,r=this.activeTarget,s;if(this.scrollHeight!=e&&this.refresh(),i<=t)return r!=(s=n[n.length-1])&&this.activate(s);if(r&&t<o[0])return this.activeTarget=null,this.clear();for(s=o.length;s--;)r!=n[s]&&t>=o[s]&&(void 0===o[s+1]||t<o[s+1])&&this.activate(n[s]);20<a(document).scrollTop()?a("body").addClass("scroll-started"):a("body").removeClass("scroll-started")},n.prototype.activate=function(t){this.activeTarget=t,this.clear();var e=this.selector+'[data-target="'+t+'"],'+this.selector+'[href="'+t+'"]',i=a(e).parents("li").addClass("active");i.parent(".dropdown-menu").length&&(i=i.closest("li.dropdown").addClass("active")),i.trigger("activate.bs.scrollspy")},n.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var t=a.fn.scrollspy;a.fn.scrollspy=e,a.fn.scrollspy.Constructor=n,
// SCROLLSPY NO CONFLICT
// =====================
a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=t,this}
// SCROLLSPY DATA-API
// ==================
,a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var t=a(this);e.call(t,t.data())})})}(jQuery),function(s){"use strict";s.fn.fitVids=function(t){var i={customSelector:null,ignore:null};if(!document.getElementById("fit-vids-style")){
// appendStyles: https://github.com/toddmotto/fluidvids/blob/master/dist/fluidvids.js
var e=document.head||document.getElementsByTagName("head")[0],o=".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}",n=document.createElement("div");n.innerHTML='<p>x</p><style id="fit-vids-style">'+o+"</style>",e.appendChild(n.childNodes[1])}return t&&s.extend(i,t),this.each(function(){var t=['iframe[src*="player.vimeo.com"]','iframe[src*="youtube.com"]','iframe[src*="youtube-nocookie.com"]','iframe[src*="kickstarter.com"][src*="video.html"]',"object","embed"];i.customSelector&&t.push(i.customSelector);var r=".fitvidsignore";i.ignore&&(r=r+", "+i.ignore);var e=s(this).find(t.join(","));// Disable FitVids on this video.
(// SwfObj conflict patch
e=(e=e.not("object object")).not(r)).each(function(){var t=s(this);if(!(0<t.parents(r).length||"embed"===this.tagName.toLowerCase()&&t.parent("object").length||t.parent(".fluid-width-video-wrapper").length)){t.css("height")||t.css("width")||!isNaN(t.attr("height"))&&!isNaN(t.attr("width"))||(t.attr("height",9),t.attr("width",16));var e,i,o=("object"===this.tagName.toLowerCase()||t.attr("height")&&!isNaN(parseInt(t.attr("height"),10))?parseInt(t.attr("height"),10):t.height())/(isNaN(parseInt(t.attr("width"),10))?t.width():parseInt(t.attr("width"),10));if(!t.attr("name")){var n="fitvid"+s.fn.fitVids._count;t.attr("name",n),s.fn.fitVids._count++}t.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*o+"%"),t.removeAttr("height").removeAttr("width")}})})},
// Internal counter for unique video names.
s.fn.fitVids._count=0}(window.jQuery||window.Zepto),
// easing functions http://goo.gl/5HLl8
Math.easeInOutQuad=function(t,e,i,o){return(t/=o/2)<1?i/2*t*t+e:-i/2*(--t*(t-2)-1)+e},Math.easeInCubic=function(t,e,i,o){var n;return e+i*((t/=o)*t*t)},Math.easeOutCubic=function(t,e,i,o){var n=(t/=o)*t,r;return e+i*(n*t+-3*n+3*t)},Math.inOutQuintic=function(t,e,i,o){var n=(t/=o)*t,r=n*t;return e+i*(6*r*n+-15*n*n+10*r)};
// requestAnimationFrame for Smart Animating http://goo.gl/sx5sts
var requestAnimFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)};// @codekit-prepend "_scrollspy.js";
// @codekit-prepend "_fitvids.js";
// @codekit-prepend "_b_smoothScroll.js";
$(function(){
// setup scroll based on height of fixed nav
// TODO after resize / mq
if(console.log("dom"),$(document).on("click tap","[data-overlay-trigger]",function(t){t.preventDefault();var e=$("body").attr("data-overlay-active"),i=$(this).attr("data-overlay-trigger");
// console.log('_val',_val);
// console.log('_currentVal',_currentVal);
i==e?$("body").attr("data-overlay-active","false"):($("body").attr("data-overlay-active",i),"menu"==i&&$(".archive-nav__search").focus(),"slack"==i&&$("#email").focus(),"newsletter"==i&&$("#fieldEmail").focus())}),
// make the youtube videos responsive
$(".container").fitVids(),699<$(window).width())var i=$(".masthead").height()-1;else var i=0;var t=i+1,o=300;
// bootstrap scrollspy, automatically highlights the menu
$("body").scrollspy({target:".nav--in-page",offset:t}),
// smoothly scroll to in-page links, uses request animation frame for smoothness
$(document).on("click tap",'a[href^="#"]:not([href="#"])',function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")||location.hostname==this.hostname){var t=$(this.hash),e=(
//console.log('target',target);
t=t.length?t:$("[name="+this.hash.slice(1)+"]")).offset().top-i;
//console.log('_goto',_goto);
t.length&&scrollTo(e,null,o)}}),$(document).on("click tap",".js-show-talk-details",function(t){t.preventDefault(),$(this).toggleClass("is-active").closest(".talk").toggleClass("if-conference-day-talk-toggled")});
// if(document.location.search.length) { $("#styleguide").load("style-guide.html"); };
/* Table of contents */
var e="<nav role='navigation' class='table-of-contents'><strong>On this page</strong><ul class='nav'>",n,r,s,a;$("#info h3[id]").each(function(){r=$(this),s=r.text(),a="#"+r.attr("id"),e+=n="<li class='nav-item'><a href='"+a+"'>"+s+"</a></li>"}),e+="</ul></nav>",$("[data-toc]").after(e),
// setTimeout(function(){ 
//  console.log($('.table-of-contents'));
//  $('body').scrollspy({ target: '.table-of-contents',offset: navScrollOffset });
// }, 3000);
$("form.newletter-signup").submit(function(t){var e=t.target;t.preventDefault(),$.post(e.action,$(e).serialize()),$("form.newletter-signup").remove(),$("#js-signup-confirmation").show()})}),// dom ready stuff
/*!
 * @copyright Copyright (c) 2017 IcoMoon.io
 * @license   Licensed under MIT license
 *            See https://github.com/Keyamoon/svgxuse
 * @version   1.2.6
 */
function(){if("undefined"!=typeof window&&window.addEventListener){var u=Object.create(null),t,e=function(){clearTimeout(t),t=setTimeout(i,100)},f=function(){},m=function(){if(window.addEventListener("resize",e,!1),window.addEventListener("orientationchange",e,!1),window.MutationObserver){var t=new MutationObserver(e);t.observe(document.documentElement,{childList:!0,subtree:!0,attributes:!0}),f=function(){try{t.disconnect(),window.removeEventListener("resize",e,!1),window.removeEventListener("orientationchange",e,!1)}catch(t){}}}else document.documentElement.addEventListener("DOMSubtreeModified",e,!1),f=function(){document.documentElement.removeEventListener("DOMSubtreeModified",e,!1),window.removeEventListener("resize",e,!1),window.removeEventListener("orientationchange",e,!1)}},p=function(t){function e(t){if(void 0!==t.protocol)var e=t;else(e=document.createElement("a")).href=t;return e.protocol.replace(/:/g,"")+e.host}if(window.XMLHttpRequest){var i=new XMLHttpRequest,o=e(location);t=e(t),i=void 0===i.withCredentials&&""!==t&&t!==o?XDomainRequest||void 0:XMLHttpRequest}return i},i=function(){function o(){0===--s&&(f(),m())}function t(t){return function(){!0!==u[t.base]&&(t.useEl.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href","#"+t.hash),t.useEl.hasAttribute("href")&&t.useEl.setAttribute("href","#"+t.hash))}}function e(i){return function(){var t=document.body,e=document.createElement("x");i.onload=null,e.innerHTML=i.responseText,(e=e.getElementsByTagName("svg")[0])&&(e.setAttribute("aria-hidden","true"),e.style.position="absolute",e.style.width=0,e.style.height=0,e.style.overflow="hidden",t.insertBefore(e,t.firstChild)),o()}}function i(t){return function(){t.onerror=null,t.ontimeout=null,o()}}var n,r,s=0;f();var a=document.getElementsByTagName("use");for(r=0;r<a.length;r+=1){try{var l=a[r].getBoundingClientRect()}catch(t){l=!1}var c=(n=a[r].getAttribute("href")||a[r].getAttributeNS("http://www.w3.org/1999/xlink","href")||a[r].getAttribute("xlink:href"))&&n.split?n.split("#"):["",""],d=c[0];c=c[1];var h=l&&0===l.left&&0===l.right&&0===l.top&&0===l.bottom;l&&0===l.width&&0===l.height&&!h?(d.length||!c||document.getElementById(c)||(d=""),a[r].hasAttribute("href")&&a[r].setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n),d.length&&(!0!==(n=u[d])&&setTimeout(t({useEl:a[r],base:d,hash:c}),0),void 0===n&&(void 0!==(c=p(d))&&(n=new c,(u[d]=n).onload=e(n),n.onerror=i(n),n.ontimeout=i(n),n.open("GET",d),n.send(),s+=1)))):h?d.length&&u[d]&&setTimeout(t({useEl:a[r],base:d,hash:c}),0):void 0===u[d]?u[d]=!0:u[d].onload&&(u[d].abort(),delete u[d].onload,u[d]=!0)}a="",s+=1,o()},o=function(){window.removeEventListener("load",o,!1),t=setTimeout(i,0)};"complete"!==document.readyState?window.addEventListener("load",o,!1):o()}}();
//# sourceMappingURL=scripts-min.js.map