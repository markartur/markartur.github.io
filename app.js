var main = function() {
  /* Push the body and the nav over by 285px over */
  
  var abriu = false;
  
  $('.icon-menu').click(function() {
  
    if(abriu == false){
  
    $('.menu').animate({
      left: "0px"
    }, 600);
    abriu = true;
    $('.icon-menu').animate({
      'padding-left': "300px"
    }, 400);
    }
    
    else{
    
    
    $('.menu').animate({
      left: "-285px"
    }, 1000);
    abriu = false;
    $('.icon-menu').animate({
      'padding-left': "80px"
    }, 1200);
  
    
    }
    
  });

  /* Then push them back */
  $('.icon-close').click(function() {
    $('.menu').animate({
      left: "-285px"
    }, 1200);

    $('.icon-menu').animate({
      'padding-left': "80px"
    }, 1400);
  });
  
  
  $('.about-button').click(function(){
  
      $('#about').css('visibility', 'visible').animate({opacity: 1.0}, 2000);
      //document.getElementById("about").style.visibility = "visible";

      
      
  });
};


$(document).ready(main);