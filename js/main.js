/* ===================================================================
 * Infinity - Main JS
 *
 * ------------------------------------------------------------------- */ 

(function($) {

	"use strict";

	var cfg = {		
		defAnimation   : "fadeInUp",    // default css animation		
		scrollDuration : 800,           // smoothscroll duration
		mailChimpURL   : 'http://facebook.us8.list-manage.com/subscribe/post?u=cdb7b577e41181934ed6a6a44&amp;id=e65110b38d'
	},	

	$WIN = $(window);
	

   // Add the User Agent to the <html>
   // will be used for IE10 detection (Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0))
	var doc = document.documentElement;
	doc.setAttribute('data-useragent', navigator.userAgent);

	
	/* Preloader 
	 * -------------------------------------------------- */
	var ssPreloader = function() {

		$WIN.on('load', function() {	

			// force page scroll position to top at page refresh
			$('html, body').animate({ scrollTop: 0 }, 'normal');

	      // will first fade out the loading animation 
	    	$("#loader").fadeOut("slow", function(){

	        // will fade out the whole DIV that covers the website.
	        $("#preloader").delay(300).fadeOut("slow");

	      }); 
	  	});
	}; 


	/* FitVids
	------------------------------------------------------ */ 
	var ssFitVids = function() {
		$(".fluid-video-wrapper").fitVids();
	}; 


	/*	Masonry
	------------------------------------------------------ */
	var ssMasonryFolio = function() {

		var containerBricks = $('.bricks-wrapper');

		containerBricks.imagesLoaded( function() {
			containerBricks.masonry( {	
			  	itemSelector: '.brick',
			  	resize: true
			});
		});
	};


	/*	Light Gallery
	------------------------------------------------------- */
	var ssLightGallery = function() {

		$('#folio-wrap').lightGallery({  
			showThumbByDefault: false,
			hash: false,
			selector: ".item-wrap"		
		});
	};


	/* Flexslider
  	* ------------------------------------------------------ */
  	var ssFlexSlider = function() {

  		$WIN.on('load', function() {

		   $('#testimonial-slider').flexslider({
		   	namespace: "flex-",
		      controlsContainer: "",
		      animation: 'slide',
		      controlNav: true,
		      directionNav: false,
		      smoothHeight: true,
		      slideshowSpeed: 7000,
		      animationSpeed: 600,
		      randomize: false,
		      touch: true,
		   });

	   });

  	};


  	/* Carousel
	* ------------------------------------------------------ */
	var ssOwlCarousel = function() {

		$(".owl-carousel").owlCarousel({		
	      nav: false,
			loop: true,
	    	margin: 50,
	    	responsiveClass:true,
	    	responsive: {
	         0:{
	            items:2,
	            margin: 20
	         },
	         400:{
	            items:3,
	            margin: 30
	         },
	         600:{
	            items:4,
	            margin: 40
	         },
	         1000:{
	            items:6            
	         }
	    	}
		});

	};
  	


  	/* Menu on Scrolldown
	 * ------------------------------------------------------ */
	var ssMenuOnScrolldown = function() {

		var menuTrigger = $('#header-menu-trigger');

		$WIN.on('scroll', function() {

			if ($WIN.scrollTop() > 150) {				
				menuTrigger.addClass('opaque');
			}
			else {				
				menuTrigger.removeClass('opaque');
			}

		}); 
	};

	
  	/* OffCanvas Menu
	 * ------------------------------------------------------ */
   var ssOffCanvas = function() {

	       var menuTrigger = $('#header-menu-trigger'),
	       nav             = $('#menu-nav-wrap'),
	       closeButton     = nav.find('.close-button'),
	       siteBody        = $('body'),
	       mainContents    = $('section, footer');

		// open-close menu by clicking on the menu icon
		menuTrigger.on('click', function(e){
			e.preventDefault();
			menuTrigger.toggleClass('is-clicked');
			siteBody.toggleClass('menu-is-open');
		});

		// close menu by clicking the close button
		closeButton.on('click', function(e){
			e.preventDefault();
			menuTrigger.trigger('click');	
		});

		// close menu clicking outside the menu itself
		siteBody.on('click', function(e){		
			if( !$(e.target).is('#menu-nav-wrap, #header-menu-trigger, #header-menu-trigger span') ) {
				menuTrigger.removeClass('is-clicked');
				siteBody.removeClass('menu-is-open');
			}
		});

   };


  /* Smooth Scrolling
	* ------------------------------------------------------ */
	var ssSmoothScroll = function() {

		$('.smoothscroll').on('click', function (e) {
			var target = this.hash,
			$target    = $(target);
	 	
		 	e.preventDefault();
		 	e.stopPropagation();	   	

	    	$('html, body').stop().animate({
	       	'scrollTop': $target.offset().top
	      }, cfg.scrollDuration, 'swing').promise().done(function () {

	      	// check if menu is open
	      	if ($('body').hasClass('menu-is-open')) {
					$('#header-menu-trigger').trigger('click');
				}

	      	window.location.hash = target;
	      });
	  	});

	};


  /* Placeholder Plugin Settings
	* ------------------------------------------------------ */
	var ssPlaceholder = function() {
		$('input, textarea, select').placeholder();  
	};


  	/* Alert Boxes
  	------------------------------------------------------- */
  	var ssAlertBoxes = function() {

  		$('.alert-box').on('click', '.close', function() {
		  $(this).parent().fadeOut(500);
		}); 

  	};	  	
	

  /* Animations
	* ------------------------------------------------------- */
	var ssAnimations = function() {

		if (!$("html").hasClass('no-cssanimations')) {
			$('.animate-this').waypoint({
				handler: function(direction) {

					var defAnimationEfx = cfg.defAnimation;

					if ( direction === 'down' && !$(this.element).hasClass('animated')) {
						$(this.element).addClass('item-animate');

						setTimeout(function() {
							$('body .animate-this.item-animate').each(function(ctr) {
								var el       = $(this),
								animationEfx = el.data('animate') || null;	

	                  	if (!animationEfx) {
			                 	animationEfx = defAnimationEfx;	                 	
			               }

			              	setTimeout( function () {
									el.addClass(animationEfx + ' animated');
									el.removeClass('item-animate');
								}, ctr * 30);

							});								
						}, 100);
					
					}

					// trigger once only
	       		this.destroy(); 
				}, 
				offset: '95%'
			}); 
		}

		if (!$("html").hasClass('no-cssanimations')) {
			$('.animate-right').waypoint({
				handler: function(direction) {

					var defAnimationEfx = cfg.defAnimation;

					if ( direction === 'right' && !$(right.element).hasClass('animated')) {
						$(right.element).addClass('item-animate');

						setTimeout(function() {
							$('body .animate-right.item-animate').each(function(ctr) {
								var el       = $(right),
								animationEfx = el.data('animate') || null;	

	                  	if (!animationEfx) {
			                 	animationEfx = defAnimationEfx;	                 	
			               }

			              	setTimeout( function () {
									el.addClass(animationEfx + ' animated');
									el.removeClass('item-animate');
								}, ctr * 30);

							});								
						}, 100);
					
					}

					// trigger once only
					right.destroy(); 
				}, 
				offset: '95%'
			}); 
		}
	
		if (!$("html").hasClass('no-cssanimations')) {
			$('.animate-left').waypoint({
				handler: function(direction) {

					var defAnimationEfx = cfg.defAnimation;

					if ( direction === 'left' && !$(left.element).hasClass('animated')) {
						$(left.element).addClass('item-left');

						setTimeout(function() {
							$('body .animate-left.item-animate').each(function(ctr) {
								var el       = $(left),
								animationEfx = el.data('animate') || null;	

	                  	if (!animationEfx) {
			                 	animationEfx = defAnimationEfx;	                 	
			               }

			              	setTimeout( function () {
									el.addClass(animationEfx + ' animated');
									el.removeClass('item-animate');
								}, ctr * 30);

							});								
						}, 100);
					
					}

					// trigger once only
	       		left.destroy(); 
				}, 
				offset: '95%'
			}); 
		}	
	
	};
	

  /* Intro Animation
	* ------------------------------------------------------- */
	var ssIntroAnimation = function() {

		$WIN.on('load', function() {
		
	     	if (!$("html").hasClass('no-cssanimations')) {
	     		setTimeout(function(){
	    			$('.animate-intro').each(function(ctr) {
						var el = $(this),
	                   animationEfx = el.data('animate') || null;		                                      

	               if (!animationEfx) {
	                 	animationEfx = cfg.defAnimation;	                 	
	               }

	              	setTimeout( function () {
							el.addClass(animationEfx + ' animated');
						}, ctr * 300);
					});						
				}, 100);
	     	} 
		}); 

	};


  /* Contact Form
   * ------------------------------------------------------ */
   var ssContactForm = function() {   	

   	/* local validation */   	
		$('#contactForm').validate({

			/* submit via ajax */
			submitHandler: function(form) {				
				var sLoader = $('#submit-loader');			

				$.ajax({   	
			      type: "POST",
			      url: "inc/sendEmail.php",
			      data: $(form).serialize(),

			      beforeSend: function() { 
			      	sLoader.fadeIn(); 
			      },
			      success: function(msg) {
		            // Message was sent
		            if (msg == 'OK') {
		            	sLoader.fadeOut(); 
		               $('#message-warning').hide();
		               $('#contactForm').fadeOut();
		               $('#message-success').fadeIn();   
		            }
		            // There was an error
		            else {
		            	sLoader.fadeOut(); 
		               $('#message-warning').html(msg);
			            $('#message-warning').fadeIn();
		            }
			      },
			      error: function() {
			      	sLoader.fadeOut(); 
			      	$('#message-warning').html("Something went wrong. Please try again.");
			         $('#message-warning').fadeIn();
			      }
		      });    		
	  		}

		});
   };	


  /* AjaxChimp
	* ------------------------------------------------------ */
	var ssAjaxChimp = function() {

		$('#mc-form').ajaxChimp({
			language: 'es',
		   url: cfg.mailChimpURL
		});

		// Mailchimp translation
		//
		//  Defaults:
		//	 'submit': 'Submitting...',
		//  0: 'We have sent you a confirmation email',
		//  1: 'Please enter a value',
		//  2: 'An email address must contain a single @',
		//  3: 'The domain portion of the email address is invalid (the portion after the @: )',
		//  4: 'The username portion of the email address is invalid (the portion before the @: )',
		//  5: 'This email address looks fake or invalid. Please enter a real email address'

		$.ajaxChimp.translations.es = {
		  'submit': 'Submitting...',
		  0: '<i class="fa fa-check"></i> We have sent you a confirmation email',
		  1: '<i class="fa fa-warning"></i> You must enter a valid e-mail address.',
		  2: '<i class="fa fa-warning"></i> E-mail address is not valid.',
		  3: '<i class="fa fa-warning"></i> E-mail address is not valid.',
		  4: '<i class="fa fa-warning"></i> E-mail address is not valid.',
		  5: '<i class="fa fa-warning"></i> E-mail address is not valid.'
		} 

	};

 
  /* Back to Top
	* ------------------------------------------------------ */
	var ssBackToTop = function() {

		var pxShow  = 500,         // height on which the button will show
		fadeInTime  = 400,         // how slow/fast you want the button to show
		fadeOutTime = 400,         // how slow/fast you want the button to hide
		scrollSpeed = 300,         // how slow/fast you want the button to scroll to top. can be a value, 'slow', 'normal' or 'fast'
		goTopButton = $("#go-top")

		// Show or hide the sticky footer button
		$(window).on('scroll', function() {
			if ($(window).scrollTop() >= pxShow) {
				goTopButton.fadeIn(fadeInTime);
			} else {
				goTopButton.fadeOut(fadeOutTime);
			}
		});
	};	


  
  /* Initialize
	* ------------------------------------------------------ */
	(function ssInit() {

		ssPreloader();
		ssFitVids();
		ssMasonryFolio();
		ssLightGallery();
		ssFlexSlider();
		ssOwlCarousel();
		ssMenuOnScrolldown();
		ssOffCanvas();
		ssSmoothScroll();
		ssPlaceholder();
		ssAlertBoxes();
		ssAnimations();
		ssIntroAnimation();		
		ssContactForm();
		ssAjaxChimp();
		ssBackToTop();

	})();
 

})(jQuery);



