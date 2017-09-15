$(document).ready(function(){
  $('.slider').slick({
      autoplay:true,
      autoplaySpeed:1500,
      arrows:true,
      prevArrow:'<button  class="fa fa-angle-left fa-3x"></button>',
      nextArrow:'<button  class="fa fa-angle-right fa-3x"></button>',
      centerMode:true,
      slidesToShow:3,
      slidesToScroll:1,
      responsive:[
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 0
        }
      }   
      ]
    });
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
      	scrollTop: $(hash).offset().top
      }, 900, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
  
  $(window).scroll(function() {
  	$(".slideanim").each(function(){
  		var pos = $(this).offset().top;

  		var winTop = $(window).scrollTop();
  		if (pos < winTop + 600) {
  			$(this).addClass("slide1");
  		}
  	});
  });
})
  window.onload=function(){
    
  };
  var vid = document.getElementById("bgvid");

  if (window.matchMedia('(prefers-reduced-motion)').matches) {
    vid.removeAttribute("autoplay");
    vid.pause();
    pauseButton.innerHTML = "Paused";
  }

  function vidFade() {
    vid.classList.add("stopfade");
  }

  // vid.addEventListener('ended', function(){
  //   // only functional if "loop" is removed 
  //   vid.pause();
  //   // to capture IE10
  //   vidFade();
  // }); 