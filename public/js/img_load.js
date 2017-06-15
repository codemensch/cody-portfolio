$(document).ready(function(){
    
    //Hover Interactions
    $('.overlay').on({
      'touchstart': function () {
        $(this).css('opacity', 0.75);
      },
    
      'touchend': function () {
        $(this).css('opacity', 0);
      }
    });
    
    $('.project-container').on({
      'touchstart': function () {
        $(this).css('background-color', '#d8dfe5');
      },
    
      'touchend': function () {
        $(this).css('background-color', '#c0c6cc');
      }
    });
    
    $('a .fa-envelope-o, a .fa-linkedin, a .fa-github-alt').on({
      'touchstart': function () {
        $(this).css('color', '#fa8072');
      },
    
      'touchend': function () {
        $(this).css('color', '#c0c6cc');
      }
    });
    
    //Load Button SVG's
    var position = $(window).scrollTop();
        $('#briefcase-container').load('img/svg/briefcase.svg', function(){
          if (position > 2216){
            $('.briefcase-shading').css('animation', 'draw-briefcase .5s linear forwards normal 1 running');
          }
        });
        $('#education-container').load('img/svg/education.svg', function(){
          if (position > 2216){
            $('.education-shading').css('animation', 'draw-education .5s linear forwards normal 1 running');
          }
        });
        $('#envelope-container').load('img/svg/envelope.svg', function(){
          if (position > 2216){
            $('.envelope-shading').css('animation', 'draw-envelope .5s linear forwards normal 1 running');
          }
        });
        $('#user-container').load('img/svg/user.svg', function(){
          if (position > 2216){
            $('.user-shading').css('animation', 'draw-user .5s linear forwards normal 1 running');
          }
        });
  
  //Load Nav Shading For Browser Refresh
  
    
    
 
  
    
  //Scroll Effects Setup
  var portfolioScroll = new Waypoint({
    element: document.getElementById('portfolio'), handler: function(direction) {
      if (direction === 'down') {
        $('.briefcase-shading').css('animation', 'draw-briefcase .5s linear forwards normal 1 running');
      }
      
      if (direction === 'up') {
        $('.briefcase-shading').css('animation', 'erase-briefcase .5s linear forwards reverse 1 running'); 
      }
    },
    
    offset: 170
    
  });
  
  var educationScroll = new Waypoint({
    element: document.getElementById('school'), handler: function(direction) {
      if (direction === 'down') {
        $('.briefcase-shading').css('animation', 'erase-briefcase .5s linear forwards reverse 1 running');
        $('.education-shading').css('animation', 'draw-education .5s linear forwards normal 1 running');
      }
      
      if (direction === 'up') {
        $('.education-shading').css('animation', 'erase-education .5s linear forwards reverse 1 running');
        $('.briefcase-shading').css('animation', 'draw-briefcase .5s linear forwards normal 1 running');
      }
    },
    
    offset: 170
    
  });
  
  var aboutScroll = new Waypoint({
    element: document.getElementById('about'), handler: function(direction) {
      if (direction === 'down') {
        $('.education-shading').css('animation', 'erase-education .5s linear forwards reverse 1 running');
        $('.user-shading').css('animation', 'draw-user .5s linear forwards normal 1 running');
      }
      
      if (direction === 'up') {
        $('.user-shading').css('animation', 'erase-user .5s linear forwards reverse 1 running');
        $('.education-shading').css('animation', 'draw-education .5s linear forwards normal 1 running');
      }
    },
    
    offset: 170
    
  });
  
  var contactScroll = new Waypoint({
    element: document.getElementById('contact'), handler: function(direction) {
      if (direction === 'down') {
        $('.user-shading').css('animation', 'erase-user .5s linear forwards reverse 1 running');
        $('.envelope-shading').css('animation', 'draw-envelope .5s linear forwards normal 1 running');
      }
      
      if (direction === 'up') {
        $('.envelope-shading').css('animation', 'erase-envelope .5s linear forwards reverse 1 running');
        $('.user-shading').css('animation', 'draw-user .5s linear forwards normal 1 running');
      }
    },
    
    offset: 500
    
  });
    
    
    /*
       $(function() {
        var first = true;
          $(window).scroll(function() {
            var scroll = $(window).scrollTop();
            
            if (scroll >= 200) {
                $('.briefcase-shading').css('animation', 'draw-briefcase .5s linear forwards normal 1 running');
                first = false;
            }
            else if (scroll > 1800) {
                $('.briefcase-shading').css('animation', 'erase-briefcase .5s linear forwards reverse 1 running'); 
            }
            
            if (scroll >= 1800) {
              $('.education-shading').css('animation', 'draw-emphasis .75s linear forwards normal 1 running');
            }
            else{
                $('.education-shading').css('animation', 'erase-emphasis .75s linear forwards reverse 1 running'); 
            }
            
            if (scroll >= 3500) {
              $('#star-path').css('animation', 'draw-star .75s linear forwards normal 1 running');
            }
            else{
                $('#star-path').css('animation', 'erase-star .25s linear forwards reverse 1 running'); 
            }
          });
        })
   
   
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
        */

});