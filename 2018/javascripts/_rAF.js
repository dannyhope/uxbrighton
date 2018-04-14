window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            // defualt scrolling logic or setInterval
            window.setTimeout(callback, 1000 / 60);
          };
})();