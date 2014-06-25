$(document).ready(function() {
	
	
	/* Scroll event handler */
    $(window).bind('scroll',function(e){
    	parallaxScroll();
    });
    
    
});

/* Scroll the background layers */
function parallaxScroll(){
	var scrolled = $(window).scrollTop();
	$('#parallax-bg1').css('top',(0-(scrolled*.033))+'rem');
	$('#parallax-bg2').css('top',(0-(scrolled*.039))+'rem');
	$('#parallax-bg3').css('top',(0-(scrolled*.043))+'rem');
	$('#parallax-bg4').css('top',(0-(scrolled*.047))+'rem');
	$('#parallax-bg5').css('top',(0-(scrolled*.062))+'rem');
	$('#parallax-bg6').css('top',(0-(scrolled*.084))+'rem');
	$('#parallax-bg7').css('top',(0-(scrolled*.070))+'rem');
	$('#parallax-bg8').css('top',(0-(scrolled*.062))+'rem');
	$('.cta').css('top',(0-(scrolled*0.04))+'rem');
}
