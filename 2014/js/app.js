$(function(){

  // grab their email address, put it into the google doc email
  // form element and subit the form in the iframe
  $('#email input[type=email]').keyup(function(){    
    
    var submitButton = $('#email input[type=submit]').attr('disabled', false);
    
    // minimal validation - just look for @  
    if ($(this).val().match(/@/)) {
      submitButton.attr('disabled', false);
    } else {
      submitButton.attr('disabled', true);
    }
  });
  
  $('#email form').submit(function(e){
    
    e.preventDefault();
    // copy email address
    $('#entry_0', window.top.frames[0].document).val($('#email input[type=email]').val()); 
    
    // submit the form
    $('#email-form input[type=submit]', window.top.frames[0].document).click();

    // we'll just assume that it got posted
    $('#email input').hide();
    $('#email .thanks').fadeIn();
  });
  
});
