$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });

  $('.owl-carousel').owlCarousel({
    loop:true,
    navigation:true,
    autoWidth:true,
    autoplay:true,
    autoplayTimeout:3000,
    loop:true,
    margin:40,
    autoHeight:true,
    responsive:{
      0:{
        items:1
      },
      600:{
        items:2
      },
      1000:{
        items:1
      }
    }
})