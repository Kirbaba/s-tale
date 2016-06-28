jQuery(document).ready(function($) {
	jQuery(".gallery-carousel").owlCarousel({    
        navigation : true, // Show next and prev buttons
	      slideSpeed : 300,
	      pagination : false,
	      singleItem:true,
	      navigationText : false,
      });

  jQuery(".about-masterpieces__carousel").owlCarousel({        
      navigation : false, 
      items : 3,
      slideSpeed : 1000,
      paginationSpeed : 400,
      touchDrag: true,
      autoplayHoverPause: true,
      items: [3],
      itemsDesktop: [1280, 3],
      itemsDesktopSmall: [1000, 2],
      itemsMobile: [690, 1],
      navigation: true,
      navigationText : ["<span class='icon icon-slide-prev'></span>","<span class='icon icon-slide-next'></span>"],
      pagination : false

  });

  jQuery(".about-exhibition__carousel").owlCarousel({        
      navigation : false, 
      items : 3,
      slideSpeed : 1000,
      paginationSpeed : 400,
      touchDrag: true,
      autoplayHoverPause: true,
      items: [3],
      itemsDesktop: [1280, 3],
      itemsDesktopSmall: [1000, 2],
      itemsMobile: [690, 1],
      navigation: true,
      navigationText : ["<span class='icon icon-slide-prev'></span>","<span class='icon icon-slide-next'></span>"],
      pagination : false

  });

	jQuery(".franchise__carousel").owlCarousel({        
      navigation : true, // Show next and prev buttons
        slideSpeed : 300,
        pagination : false,
        singleItem:true,
        navigationText : ["<span class='icon icon-presentation-prev'></span>","<span class='icon icon-presentation-next'></span>"],

  });
});
