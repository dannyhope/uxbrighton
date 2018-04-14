/* INPAGE SCROLL STUFF ------------------------------- */

  window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame       ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            function(callback){
              window.setTimeout(callback, 1000 / 60);
            };
  })();


  /**
   *  @param {number} scrollTargetY
   *  @param {number} [speed]  - scroll speed, default value 1500
   *  @param {string} [easing] - scroll type 'easeOutSine', 'easeInOutSine' or 'easeInOutQuint', default value easeInOutQuint
   */


  function scrollToY(scrollTargetY, speed, easing) {

    var scrollY = window.scrollY || document.documentElement.scrollTop,
        currentTime = 0;

    scrollTargetY = scrollTargetY || 0;
    speed = speed || 4000;
    easing = easing || 'easeOutSine';

    var time = Math.max(0.1, Math.min(Math.abs(scrollY - scrollTargetY) / speed, 0.8));

    var easingEquations = {

      easeOutSine: function (pos) {
        return Math.sin(pos * (Math.PI / 2));
      },
      easeInOutSine: function (pos) {
        return (-0.5 * (Math.cos(Math.PI * pos) - 1));
      },
      easeInOutQuint: function (pos) {
        if ((pos /= 0.5) < 1) {
          return 0.5 * Math.pow(pos, 5);
        }
        return 0.5 * (Math.pow((pos - 2), 5) + 2);
      }
    };

    function tick() {

      currentTime += 1 / 60;

      var p = currentTime / time;
      var t = easingEquations[easing](p);

      if (p < 1) {
        requestAnimFrame(tick);
        window.scrollTo(0, scrollY + ((scrollTargetY - scrollY) * t));

      } else {
        window.scrollTo(0, scrollTargetY);
      }
    }

    tick();
  }


  /**
   *  @param {object} menu - menu selector
   */

  function menuControl(menu) {

    var scrollPos = window.scrollY || document.documentElement.scrollTop,
        links     = menu.querySelectorAll('a[href^="#"]');

    for(var i = 0; i < links.length; i++) {

      var currLink   = links[i],
          refElement = document.querySelector(currLink.getAttribute('href'));

      if(refElement.offsetTop <= scrollPos && (refElement.offsetTop + refElement.clientHeight) > scrollPos) {

        var elems = document.querySelectorAll(".masthead a");
        [].forEach.call(elems, function(el) {
            el.classList.remove("active");
        });
        currLink.classList.add('active');

      } else {
        currLink.classList.remove('active');
      }
    }
  }


  /**
   *  @param {object} menu     - menu selector
   *  @param {number} [speed]  - scroll speed, default value 1500
   *  @param {string} [easing] - scroll type 'easeOutSine', 'easeInOutSine' or 'easeInOutQuint', default value easeInOutQuint
   */

  function animated(menu, speed, easing) {

    var i, links = menu.querySelectorAll('a[href^="#"]');

    function control(e) {

      e.preventDefault();

      var target_offset, target = document.querySelector(this.hash);
      console.log('target',target);

      target_offset = (target.getBoundingClientRect().top + document.documentElement.scrollTop);
      console.log('target.offsetTop',target.offsetTop);
      console.log('target_offset',target_offset);
      scrollToY(target_offset, speed, easing);
    }

    for(i = 0; i < links.length; i++) {

      var link = links[i];
      link.addEventListener('click', control);
      link.addEventListener('touchstart', control);
    }
  }


  /**
   *  @param {object} menu     - menu selector
   *  @param {number} [speed]  - scroll speed, default value 1500
   *  @param {string} [easing] - scroll type 'easeOutSine', 'easeInOutSine' or 'easeInOutQuint', default value easeInOutQuint
   */

  function scrollSpy(menu, speed, easing) {

    animated(menu, speed, easing);

    document.addEventListener('scroll', function() {
      menuControl(menu);
    });
  }



  var menu = document.querySelector('.masthead');
  scrollSpy(menu);

  var inPageLinks = document.querySelector('main');
  animated(inPageLinks);
  




















/* FITVIDS ------------------------------- */


  (function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.fitvids = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

  'use strict'

  var selectors = [
    'iframe[src*="player.vimeo.com"]',
    'iframe[src*="youtube.com"]',
    'iframe[src*="youtube-nocookie.com"]',
    'iframe[src*="kickstarter.com"][src*="video.html"]',
    'object'
  ]

  var css = '.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}'

  module.exports = function (parentSelector, opts) {
    parentSelector = parentSelector || 'body'
    opts = opts || {}

    if (isObject(parentSelector)) {
      opts = parentSelector
      parentSelector = 'body'
    }

    opts.ignore = opts.ignore || ''
    opts.players = opts.players || ''

    var containers = queryAll(parentSelector)
    if (!hasLength(containers)) return

    if (!document.getElementById('fit-vids-style')) {
      var head = document.head || document.getElementsByTagName('head')[0]
      head.appendChild(styles())
    }

    var custom = toSelectorArray(opts.players) || []
    var ignored = toSelectorArray(opts.ignore) || []
    var selector = selectors
      .filter(notIgnored(ignored))
      .concat(custom)
      .join()

    if (!hasLength(selector)) return

    containers.forEach(function (container) {
      var videos = queryAll(container, selector)
      videos.forEach(function (video) {
        wrap(video)
      })
    })
  }

  function queryAll (el, selector) {
    if (typeof el === 'string') {
      selector = el
      el = document
    }
    return Array.prototype.slice.call(el.querySelectorAll(selector))
  }

  function toSelectorArray (input) {
    if (typeof input === 'string') {
      return input.split(',').map(trim).filter(hasLength)
    } else if (isArray(input)) {
      return flatten(input.map(toSelectorArray).filter(hasLength))
    }
    return input || []
  }

  function wrap (el) {
    if (/fluid-width-video-wrapper/.test(el.parentNode.className)) return

    var widthAttr = parseInt(el.getAttribute('width'), 10)
    var heightAttr = parseInt(el.getAttribute('height'), 10)

    var width = !isNaN(widthAttr) ? widthAttr : el.clientWidth
    var height = !isNaN(heightAttr) ? heightAttr : el.clientHeight
    var aspect = height / width

    el.removeAttribute('width')
    el.removeAttribute('height')

    var wrapper = document.createElement('div')
    el.parentNode.insertBefore(wrapper, el)
    wrapper.className = 'fluid-width-video-wrapper'
    wrapper.style.paddingTop = (aspect * 100) + '%'
    wrapper.appendChild(el)
  }

  function styles () {
    var div = document.createElement('div')
    div.innerHTML = '<p>x</p><style id="fit-vids-style">' + css + '</style>'
    return div.childNodes[1]
  }

  function notIgnored (ignored) {
    if (ignored.length < 1) {
      return function () {
        return true
      }
    }
    return function (selector) {
      return ignored.indexOf(selector) === -1
    }
  }

  function hasLength (input) {
    return input.length > 0
  }

  function trim (str) {
    return str.replace(/^\s+|\s+$/g, '')
  }

  function flatten (input) {
    return [].concat.apply([], input)
  }

  function isObject (input) {
    return Object.prototype.toString.call(input) === '[object Object]'
  }

  function isArray (input) {
    return Object.prototype.toString.call(input) === '[object Array]'
  }

  },{}]},{},[1])(1)
  });
  fitvids({
    players: 'video'
  })


