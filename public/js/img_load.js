$(document).ready(function(){
  //$('#arrow-container').load('img/svg/arrow.svg');
  $('#briefcase-container').load('img/svg/briefcase.svg');
  $('#graduation-container').load('img/svg/graduation.svg');
  $('#envelope-container').load('img/svg/envelope.svg');
  $('#user-container').load('img/svg/user.svg');
  $('#ellipsis-container').load('img/svg/ellipsis.svg');
  $('#emphasis-container').load('img/svg/emphasis.svg');
  $('#star-container').load('img/svg/star.svg');
  $('#select-container').load('img/svg/select.svg');  
  $('#select-graduation-container').load('img/svg/select_graduation.svg');
  $('#select-user-container').load('img/svg/select_user.svg');
  $('#select-envelope-container').load('img/svg/select_envelope.svg');
   
   //Navigation Hover Effects

   $('#test-1').hover(
      function(){
         
         $('#select-briefcase-path-draw').css('animation', 'draw .25s linear forwards normal 1 running');
      },
      function(){
          
        $('#select-briefcase-path-draw').css('animation', 'erase .25s linear forwards reverse 1 running');
   });

});