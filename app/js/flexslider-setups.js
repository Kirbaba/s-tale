$(window).load(function() {
  // The slider being synced must be initialized first
  $('#project__carousel').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    itemWidth: 220,
    itemMargin: 10,
     minItems: 2,
    maxItems: 4,
    asNavFor: '#project__slider',
    prevText: "",
    nextText: ""
  });
 
  $('#project__slider').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: true,
    sync: "#project__carousel",
    prevText: "",
    nextText: ""
  });
});