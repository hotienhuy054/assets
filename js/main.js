
document.addEventListener('DOMContentLoaded', function() {
  // Desktop OWL
  const slider = $('#slider-main .owl-carousel');
  slider.owlCarousel({
    items:1, loop:true, autoplay:true, autoplayTimeout:4000, dots:true, nav:true
  });

  $('.owl-4-30').owlCarousel({
    loop:true, margin:30, autoplay:true, autoplayTimeout:3500, dots:true,
    responsive:{0:{items:1},576:{items:2},992:{items:4}}
  });

  $('.product-owl-carousel').owlCarousel({
    loop:true, margin:30, dots:true,
    responsive:{0:{items:1},576:{items:2},992:{items:4}}
  });

  $('.owl-partner').owlCarousel({
    loop:true, margin:30, autoplay:true, autoplayTimeout:2500, dots:false, nav:false,
    responsive:{0:{items:2},576:{items:3},992:{items:6}}
  });

  // mmenu init (for mobile)
  if (typeof Mmenu !== 'undefined'){
    new Mmenu('#mmenu', {
      "navbars":[{ position:'top', content: ["searchfield"] }],
      "offCanvas": { "position" : "left" }
    });
  }
});
