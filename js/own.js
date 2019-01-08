    /* NavMenu Animation - Less than 1024px  */
    $(function(){
      var windowWidth = $(window).width();
      var windowPC = 1024; 
      if (windowWidth <= windowPC) {
        $('#nav_toggle').click(function(){
          $('header').toggleClass('open');
          $('nav').fadeToggle(500);
        });
        $('.nav_li').click(function(){ /* Close Menu when it's clicked 1 */
          $('header').toggleClass('open');
          $('nav').fadeToggle(500);
        });        
        $('.nav_a').click(function(){ /* Close Menu when it's clicked 2 */
          $('header').toggleClass('open');
          $('nav').fadeToggle(500);
        }); 
      }
    });
    
    // Change Font Family 
    $(function(){
      var h1Font = ["Pinyon Script","Tangerine","Caveat"];
      var i = 0;
      var h1Length = h1Font.length;
      
      setInterval(function(){
        document.getElementById("change_h1_font").style.fontFamily = h1Font[i];
        $('#change_h1_font').fadeIn(900);
        $('#bg_movie').fadeIn(900);
        $('#change_h1_font').delay(2100);
        $('#bg_movie').delay(2100);
        $('#change_h1_font').fadeOut(900);
        $('#bg_movie').fadeOut(900);
        i++;
        if( i >= h1Length ){ i = 0; }
      },4000);
    });

    //Scroll Fitting Animation - Scrollify   
    $(function(){
//      $.scrollify({section:".js-section"});  
      
      $.scrollify({
        scrollSpeed: 80,
      });
    });
    
    //Scroll FadeIn Animation
    $(function(){
      $(window).scroll(function (){
        $('.fadein').each(function(){
          var elemPos = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > elemPos - windowHeight + 200){
              $(this).addClass('scrollin');
          }
        });
      });
    });    
    
    // Video Speed
    var vid = document.getElementById("bg_movie");
    vid.playbackRate = 0.6;
//    vid.playbackRate = 0;