$(document).ready(function(){
    //Scroll Effects Setup
        $(function() {
        var first = true;
          $(window).scroll(function() {
            var scroll = $(window).scrollTop();
            
            if (scroll >= 200) {
                $('#ellipsis-path').css('animation', 'draw-ellipsis .5s linear forwards normal 1 running');
                first = false;
            }
            else if (scroll < 200 && first === false) {
                $('#ellipsis-path').css('animation', 'erase-ellipsis .25s linear forwards reverse 1 running'); 
            }
            
            if (scroll >= 1800) {
              $('#emphasis-path').css('animation', 'draw-emphasis .75s linear forwards normal 1 running');
            }
            else{
                $('#emphasis-path').css('animation', 'erase-emphasis .75s linear forwards reverse 1 running'); 
            }
            
            if (scroll >= 3500) {
              $('#star-path').css('animation', 'draw-star .75s linear forwards normal 1 running');
            }
            else{
                $('#star-path').css('animation', 'erase-star .25s linear forwards reverse 1 running'); 
            }
          });
        })
    
    
    //Load Arrow
    $('#arrow-container').load('img/svg/arrow.svg');
    //Load Button SVG's
        $('#briefcase-container').load('img/svg/briefcase.svg');
        $('#graduation-container').load('img/svg/graduation.svg');
        $('#envelope-container').load('img/svg/envelope.svg');
        $('#user-container').load('img/svg/user.svg');
        //Load Hover SVG's
        $('#select-briefcase-container').load('img/svg/select_briefcase.svg');  
        $('#select-graduation-container').load('img/svg/select_graduation.svg');
        $('#select-user-container').load('img/svg/select_user.svg');
        $('#select-envelope-container').load('img/svg/select_envelope.svg');
        //Load Section SVG's
        $('#ellipsis-container').load('img/svg/ellipsis.svg');
        $('#emphasis-container').load('img/svg/emphasis.svg');
        $('#star-container').load('img/svg/star.svg');
   
    //Navigation Hover Effects
        //Animate Briefcase Hover
        $('#briefcase-container').hover(
          function(){
             $('#select-briefcase-path').css('animation', 'draw-briefcase .25s linear forwards normal 1 running');
          },
          function(){
            $('#select-briefcase-path').css('animation', 'erase-briefcase .25s linear forwards reverse 1 running');
        });
        
        //Animate Education Hover
        $('#graduation-container').hover(
          function(){
             $('#select-graduation-path').css('animation', 'draw-grad .25s linear forwards normal 1 running');
          },
          function(){
            $('#select-graduation-path').css('animation', 'erase-grad .25s linear forwards reverse 1 running');
        });
        
        //Animate About Hover
        $('#user-container').hover(
          function(){
             $('#select-user-path').css('animation', 'draw-user .25s linear forwards normal 1 running');
          },
          function(){
            $('#select-user-path').css('animation', 'erase-user .25s linear forwards reverse 1 running');
        });
        
        //Animate Contact Hover
        $('#envelope-container').hover(
          function(){
             $('#select-envelope-path').css('animation', 'draw-envelope .25s linear forwards normal 1 running');
          },
          function(){
            $('#select-envelope-path').css('animation', 'erase-envelope .25s linear forwards reverse 1 running');
        });

        //Nav Click
        $('#briefcase-container').mousedown(function(){
                $('.shading').css('animation', 'erase-shading 1s linear forwards reverse 1 running');
        });
            
        $('#briefcase-container').mouseup(function(){
                $('.shading').css('animation', 'draw-shading 1s linear forwards normal 1 running');
        });

});