/* for side scrolling */

const scrollWrapper = document.querySelector('.scroll-wrapper');
const dots = document.querySelectorAll('.dot');
const totalItems = dots.length;
let currentIndex = 0;

function updateActiveItems(index) {
    const items = document.querySelectorAll('.scroll-item');
    items.forEach((item, i) => {
        if (i === index) {
            item.querySelector('.text-container').classList.add('active');
            item.querySelector('.side-container').classList.add('active');
        } else {
            item.querySelector('.text-container').classList.remove('active');
            item.querySelector('.side-container').classList.remove('active');
        }
    });

    dots.forEach((dot, i) => {
        if (i === index) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

function goToSlide(index) {
    if (index < 0 || index >= totalItems) return; // Prevent out-of-bounds index
    currentIndex = index;
    scrollWrapper.style.transform = `translateX(-${index * 100}vw)`;
    updateActiveItems(index);
}

document.getElementById('prev').addEventListener('click', () => {
    goToSlide(currentIndex - 1);
});

document.getElementById('next').addEventListener('click', () => {
    goToSlide(currentIndex + 1);
});

dots.forEach(dot => {
    dot.addEventListener('click', () => {
        const index = parseInt(dot.getAttribute('data-index'), 10);
        goToSlide(index);
    });
});

// Keyboard navigation
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
        goToSlide(currentIndex - 1);
    } else if (event.key === 'ArrowRight') {
        goToSlide(currentIndex + 1);
    }
});

// Initialize the first slide
goToSlide(0);


// Smooth scroll function
document.addEventListener("DOMContentLoaded", function() {
    const ctaButton = document.querySelector('.cta-button');
    
    ctaButton.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});


document.getElementById("openButton").addEventListener("click", function() {
    var container2 = document.getElementById("container2");
    if (container2.style.display === "none" || container2.style.display === "") {
        container2.style.display = "block";
    } else {
        container2.style.display = "none";
    }
});

